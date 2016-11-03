var userData = '';
$(document).ready(function() {
    userData = $.cookie('user');
    getDataEntryForm();
    $('.js-unitName').find('h4').text(userData.Name + ' UNIT');
    dataEntryFormTemplate = MyApp.templates.dataEntryform;
    entryformUpdatedDataTemplate = MyApp.templates.updatedForm;
});

$(document).delegate('.js-side-nav li', 'click',function(ev) {
  ev.preventDefault();
  $('.js-side-nav li').removeClass('active');
  $(ev.target).closest('li').addClass('active');
  if ($(this).find('a').attr('data-url') == "dataEntry") {
    $('.js-headingText').find('h2').text('Data Entry')
    getDataEntryForm();
  } else {
    $.cookie('user', null);
    document.location.href = '/';
  }
});
  function getDataEntryForm () {
    $.ajax({
      type: "GET",
      url: apiURL + "/route/userlogin/wings",
      contentType: "application/json; charset=utf-8",
      success: function(response) {
        var entryHtml = dataEntryFormTemplate();
        $('#js-dynamicDataDiv').html(entryHtml);
        $('.js-select-wing').html('');
        $('.js-select-wing').append('<option value="0">Select Wing</option>');
        var html = "";
        for (var i = 0; i < response.response.length; i++) {
          html += "<option value='" + response.response[i].wing_id + "'>" + response.response[i].wing_name + "</option>";
        }
        $('.js-select-wing').append(html);
        getDataEntryFormUpdatedData();
      }
    });
  }

$(document).delegate('.js-unitData-save', 'click', function(ev) {
  ev.preventDefault();
  var dataObj = {};
  dataObj.user_id = userData.id;
  dataObj.unit_name = userData.Name;
  dataObj.wing_id = $('.js-select-wing').val()
  dataObj.uiq = $('.js-order-inquery').val();
  dataObj.uin = $('.js-order-investigation').val();
  dataObj.pt = $('.js-order-pending').val();
  $.ajax({
    type: "POST",
    url: apiURL + "/route/userlogin/unitCrime",
    data: JSON.stringify(dataObj),
    contentType: "application/json; charset=utf-8",
    success: function(response) {
      $('.js-select-wing').val('0');
      $('.js-order-inquery').val('');
      $('.js-order-investigation').val('');
      $('.js-order-pending').val('');
      $('.js-total').val('');
      getDataEntryFormUpdatedData();
      new PNotify({
        title: 'Success!',
        text: 'Success',
        type: 'success',
        styling: 'fontawesome',
        hide: true,
        delay: 2000
      });
    },
    error: function(err) {
      new PNotify({
        title: 'Failed!',
        text: 'Sorry.',
        type: 'error',
        styling: 'fontawesome',
        hide: true,
        delay: 2000
      });
    }
  });
});

$(document).delegate('.js-unitData-reset', 'click', function(ev) {
  ev.preventDefault();
  $('.js-select-wing').val('0');
  $('.js-order-inquery').val('');
  $('.js-order-investigation').val('');
  $('.js-order-pending').val('');
  $('.js-total').val('');
});

function getDataEntryFormUpdatedData() {
  var unit_name = userData.Name;
  $.ajax({
    type: "GET",
    url: apiURL + "/route/userlogin/unitCrime",
    data: {
      'unit_name': unit_name
    },
    contentType: "application/json; charset=utf-8",
    success: function(response) {
      var data = {
        rows: response.response
      };
      var updatedHtml = entryformUpdatedDataTemplate(data);
      $('.js-updatedUnitDataDiv').html(updatedHtml);
    }
  });
}

$(document).delegate('.js-entryForm', 'keyup', function(ev) {
  ev.preventDefault();
  var count = parseInt(0);
  $('.js-tableBody td').each(function() {
    if ($(this).find('input.js-entryForm').val() > 0) {
      count = count + parseInt($(this).find('input.js-entryForm').val());
    }
    if (count > 0) {
      $('.js-total').val(count);
    } else {
      $('.js-total').val('');
    }
  })
})
