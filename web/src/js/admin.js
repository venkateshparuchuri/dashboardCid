$(document).ready(function(){
  editBudgetDataTemp = MyApp.templates.budgetEdit;
  editVehicleDataTemp = MyApp.templates.vehicleEdit;
  editStaffDataTemp = MyApp.templates.staffEdit;

  allBudgetData();

$(document).delegate('.js-admin-budgetData-save','click', function(ev){
    ev.preventDefault();
    saveBudgetData();
});

$(document).delegate('.js-admin-budgetData-complete','click', function(ev){
    ev.preventDefault();
    saveBudgetData();
});

$(document).delegate('.js-admin-vehicle-save','click', function(ev){
    ev.preventDefault();
    saveVehicleData();
});

$(document).delegate('.js-admin-vehicle-complete','click', function(ev){
    ev.preventDefault();
    saveVehicleData();
});
$(document).delegate('.js-admin-staff-save','click', function(ev){
    ev.preventDefault();
    saveStaffData();
});
$(document).delegate('.js-admin-staff-complete','click', function(ev){
    ev.preventDefault();
    saveStaffData();
});

});




function allBudgetData(){
  $.ajax({
    type: "GET",
    url: apiURL + "/route/admin/allBudgetedit",
    contentType: "application/json; charset=utf-8",
    success: function(response) {
      var budget = {rows:response.response};
      $('#js-admin-budgetData').html(editBudgetDataTemp(budget));
    }
  });
}

function saveBudgetData(){
  var budgetRows = [];
  $('#js-admin-budgetData tbody').find('tr').each(function(index, el){
    var budgetObj = {};
    budgetObj.id = $(el).data('budget-id');
    budgetObj.balance = $(el).find('input.js-budget-balance').val();
    budgetObj.qtr1 = $(el).find('input.js-budget-qtr1').val();
    budgetObj.qtr2 = $(el).find('input.js-budget-qtr2').val();
    budgetObj.qtr3 = $(el).find('input.js-budget-qtr3').val();
    budgetObj.qtr4 = $(el).find('input.js-budget-qtr4').val();
    budgetObj.totalBudget = $(el).find('input.js-budget-totalBudget').val();
    budgetObj.expenditure = $(el).find('input.js-budget-expenditure').val();
    budgetObj.uptoQtr  = $(el).find('input.js-budget-uptoQtr').val();
    budgetObj.remarks = $(el).find('input.js-budget-remarks').val();
    budgetRows.push(budgetObj);
  });
  $.ajax({
      type: "POST",
      url: apiURL + "/route/admin/allBudgetedit",
      data: JSON.stringify(budgetRows),
      contentType: "application/json; charset=utf-8",
      success: function(response) {
        allBudgetData();
        new PNotify({
          title: 'Success!',
          text: 'Stock Balance has been saved successfully.',
          type: 'success',
          styling: 'fontawesome',
          hide: true,
          delay: 2000
        });
      }
    });
}

function allVehicleData(){
  $.ajax({
    type: "GET",
    url: apiURL + "/route/admin/allVehicleEdit",
    contentType: "application/json; charset=utf-8",
    success: function(response) {
      var vehicle = {rows:response.response};
      $('#js-admin-vehicle').html(editVehicleDataTemp(vehicle));
    }
  });
}

function saveVehicleData(){
  var vehicleRows = [];
  $('#js-admin-vehicle tbody').find('tr').each(function(index, el){
    var vehicleObj = {};
    vehicleObj.id = $(el).data('vehicle-id');
    vehicleObj.general_no = $(el).find('input.js-vehicle-general').val();
    vehicleObj.model = $(el).find('input.js-vehicle-model').val();
    vehicleObj.bearing = $(el).find('input.js-vehicle-bearing').val();
    vehicleObj.condition = $(el).find('input.js-vehicle-condition').val();
    vehicleRows.push(vehicleObj);
  });
  debugger;
  $.ajax({
      type: "POST",
      url: apiURL + "/route/admin/allVehicleEdit",
      data: JSON.stringify(vehicleRows),
      contentType: "application/json; charset=utf-8",
      success: function(response) {
        allVehicleData();
        new PNotify({
          title: 'Success!',
          text: 'Vehicle Information has been saved successfully.',
          type: 'success',
          styling: 'fontawesome',
          hide: true,
          delay: 2000
        });
      }
    });
}


function allStaffData(){
  $.ajax({
    type: "GET",
    url: apiURL + "/route/admin/allStaffEdit",
    contentType: "application/json; charset=utf-8",
    success: function(response) {
      var staff = {rows:response.response};
      $('#js-admin-staff').html(editStaffDataTemp(staff));
    }
  });
}

function saveStaffData(){
  var staffRows = [];
  $('#js-admin-staff tbody').find('tr').each(function(index, el){
    var staffObj = {};
    staffObj.id = $(el).data('staff-id');
    staffObj.sanctioned = $(el).find('input.js-staff-sanctioned').val();
    staffObj.actual = $(el).find('input.js-staff-actual').val();
    staffObj.vacancy = $(el).find('input.js-staff-vacancy').val();
    staffObj.order = $(el).find('input.js-staff-order').val();
    staffRows.push(staffObj);
  });
  $.ajax({
      type: "POST",
      url: apiURL + "/route/admin/allStaffEdit",
      data: JSON.stringify(staffRows),
      contentType: "application/json; charset=utf-8",
      success: function(response) {
        allVehicleData();
        new PNotify({
          title: 'Success!',
          text: 'Staff Information has been saved successfully.',
          type: 'success',
          styling: 'fontawesome',
          hide: true,
          delay: 2000
        });
      }
    });
}
