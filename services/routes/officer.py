from flask_restful import reqparse
from flask_restful import Resource
from flask import  jsonify, abort, make_response, request, g
import MySQLdb
import collections
import logging


class CrimeReport(Resource):
    def get(self):
        logger = logging.getLogger(" CrimeReport get ")
        logger.info(' Entered into CrimeReport get method ')

        try:
            cursor = g.appdb.cursor()
        except:
            logger.error('Database connection or url parameters error', exc_info=True)

        query = """ SELECT cast(sum(ucd.uiq) as char) as uiq, cast(sum(ucd.uin) as char) as uin, cast(sum(ucd.pt) as char) as pt
              FROM unit_crime_dashboard ucd
              join  wings w on w.id = ucd.wing_id
              join units u on u.id = ucd.unit_id
              where ucd.flag = 1"""
        cursor.execute(query,)
        rv = cursor.fetchall()

        logger.info('Exited from the CrimeReport Method')
        return jsonify({"status":"success","response":rv})

class CrimeReportWings(Resource):
    def get(self):
        logger = logging.getLogger(" CrimeReportWings get ")
        logger.info(' Entered into CrimeReportWings get method ')

        try:
            cursor = g.appdb.cursor()
        except:
            logger.error('Database connection or url parameters error', exc_info=True)

        query = """ SELECT w.wing_name, u.unit_name, z.zone_name,
        cast(ucd.uiq as char) as uiq,
        cast(ucd.uin as char) as uin, cast(ucd.pt as char) as pt
        from  unit_crime_dashboard ucd
        inner join units u on u.id = ucd.unit_id
        inner join wings w on w.id = ucd.wing_id
        inner join zones z on z.id = u.zone_id
        where ucd.flag=1 """
        cursor.execute(query,)
        rv = cursor.fetchall()

        logger.info('Exited from the CrimeReportWings Method')
        return jsonify({"status":"success","response":rv})

class CrimeReportUnits(Resource):
    def get(self):
        logger = logging.getLogger(" CrimeReportUnits get ")
        logger.info(' Entered into CrimeReportUnits get method ')

        try:
            cursor = g.appdb.cursor()
        except:
            logger.error('Database connection or url parameters error', exc_info=True)

        query = """ SELECT u.unit_name, cast(sum(ucd.uiq) as char) as uiq,
        cast(sum(ucd.uin) as char) as uin, cast(sum(ucd.pt) as char) as pt,
        z.zone_name
        FROM unit_crime_dashboard ucd
              join  wings w on w.id=ucd.wing_id
              join units u on u.id=ucd.unit_id
              inner join zones z on z.id = u.zone_id
              where ucd.flag=1
              group by u.id
              order by u.order_id """
        cursor.execute(query,)
        rv = cursor.fetchall()

        logger.info('Exited from the CrimeReportUnits Method')
        return jsonify({"status":"success","response":rv})

class StaffTotals(Resource):
    def get(self):
        logger = logging.getLogger(" StaffTotals get ")
        logger.info(' Entered into StaffTotals get  method ')

        try:
            cursor = g.appdb.cursor()
        except:
            logger.error('Database connection or url parameters error', exc_info=True)

        query = """ SELECT cast(sum(sanctioned) as char) AS Sanctioned, cast(sum(actual) as char) AS Actual , cast(sum(vacancy) as char) AS Vacancy
              FROM staff_dashboard """
        cursor.execute(query,)
        rv = cursor.fetchall()

        logger.info('Exited from the StaffTotals Method')
        return jsonify({"status":"success","response":rv})

class StaffGrade(Resource):
    def get(self):
        logger = logging.getLogger(" StaffGrade get ")
        logger.info(' Entered into StaffGrade get method ')

        try:
            cursor = g.appdb.cursor()
        except:
            logger.error('Database connection or url parameters error', exc_info=True)

        query = """ SELECT grade AS Grade, cast(sum(sanctioned) as char) AS Sanctioned, cast(sum(actual) as char) AS Actual , cast(sum(vacancy) as char) AS Vacancy
              FROM staff_dashboard group by grade order by order_id """
        cursor.execute(query,)
        rv = cursor.fetchall()

        logger.info('Exited from the StaffGrade Method')
        return jsonify({"status":"success","response":rv})

