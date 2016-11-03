from flask_restful import reqparse
from flask_restful import Resource
from flask import  jsonify, abort, make_response, request, g
import MySQLdb
import collections
import logging

class AllBudgetData(Resource):
    def get(self):
        logger = logging.getLogger(" AllBudgetData get ")
        logger.info(' Entered into AllBudgetData get method ')

        try:
            cursor = g.appdb.cursor()
        except:
            logger.error('Database connection or url parameters error', exc_info=True)

        query = """ SELECT * from budget_dashboard """
        cursor.execute(query,)
        rv = cursor.fetchall()

        logger.info('Exited from the AllBudgetData Method')
        return jsonify({"status":"success","response":rv})

    def post(self):
        logger = logging.getLogger(" AllBudgetData POST ")
        logger.info(' Entered into AllBudgetData POST method')
        try:
            budgetRows = request.json
            cursor = g.appdb.cursor()
        except:
            logger.error('Database connection or url parameters error', exc_info=True)

        for row in budgetRows:
            query = """ UPDATE `budget_dashboard`SET `qtr_1` = %s,`qtr_2` = %s,
            `qtr_3` = %s, `qtr_4` = %s, `total_budget` = %s,
            `total_expenditure` = %s, `balance` = %s, `budget_req_upto_qtr_2` = %s,
            `remarks` = %s WHERE `id` = %s """
            cursor.execute(query, (row["qtr1"], row["qtr2"], row["qtr3"], row["qtr4"], row["totalBudget"],
            row["expenditure"], row["balance"], row["uptoQtr"], row["remarks"],row["id"]))    
            g.appdb.commit()
        logger.info('Exited from the AllBudgetData Method')
        return jsonify({"status":"success","response":budgetRows})

class AllVehicleData(Resource):
    def get(self):
        logger = logging.getLogger(" AllVehicleData get ")
        logger.info(' Entered into AllVehicleData get method ')
        try:
            cursor = g.appdb.cursor()
        except:
            logger.error('Database connection or url parameters error', exc_info=True)

        query = """ SELECT * from vehicle_dashboard """
        cursor.execute(query,)
        rv = cursor.fetchall()

        logger.info('Exited from the AllVehicleData Method')
        return jsonify({"status":"success","response":rv})

    def post(self):
        logger = logging.getLogger(" AllVehicleData POST ")
        logger.info(' Entered into AllVehicleData POST method')
        try:
            vehicleRows = request.json
            cursor = g.appdb.cursor()
        except:
            logger.error('Database connection or url parameters error', exc_info=True)
        for row in vehicleRows:
            query = """UPDATE `vehicle_dashboard`SET
            `general_no` = %s,`model_of_vehicle` = %s,
            `bearing_no` = %s,`condition_of_vehicle` =%s WHERE `id` =%s """
            cursor.execute(query,(row["general_no"], row["model"], row["bearing"], row["condition"], row["id"]))
            g.appdb.commit()
        logger.info('Exited from the AllVehicleData Method')
        return jsonify({"status":"success","response":vehicleRows})


class AllStaffData(Resource):
    def get(self):
        logger = logging.getLogger(" AllStaffData get ")
        logger.info(' Entered into AllStaffData get method ')
        try:
            cursor = g.appdb.cursor()
        except:
            logger.error('Database connection or url parameters error', exc_info=True)

        query = """ SELECT * from staff_dashboard """
        cursor.execute(query,)
        rv = cursor.fetchall()

        logger.info('Exited from the AllStaffData Method')
        return jsonify({"status":"success","response":rv})

    def post(self):
        logger = logging.getLogger(" AllStaffData POST ")
        logger.info(' Entered into AllStaffData POST method')
        try:
            staffRows = request.json
            cursor = g.appdb.cursor()
        except:
            logger.error('Database connection or url parameters error', exc_info=True)
        for row in staffRows:
            query = """UPDATE `staff_dashboard` SET `sanctioned` = %s,
            `actual` = %s, `vacancy` = %s,
            `order_id` = %s WHERE `id` = %s """
            cursor.execute(query,(row["sanctioned"], row["actual"], row["vacancy"], row["order"], row["id"]))
            g.appdb.commit()
        logger.info('Exited from the AllStaffData Method')
        return jsonify({"status":"success","response":staffRows})
