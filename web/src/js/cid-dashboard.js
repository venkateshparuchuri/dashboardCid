var userData = '';
$(document).ready(function() {
    userData = $.cookie('user');
    casesTemplate = MyApp.templates.cases;
    crimeWingsTemplate = MyApp.templates.crimeWings;
    crimeUnitTemplate = MyApp.templates.crimeUnits;
    staffTemplate = MyApp.templates.staff;
    staffGradeTemplate = MyApp.templates.staffGrade;
    staffTableTemplate = MyApp.templates.staffTable;
    budgetDashboardDataTemplate = MyApp.templates.budgetDashboard;
    budgetDataTemplate = MyApp.templates.budgetData;
    vehicleDashboardTemplate = MyApp.templates.vehicleDashboard;
    getCasesCount();
    getStaffCount();
    getBudgetDashboard();

    getVehicleDashboard();
    //getVehicleDashboardType();
});

function getBudgetDashboard() {
  $.ajax({
    type: "GET",
    url: apiURL + "/route/officer/budgetDashboard",
    contentType: "application/json; charset=utf-8",
    success: function(response) {
      var data = {
        rows: response.response
      };
      var budgetDataHtml = budgetDashboardDataTemplate(data);
      $('#js-budgetDashboardDiv').html(budgetDataHtml);
    }
  });
}

function getVehicleDashboard() {
  $.ajax({
    type: "GET",
    url: apiURL + "/route/officer/vehicleDashboard",
    contentType: "application/json; charset=utf-8",
    success: function(response) {
      var data1 = _.pluck(response.response, 'ro');
      var uniqData = _.uniq(data1);
      var dataArray =[];
      for (var i=0; i < uniqData.length; i++) {
        var dataObj ={};
        dataObj.ro = uniqData[i];
        var ro = uniqData[i];
        dataObj.count = 0;
        for (var j=0; j < response.response.length ; j++) {
          if (ro == response.response[j].ro) {
            if (response.response[j].condition_of_vehicle != '' && response.response[j].condition_of_vehicle == "GOOD") {
              dataObj.GOOD = response.response[j].vehicle_count;
              dataObj.count = dataObj.count+parseInt(response.response[j].vehicle_count);
            } else if (response.response[j].condition_of_vehicle != '' && response.response[j].condition_of_vehicle == "NEW") {
              dataObj.NEW = response.response[j].vehicle_count;
              dataObj.count = dataObj.count+parseInt(response.response[j].vehicle_count)
            } else if (response.response[j].condition_of_vehicle != '' && response.response[j].condition_of_vehicle == "FOR CONDEMNATION") {
              dataObj.FORCONDEMNATION = response.response[j].vehicle_count;
              dataObj.count = dataObj.count+parseInt(response.response[j].vehicle_count)
            } else if (response.response[j].condition_of_vehicle != '' && response.response[j].condition_of_vehicle == "REPAIR") {
              dataObj.REPAIR = response.response[j].vehicle_count;
              dataObj.count = dataObj.count+parseInt(response.response[j].vehicle_count)
            } else if (response.response[j].condition_of_vehicle != '' && response.response[j].condition_of_vehicle == "OLD") {
              dataObj.OLD = response.response[j].vehicle_count;
              dataObj.count = dataObj.count+parseInt(response.response[j].vehicle_count)
            }
          }
        }
        dataArray.push(dataObj);
      }
      var data = {
        rows: dataArray
      };
      var casesHtml = vehicleDashboardTemplate(data);
      $('#js-vehicleDashboardDiv').html(casesHtml);
    }
  });
}
function getVehicleDashboardType() {
  $.ajax({
    type: "GET",
    url: apiURL + "/route/officer/vehicleDashboardType",
    contentType: "application/json; charset=utf-8",
    success: function(response) {
      console.log(response);
    }
  });
}
function getCasesCount() {
  $.ajax({
    type: "GET",
    url: apiURL + "/route/officer/crimeReport",
    contentType: "application/json; charset=utf-8",
    success: function(response) {
      var data = {
        rows: response.response
      };
      var casesHtml = casesTemplate(data);
      $('#js-dynamicDataDiv').html(casesHtml);
      getCrimeReportWings();
      getCrimeUnitData();
    }
  });
}

function getCrimeReportWings() {
  $.ajax({
    type: "GET",
    url: apiURL + "/route/officer/crimeReportWings",
    contentType: "application/json; charset=utf-8",
    success: function(response) {
      var wings = [];
      var wingsData = _.groupBy(response.response,"wing_name");
      var wingSumUiq = _.reduce(response.response, function(memo, item) {
        memo[item.wing_name] = (parseInt(memo[item.wing_name]) || 0) + (parseInt(item.uiq)||0);
        return memo;
        }, {});
      var wingSumUin = _.reduce(response.response, function(memo, item) {
        memo[item.wing_name] = (parseInt(memo[item.wing_name]) || 0) + (parseInt(item.uin)||0);
        return memo;
        }, {});
      var wingSumpt = _.reduce(response.response, function(memo, item) {
        memo[item.wing_name] = (parseInt(memo[item.wing_name]) || 0) + (parseInt(item.pt)||0);
        return memo;
      }, {});
      _.each(Object.keys(wingsData), function (wing){
        var wingObj = {};
        wingObj.wing_name = wing;
        wingObj.uiq = wingSumUiq[wing];
        wingObj.uin = wingSumUin[wing];
        wingObj.pt = wingSumpt[wing];
        wingObj.wing_trim = wing.split(' ')[0];
        wingObj.allzones = _.groupBy(wingsData[wing],"zone_name");
        wingObj.zones = [];
        _.each(Object.keys(wingObj.allzones) , function (zone){
            var zoneObj = {};
            zoneObj.zone_name = zone;
            zoneObj.zone_trim = zone.split(' ')[0];
            zoneObj.uiq =  _.reduce(wingObj.allzones[zone], function(memo, item) {
              memo[item.zone_name] = (parseInt(memo[item.zone_name]) || 0) + (parseInt(item.uiq)||0);
              return memo;
            },{})[zone];
            zoneObj.uin =  _.reduce(wingObj.allzones[zone], function(memo, item) {
              memo[item.zone_name] = (parseInt(memo[item.zone_name]) || 0) + (parseInt(item.uin)||0);
              return memo;
            },{})[zone];
            zoneObj.pt =  _.reduce(wingObj.allzones[zone], function(memo, item) {
              memo[item.zone_name] = (parseInt(memo[item.zone_name]) || 0) + (parseInt(item.pt)||0);
              return memo;
            },{})[zone];
            zoneObj.units = _.filter(wingsData[wing],function(item) {
                          return item.zone_name === zone;
                          });
            wingObj.zones.push(zoneObj);
        });
        wings.push(wingObj);
      });
      var wingsHtml = crimeWingsTemplate({rows: wings});
      $('.js-crimeWingsTable').html(wingsHtml);
    }
  });
}