class StaffGradeInd(Resource):
    def get(self):
        logger = logging.getLogger(" StaffGradeInd get ")
        logger.info(' Entered into StaffGradeInd get method ')

        try:
            grade = str(request.args.get("grade"))
            cursor = g.appdb.cursor()
        except:
            logger.error('Database connection or url parameters error', exc_info=True)

        query = """ SELECT grade AS Grade , rank AS Rank, cast(sanctioned as char) AS Sanctioned, cast(actual as char) AS Actual , cast(vacancy as char) AS Vacancy
              FROM staff_dashboard where Grade = %s """
        cursor.execute(query, (grade, ))
        rv = cursor.fetchall()

        logger.info('Exited from the StaffGradeInd Method')
        return jsonify({"status":"success","response":rv})

class BudgetDashboard(Resource):
    def get(self):
        logger = logging.getLogger(" BudgetDashboard get ")
        logger.info(' Entered into BudgetDashboard get method ')

        try:
            cursor = g.appdb.cursor()
        except:
            logger.error('Database connection or url parameters error', exc_info=True)

        query = """ SELECT type, concat(" Rs. ", format(sum(balance), 0)) as balance, concat(" Rs. ", format(sum(total_budget), 0)) as total_budget,
        concat(" Rs. ", format(sum(total_expenditure), 0)) as total_expenditure
        FROM budget_dashboard group by type order by id """
        cursor.execute(query, )
        rv = cursor.fetchall()

        logger.info('Exited from the BudgetDashboard Method')
        return jsonify({"status":"success","response":rv})

class BudgetDashboardType(Resource):
    def get(self):
        logger = logging.getLogger(" BudgetDashboardType get ")
        logger.info(' Entered into BudgetDashboardType get method ')

        try:
            Type = str(request.args.get("type"))
            cursor = g.appdb.cursor()
        except:
            logger.error('Database connection or url parameters error', exc_info=True)

        query = """ SELECT account_head, concat(" Rs. ", format(sum(balance), 0)) as balance, concat(" Rs. ", format(sum(total_budget), 0)) as total_budget,
        concat(" Rs. ", format(sum(total_expenditure), 0)) as total_expenditure
        FROM budget_dashboard where type = %s group by account_head order by id """
        cursor.execute(query,(Type, ) )
        rv = cursor.fetchall()

        logger.info('Exited from the BudgetDashboardType Method')
        return jsonify({"status":"success","response":rv})

class VehicleDashboard(Resource):
    def get(self):
        logger = logging.getLogger(" VehicleDashboard get ")
        logger.info(' Entered into VehicleDashboard get method ')

        try:
            cursor = g.appdb.cursor()
        except:
            logger.error('Database connection or url parameters error', exc_info=True)

        query = """ SELECT ro, condition_of_vehicle, count(condition_of_vehicle) AS vehicle_count FROM vehicle_dashboard group by ro,condition_of_vehicle """
        cursor.execute(query, )
        rv = cursor.fetchall()

        logger.info('Exited from the VehicleDashboard Method')
        return jsonify({"status":"success","response":rv})

class VehicleDashboardType(Resource):
    def get(self):
        logger = logging.getLogger(" VehicleDashboardType get ")
        logger.info(' Entered into VehicleDashboardType get method ')

        try:
            Type = str(request.args.get("type"))
            cursor = g.appdb.cursor()
        except:
            logger.error('Database connection or url parameters error', exc_info=True)

        query = """ SELECT * FROM vehicle_dashboard where ro = %s """
        cursor.execute(query,(Type, ) )
        rv = cursor.fetchall()

        logger.info('Exited from the VehicleDashboardType Method')
        return jsonify({"status":"success","response":rv})
