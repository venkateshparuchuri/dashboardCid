from flask_restful import reqparse
from flask_restful import Resource
from flask import  jsonify, abort, make_response, request, g
import MySQLdb
import collections
import logging

from flask_inputs import Inputs
from flask_inputs.validators import JsonSchema
from jsonschema import validate

UserLoginSchema = {
    'type': 'object',
    'properties': {
        'userid': {'type': 'string'},
		'password': {'type': 'string'}
    },
	"required": ["password","userid"]
}

class UserLoginSchemaApiInputs(Inputs):
    json = [JsonSchema(schema=UserLoginSchema)]

class UserLogin(Resource):
    def post(self):
        logger = logging.getLogger("UserLogin post")
        logger.info('Entered into UserLogin method')

        inputs = UserLoginSchemaApiInputs(request)
        if not inputs.validate():
            return jsonify(success=False, errors=inputs.errors)

        try:
            user = request.json
            cursor = g.appdb.cursor()
            username = user["userid"]
            password = user["password"]

        except:
            logger.error("variables from url", exc_info=True)

        query = """ SELECT u.id, u.name AS Name, u.role, u.email FROM user u where u.user_id = %s and u.password = %s """
        cursor.execute(query,(username, password))
        rv = cursor.fetchall()

        return jsonify({"status":"success","response":rv})

class Wings(Resource):
    def get(self):
        logger = logging.getLogger(" Wings ")
        logger.info(' Entered into Wings get  method ')

        try:
            cursor = g.appdb.cursor()

        except:
            logger.error('Database connection or url parameters error', exc_info=True)

        query = """ SELECT id AS wing_id, wing_name FROM wings order by order_id """
        cursor.execute(query,)
        rv = cursor.fetchall()
        logger.info('Exited from the Wings Method')
        return jsonify({"status":"success","response":rv})

class UnitCrime(Resource):
    def post(self):
        logger = logging.getLogger("UnitCrime post")
        logger.info('Entered into UnitCrime post method')

        try:
            unitcrime = request.json
            cursor = g.appdb.cursor()
            flag = 0

        except:
            logger.error('Either db connection or date calculation error', exc_info=True)

        query = """ SELECT id FROM units where unit_name = %s """
        cursor.execute(query,(unitcrime['unit_name'], ))
        unit = cursor.fetchone()

        sub_query = """ SELECT id FROM unit_crime_dashboard where user_id = %s and wing_id = %s and unit_id = %s """
        cursor.execute(sub_query,(unitcrime['user_id'], unitcrime['wing_id'], unit['id'] ))
        rv = cursor.fetchall()

        if len(rv) > 0:
            update_query = """ UPDATE unit_crime_dashboard SET flag = %s where user_id = %s and wing_id = %s and unit_id = %s """
            cursor.execute(update_query, (flag, unitcrime['user_id'], unitcrime['wing_id'], unit['id']))
            g.appdb.commit()

            insert_query = """ INSERT INTO unit_crime_dashboard (user_id, wing_id, unit_id, uiq, uin, pt) VALUES (%s, %s, %s, %s, %s, %s) """
            cursor.execute(insert_query, (unitcrime['user_id'], unitcrime['wing_id'], unit['id'], unitcrime['uiq'], unitcrime['uin'], unitcrime['pt']))
            g.appdb.commit()
            newID = cursor.lastrowid

        else:
            insert_query = """ INSERT INTO unit_crime_dashboard (user_id, wing_id, unit_id, uiq, uin, pt) VALUES (%s, %s, %s, %s, %s, %s) """
            cursor.execute(insert_query, (unitcrime['user_id'], unitcrime['wing_id'], unit['id'], unitcrime['uiq'], unitcrime['uin'], unitcrime['pt']))
            g.appdb.commit()
            newID = cursor.lastrowid

        logger.info('Exited from ReportStatus post method')
        return jsonify({"status":"inserted", "response":newID})

    def get(self):
        logger = logging.getLogger(" Wings ")
        logger.info(' Entered into Wings get  method ')

        try:
            cursor = g.appdb.cursor()
            unit_name = str(request.args.get("unit_name"))
            flag = 1

        except:
            logger.error('Database connection or url parameters error', exc_info=True)

        sub_query = """   SELECT w.wing_name, ucd.uiq, ucd.uin, ucd.pt, ucd.created_date
                  FROM unit_crime_dashboard ucd
                  inner join units u on ucd.unit_id = u.id
                  inner join wings w on ucd.wing_id = w.id
                  where u.unit_name = %s and flag = %s  ORDER BY w.order_id """
        cursor.execute(sub_query, (unit_name, flag))
        unit = cursor.fetchall()

        logger.info('Exited from the Wings Method')
        return jsonify({"status":"success","response":unit})