function getCrimeUnitData() {
  $.ajax({
    type: "GET",
    url: apiURL + "/route/officer/crimeReportUnits",
    contentType: "application/json; charset=utf-8",
    success: function(response) {
      var data = {
        rows: response.response
      };
      var zones = [];
      var zonedData = _.groupBy(response.response,"zone_name");
      var zoneUiqSum = _.reduce(response.response, function(memo, item) {
        memo[item.zone_name] = (parseInt(memo[item.zone_name]) || 0) + (parseInt(item.uiq)||0);
        return memo;
        }, {});
      var zoneUinSum = _.reduce(response.response, function(memo, item) {
        memo[item.zone_name] = (parseInt(memo[item.zone_name]) || 0) + (parseInt(item.uin)||0);
        return memo;
      }, {});
      var zonePtSum = _.reduce(response.response, function(memo, item) {
        memo[item.zone_name] = (parseInt(memo[item.zone_name]) || 0) + (parseInt(item.pt)||0);
        return memo;
      }, {});
      _.each(Object.keys(zonedData), function (zone){
        var zoneObj = {};
        zoneObj.zone_name = zone;
        zoneObj.uiq = zoneUiqSum[zone];
        zoneObj.uin = zoneUinSum[zone];
        zoneObj.pt = zonePtSum[zone];
        zoneObj.zone_trim = zone.split(' ')[0];
        zoneObj.units = zonedData[zone];
        zones.push(zoneObj);
      });
      var zonesData = {rows: zones, zoneRows:zonedData};
      var unitsHtml = crimeUnitTemplate(zonesData);
      $('.js-crimeUnitsTable').html(unitsHtml);
    }
  });
}

function getStaffCount() {
  $.ajax({
    type: "GET",
    url: apiURL + "/route/officer/staffTotals",
    contentType: "application/json; charset=utf-8",
    success: function(response) {
      var data = {
        rows: response.response
      };
      var casesHtml = staffTemplate(data);
      $('#js-staffDataDiv').append(casesHtml);
      getStaffGrades()
    }
  });
}

function getStaffGrades() {
  $.ajax({
    type: "GET",
    url: apiURL + "/route/officer/staffGrade",
    contentType: "application/json; charset=utf-8",
    success: function(response) {
      var data = {
        rows: response.response
      };
      var gradesHtml = staffGradeTemplate(data);
      $('.js-staffGradeTable').html(gradesHtml);
    }
  });
}

$(document).delegate('.js-graderRows', 'click', function(ev) {
  ev.preventDefault();
  var Grade = $(this).closest('div.js-graderRows').attr('data-Grade');
  var el = $(this).closest('div.js-graderRows').find('div.js-gradeTabBody');
  $.ajax({
    type: "GET",
    url: apiURL + "/route/officer/staffGradeInd",
    data: {
      'grade': Grade
    },
    contentType: "application/json; charset=utf-8",
    success: function(response) {
      var data = {
        rows: response.response
      };
      var gradeHtml = staffTableTemplate(data);
      $(el).html(gradeHtml);
    }
  });
})

$(document).delegate('.js-budgetHeaders','click', function(ev) {
  ev.preventDefault();
  //getBudgetDashboardType($(this).attr('data-type'));
  var divEl = $(this).parent().parent().find('div.js-budgetelabarate');
  $.ajax({
    type: "GET",
    url: apiURL + "/route/officer/budgetDashboardType",
    data: {
      'type': $(this).attr('data-type')
    },
    contentType: "application/json; charset=utf-8",
    success: function(response) {
      var data = {
        rows: response.response
      };
      var gradeHtml = budgetDataTemplate(data);
      $(divEl).html(gradeHtml);
    }
  });
})

$(document).delegate('.js-vehicleElabarate','click', function(ev) {
  ev.preventDefault();
  var divEl = $(this).parent().find('div.js-vehicleElabarate');
  $.ajax({
    type: "GET",
    url: apiURL + "/route/officer/vehicleDashboardType",
    data: {
      'type': $(this).attr('data-type')
    },
    contentType: "application/json; charset=utf-8",
    success: function(response) {
      var data = {
        rows: response.response
      };
      var gradeHtml = budgetDataTemplate(data);
      $(divEl).html(gradeHtml);
    }
  });
})
