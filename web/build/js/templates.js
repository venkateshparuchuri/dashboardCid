this["MyApp"] = this["MyApp"] || {};
this["MyApp"]["templates"] = this["MyApp"]["templates"] || {};
this["MyApp"]["templates"]["budgetDashboard"] = Handlebars.template({"1":function(depth0,helpers,partials,data) {
  var helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return "              <div class=\"col-sm-3 js-budgetHeaders\" data-type=\""
    + escapeExpression(((helper = (helper = helpers.type || (depth0 != null ? depth0.type : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"type","hash":{},"data":data}) : helper)))
    + "\">\n                  <div class=\"count_num\">\n                        <ul>\n                        <li><h3>"
    + escapeExpression(((helper = (helper = helpers.type || (depth0 != null ? depth0.type : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"type","hash":{},"data":data}) : helper)))
    + "<hr/></h3></li>\n                        <li><h4>Total Budget:"
    + escapeExpression(((helper = (helper = helpers.total_budget || (depth0 != null ? depth0.total_budget : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"total_budget","hash":{},"data":data}) : helper)))
    + "</h4></li>\n                        <li><h4>Total Expenditure:"
    + escapeExpression(((helper = (helper = helpers.total_expenditure || (depth0 != null ? depth0.total_expenditure : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"total_expenditure","hash":{},"data":data}) : helper)))
    + "</h4></li>\n                        <li><h4>Balance:"
    + escapeExpression(((helper = (helper = helpers.balance || (depth0 != null ? depth0.balance : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"balance","hash":{},"data":data}) : helper)))
    + "</h4></li>\n                      </ul>\n                  </div>\n              </div>\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, buffer = "<div class=\"row\"><h3>Budget</h3></div>\n<div id=\"accordion\" role=\"tablist\" aria-multiselectable=\"true\">\n<div class=\"panel panel-default panel-heading\" role=\"tab\" id=\"headingOne\" data-toggle=\"collapse\" data-parent=\"#accordion\" href=#loadingIcon aria-expanded=\"true\" aria-controls=\"collapseOne\">\n          <div class=\"row count\">\n";
  stack1 = helpers.each.call(depth0, (depth0 != null ? depth0.rows : depth0), {"name":"each","hash":{},"fn":this.program(1, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + "          </div>\n          <div id=\"loadingIcon\" class=\"row count panel-collapse collapse\" role=\"tabpanel\" aria-labelledby=\"headingOne\" style=\"background-color: #D5D0CF\">\n                <div class=\"js-budgetelabarate\">\n                </div>\n          </div>\n</div>\n</div>\n";
},"useData":true});
this["MyApp"]["templates"]["budgetData"] = Handlebars.template({"1":function(depth0,helpers,partials,data) {
  var helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return "                          <tr class=\"card\">\n                              <td style=\"border-left: solid;border-right: solid;border-color: #F5F5F5;\">"
    + escapeExpression(((helper = (helper = helpers.account_head || (depth0 != null ? depth0.account_head : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"account_head","hash":{},"data":data}) : helper)))
    + "</td>\n                              <td style=\"border-right: solid;border-color: #F5F5F5;\">"
    + escapeExpression(((helper = (helper = helpers.total_budget || (depth0 != null ? depth0.total_budget : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"total_budget","hash":{},"data":data}) : helper)))
    + "</td>\n                              <td style=\"border-right: solid;border-color: #F5F5F5;\">"
    + escapeExpression(((helper = (helper = helpers.total_expenditure || (depth0 != null ? depth0.total_expenditure : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"total_expenditure","hash":{},"data":data}) : helper)))
    + "</td>\n                              <td style=\"border-right: solid;border-color: #F5F5F5;\">"
    + escapeExpression(((helper = (helper = helpers.balance || (depth0 != null ? depth0.balance : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"balance","hash":{},"data":data}) : helper)))
    + "</td>\n                          </tr>\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, buffer = "                <div class=\"table-responsive\">\n                  <table class=\"table\" style=\"margin-bottom: 0px;\">\n                    <thead>\n                        <tr class=\"card\">\n                            <th style=\"border-left: solid;border-right: solid;border-color: #F5F5F5;\">Account Head</th>\n                            <th style=\"border-right: solid;border-color: #F5F5F5;\">Total Budget</th>\n                            <th style=\"border-right: solid;border-color: #F5F5F5;\">Total Expenditure</th>\n                            <th style=\"border-right: solid;border-color: #F5F5F5;\">Balance</th>\n                        </tr>\n                    </thead>\n                      <tbody>\n";
  stack1 = helpers.each.call(depth0, (depth0 != null ? depth0.rows : depth0), {"name":"each","hash":{},"fn":this.program(1, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + "                      </tbody>\n                  </table>\n                </div>\n";
},"useData":true});
this["MyApp"]["templates"]["budgetEdit"] = Handlebars.template({"1":function(depth0,helpers,partials,data) {
  var helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return "                          <tr class=\"card\" data-budget-id=\""
    + escapeExpression(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"id","hash":{},"data":data}) : helper)))
    + "\">\n                            <td>\n                              "
    + escapeExpression(((helper = (helper = helpers.type || (depth0 != null ? depth0.type : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"type","hash":{},"data":data}) : helper)))
    + "\n                            </td>\n                              <td>\n                                "
    + escapeExpression(((helper = (helper = helpers.account_head || (depth0 != null ? depth0.account_head : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"account_head","hash":{},"data":data}) : helper)))
    + "\n                              </td>\n                              <td>\n                                <input type=\"text\" class=\"form-control js-budget-input js-budget-qtr1\" data-budget-id=\""
    + escapeExpression(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"id","hash":{},"data":data}) : helper)))
    + "\" value=\""
    + escapeExpression(((helper = (helper = helpers.qtr_1 || (depth0 != null ? depth0.qtr_1 : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"qtr_1","hash":{},"data":data}) : helper)))
    + "\" >\n                              </td>\n                              <td>\n                                <input type=\"text\" class=\"form-control js-budget-input js-budget-qtr2\" data-budget-id=\""
    + escapeExpression(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"id","hash":{},"data":data}) : helper)))
    + "\" value=\""
    + escapeExpression(((helper = (helper = helpers.qtr_2 || (depth0 != null ? depth0.qtr_2 : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"qtr_2","hash":{},"data":data}) : helper)))
    + "\" >\n                              </td>\n                              <td>\n                                <input type=\"text\" class=\"form-control js-budget-input js-budget-qtr3\" data-budget-id=\""
    + escapeExpression(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"id","hash":{},"data":data}) : helper)))
    + "\" value=\""
    + escapeExpression(((helper = (helper = helpers.qtr_3 || (depth0 != null ? depth0.qtr_3 : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"qtr_3","hash":{},"data":data}) : helper)))
    + "\" >\n                              </td>\n                              <td>\n                                <input type=\"text\" class=\"form-control js-budget-input js-budget-qtr4\" data-budget-id=\""
    + escapeExpression(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"id","hash":{},"data":data}) : helper)))
    + "\" value=\""
    + escapeExpression(((helper = (helper = helpers.qtr_4 || (depth0 != null ? depth0.qtr_4 : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"qtr_4","hash":{},"data":data}) : helper)))
    + "\" >\n                              </td>\n                              <td>\n                                <input type=\"text\" class=\"form-control js-budget-input js-budget-totalBudget\" data-budget-id=\""
    + escapeExpression(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"id","hash":{},"data":data}) : helper)))
    + "\" value=\""
    + escapeExpression(((helper = (helper = helpers.total_budget || (depth0 != null ? depth0.total_budget : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"total_budget","hash":{},"data":data}) : helper)))
    + "\" >\n                              </td>\n                              <td>\n                                <input type=\"text\" class=\"form-control js-budget-input js-budget-expenditure\" data-budget-id=\""
    + escapeExpression(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"id","hash":{},"data":data}) : helper)))
    + "\" value=\""
    + escapeExpression(((helper = (helper = helpers.total_expenditure || (depth0 != null ? depth0.total_expenditure : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"total_expenditure","hash":{},"data":data}) : helper)))
    + "\" >\n                              </td>\n                              <td>\n                                <input type=\"text\" class=\"form-control js-budget-input js-budget-balance\" data-budget-id=\""
    + escapeExpression(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"id","hash":{},"data":data}) : helper)))
    + "\" value=\""
    + escapeExpression(((helper = (helper = helpers.balance || (depth0 != null ? depth0.balance : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"balance","hash":{},"data":data}) : helper)))
    + "\" >\n                              </td>\n                              <td>\n                                <input type=\"text\" class=\"form-control js-budget-input js-budget-uptoqtr\" data-budget-id=\""
    + escapeExpression(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"id","hash":{},"data":data}) : helper)))
    + "\" value=\""
    + escapeExpression(((helper = (helper = helpers.budget_req_upto_qtr_2 || (depth0 != null ? depth0.budget_req_upto_qtr_2 : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"budget_req_upto_qtr_2","hash":{},"data":data}) : helper)))
    + "\" >\n                              </td>\n                              <td>\n                                <input type=\"text\" class=\"form-control js-budget-input js-budget-remarks\" data-budget-id=\""
    + escapeExpression(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"id","hash":{},"data":data}) : helper)))
    + "\" value=\""
    + escapeExpression(((helper = (helper = helpers.remarks || (depth0 != null ? depth0.remarks : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"remarks","hash":{},"data":data}) : helper)))
    + "\" >\n                              </td>\n                          </tr>\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, buffer = "\n\n            <div class=\"row\" style=\"padding: 15px 30px;\">\n                <div class=\"table-responsive\">\n                  <table class=\"table\" style=\"margin-bottom: 0px;\">\n                    <thead>\n                        <tr class=\"card\">\n                            <th style=\"border-left: solid;border-right: solid;border-color: #F5F5F5;\">Type</th>\n                            <th style=\"border-left: solid;border-right: solid;border-color: #F5F5F5;\">account_head</th>\n                            <th style=\"border-right: solid;border-color: #F5F5F5;\">qtr_1</th>\n                            <th style=\"border-right: solid;border-color: #F5F5F5;\">qtr_2</th>\n                            <th style=\"border-right: solid;border-color: #F5F5F5;\">qtr_3</th>\n                            <th style=\"border-right: solid;border-color: #F5F5F5;\">qtr_4</th>\n                            <th style=\"border-right: solid;border-color: #F5F5F5;\">total_budget</th>\n                            <th style=\"border-right: solid;border-color: #F5F5F5;\">total_expenditure</th>\n                            <th style=\"border-right: solid;border-color: #F5F5F5;\">balance</th>\n                            <th style=\"border-right: solid;border-color: #F5F5F5;\">Budget upto present Quarter</th>\n                            <th style=\"border-right: solid;border-color: #F5F5F5;\">remarks</th>\n\n                        </tr>\n                    </thead>\n                      <tbody>\n";
  stack1 = helpers.each.call(depth0, (depth0 != null ? depth0.rows : depth0), {"name":"each","hash":{},"fn":this.program(1, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + "                      </tbody>\n                  </table>\n                </div>\n            </div>\n";
},"useData":true});
this["MyApp"]["templates"]["cases"] = Handlebars.template({"1":function(depth0,helpers,partials,data) {
  var helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return "        <div class=\"panel-heading\" role=\"tab\" id=\"headingOne\" data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#collapseOne\" aria-expanded=\"true\" aria-controls=\"collapseOne\" style=\"cursor:pointer\">\n            <div class=\"row count\">\n                <div class=\"col-sm-4\">\n                    <div class=\"count_num\">\n                        <center><h3>No of UI Cases<hr /></h3><h1><span>"
    + escapeExpression(((helper = (helper = helpers.uin || (depth0 != null ? depth0.uin : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"uin","hash":{},"data":data}) : helper)))
    + "</span></h1></center>\n                    </div>\n                </div>\n                <div class=\"col-sm-4\">\n                    <div class=\"count_num\">\n                        <center><h3>No of PT Cases<hr /></h3><h1><span>"
    + escapeExpression(((helper = (helper = helpers.pt || (depth0 != null ? depth0.pt : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"pt","hash":{},"data":data}) : helper)))
    + "</span></h1></center>\n                    </div>\n                </div>\n                <div class=\"col-sm-4\">\n                    <div class=\"count_num\">\n                        <center><h3>No of Petition Inquiries<hr /></h3><h1><span>"
    + escapeExpression(((helper = (helper = helpers.uiq || (depth0 != null ? depth0.uiq : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"uiq","hash":{},"data":data}) : helper)))
    + "</span></h1><center>\n                    </div>\n                </div>\n            </div>\n        </div>\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, buffer = "<div id=\"accordion\" role=\"tablist\" aria-multiselectable=\"true\">\n  <div class=\"row\"><h3>Crime</h3></div>\n    <div class=\"panel panel-default\">\n";
  stack1 = helpers.each.call(depth0, (depth0 != null ? depth0.rows : depth0), {"name":"each","hash":{},"fn":this.program(1, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + "        <div id=\"collapseOne\" class=\"panel-collapse collapse\" role=\"tabpanel\" aria-labelledby=\"headingOne\" style=\"background-color: #D5D0CF\">\n           <div class=\"row\">\n             <div class=\"row\">\n                <div class=\"col-sm-10 col-sm-offset-1\">\n                  <center><h2>Zone wise</h2></center>\n                </div>\n             </div>\n             <div class=\"col-sm-12 js-crimeUnitsTable\" style=\"margin-top: 20px\">\n\n             </div>\n           </div>\n           <div class=\"row\">\n              <div class=\"row\">\n                 <div class=\"col-sm-10 col-sm-offset-1\">\n                    <center><h2>Wing wise</h2></center>\n                 </div>\n              </div>\n              <div class=\"col-sm-12 js-crimeWingsTable\" style=\"margin-top: 20px\">\n\n              </div>\n           </div>\n        </div>\n    </div>\n</div>\n";
},"useData":true});
this["MyApp"]["templates"]["crimeUnits"] = Handlebars.template({"1":function(depth0,helpers,partials,data) {
  var stack1, helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, buffer = "        <div class=\"row\" data-Grade=\""
    + escapeExpression(((helper = (helper = helpers.zone_trim || (depth0 != null ? depth0.zone_trim : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"zone_trim","hash":{},"data":data}) : helper)))
    + "\" style=\"\">\n            <div data-toggle=\"collapse\" data-parent=\"#accordion24\" href=#"
    + escapeExpression(((helper = (helper = helpers.zone_trim || (depth0 != null ? depth0.zone_trim : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"zone_trim","hash":{},"data":data}) : helper)))
    + " style=\"cursor:pointer\">\n               <div class=\"row\" style=\"margin:10px 0; padding: 10px; background-color: white;\">\n                 <div class=\"col-sm-3\"><h2>"
    + escapeExpression(((helper = (helper = helpers.zone_name || (depth0 != null ? depth0.zone_name : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"zone_name","hash":{},"data":data}) : helper)))
    + "</h2></div>\n                 <div class=\"col-sm-3\"><h4> No of UI Cases: </h4><h2>"
    + escapeExpression(((helper = (helper = helpers.uin || (depth0 != null ? depth0.uin : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"uin","hash":{},"data":data}) : helper)))
    + "</h2></div>\n                 <div class=\"col-sm-3\"><h4> No of PT Cases: </h4><h2>"
    + escapeExpression(((helper = (helper = helpers.pt || (depth0 != null ? depth0.pt : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"pt","hash":{},"data":data}) : helper)))
    + "</h2></div>\n                 <div class=\"col-sm-3\"><h4> Petetion Inquiries: </h4><h2>"
    + escapeExpression(((helper = (helper = helpers.uiq || (depth0 != null ? depth0.uiq : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"uiq","hash":{},"data":data}) : helper)))
    + "</h2></div>\n               </div>\n            </div>\n            <div id="
    + escapeExpression(((helper = (helper = helpers.zone_trim || (depth0 != null ? depth0.zone_trim : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"zone_trim","hash":{},"data":data}) : helper)))
    + " class=\"panel-collapse collapse\" role=\"tabpanel\">\n              <table class=\"table table-responsive\" style=\" background-color: white\">\n                  <thead>\n                    <tr>\n                      <th>Unit Name</th>\n                      <th>UIN</th>\n                      <th>PT</th>\n                      <th>Petetion Inquiries</th>\n                    </tr>\n                  </thead>\n                  <tbody>\n";
  stack1 = helpers.each.call(depth0, (depth0 != null ? depth0.units : depth0), {"name":"each","hash":{},"fn":this.program(2, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + "                  </tbody>\n              </table>\n\n            </div>\n        </div>\n";
},"2":function(depth0,helpers,partials,data) {
  var helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return "                    <tr>\n                      <th>"
    + escapeExpression(((helper = (helper = helpers.unit_name || (depth0 != null ? depth0.unit_name : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"unit_name","hash":{},"data":data}) : helper)))
    + "</th>\n                      <th>"
    + escapeExpression(((helper = (helper = helpers.uin || (depth0 != null ? depth0.uin : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"uin","hash":{},"data":data}) : helper)))
    + "</th>\n                      <th>"
    + escapeExpression(((helper = (helper = helpers.pt || (depth0 != null ? depth0.pt : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"pt","hash":{},"data":data}) : helper)))
    + "</th>\n                      <th>"
    + escapeExpression(((helper = (helper = helpers.uiq || (depth0 != null ? depth0.uiq : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"uiq","hash":{},"data":data}) : helper)))
    + "</th>\n                    </tr>\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, buffer = "<div class=\"panel-group\" id=\"accordion24\" style=\"padding: 20px 30px;\">\n";
  stack1 = helpers.each.call(depth0, (depth0 != null ? depth0.rows : depth0), {"name":"each","hash":{},"fn":this.program(1, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + "</div>\n";
},"useData":true});
this["MyApp"]["templates"]["crimeWings"] = Handlebars.template({"1":function(depth0,helpers,partials,data) {
  var stack1, helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, buffer = "        <div class=\"row\">\n            <div data-toggle=\"collapse\" id=\"js-"
    + escapeExpression(((helper = (helper = helpers.wing_trim || (depth0 != null ? depth0.wing_trim : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"wing_trim","hash":{},"data":data}) : helper)))
    + "\" data-parent=\"#accordion25\" href=#"
    + escapeExpression(((helper = (helper = helpers.wing_trim || (depth0 != null ? depth0.wing_trim : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"wing_trim","hash":{},"data":data}) : helper)))
    + " style=\"cursor:pointer\">\n               <div class=\"row\" style=\"margin:10px 0; padding: 10px; background-color: white;\">\n                 <div class=\"col-sm-3\"><h2>"
    + escapeExpression(((helper = (helper = helpers.wing_name || (depth0 != null ? depth0.wing_name : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"wing_name","hash":{},"data":data}) : helper)))
    + "</h2></div>\n                 <div class=\"col-sm-3\"><h4> No of UI Cases: </h4><h2>"
    + escapeExpression(((helper = (helper = helpers.uin || (depth0 != null ? depth0.uin : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"uin","hash":{},"data":data}) : helper)))
    + "</h2></div>\n                 <div class=\"col-sm-3\"><h4> No of PT Cases: </h4><h2>"
    + escapeExpression(((helper = (helper = helpers.pt || (depth0 != null ? depth0.pt : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"pt","hash":{},"data":data}) : helper)))
    + "</h2></div>\n                 <div class=\"col-sm-3\"><h4> Petetion Inquiries: </h4><h2>"
    + escapeExpression(((helper = (helper = helpers.uiq || (depth0 != null ? depth0.uiq : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"uiq","hash":{},"data":data}) : helper)))
    + "</h2></div>\n               </div>\n            </div>\n            <div id="
    + escapeExpression(((helper = (helper = helpers.wing_trim || (depth0 != null ? depth0.wing_trim : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"wing_trim","hash":{},"data":data}) : helper)))
    + " class=\"panel-collapse panel-group collapse\" role=\"tabpanel\">\n";
  stack1 = helpers.each.call(depth0, (depth0 != null ? depth0.zones : depth0), {"name":"each","hash":{},"fn":this.program(2, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + "            </div>\n        </div>\n";
},"2":function(depth0,helpers,partials,data) {
  var helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return "\n                <div class=\"row\">\n                <div data-toggle=\"collapse\" data-parent=\"#js-"
    + escapeExpression(((helper = (helper = helpers.wing_trim || (depth0 != null ? depth0.wing_trim : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"wing_trim","hash":{},"data":data}) : helper)))
    + "\" href=#js-"
    + escapeExpression(((helper = (helper = helpers.zone_trim || (depth0 != null ? depth0.zone_trim : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"zone_trim","hash":{},"data":data}) : helper)))
    + " style=\"cursor:pointer; margin:10px 0; padding: 10px; background-color: white;\">\n                  <div class=\"col-sm-2\"></div>\n                  <div class=\"col-sm-2\"><h2>"
    + escapeExpression(((helper = (helper = helpers.zone_name || (depth0 != null ? depth0.zone_name : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"zone_name","hash":{},"data":data}) : helper)))
    + "</h2></div>\n                  <div class=\"col-sm-2\"><h4> No of UI Cases: </h4><h2>"
    + escapeExpression(((helper = (helper = helpers.uin || (depth0 != null ? depth0.uin : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"uin","hash":{},"data":data}) : helper)))
    + "</h2></div>\n                  <div class=\"col-sm-2\"><h4> No of PT Cases: </h4><h2>"
    + escapeExpression(((helper = (helper = helpers.pt || (depth0 != null ? depth0.pt : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"pt","hash":{},"data":data}) : helper)))
    + "</h2></div>\n                  <div class=\"col-sm-2\"><h4> Petetion Inquiries: </h4><h2>"
    + escapeExpression(((helper = (helper = helpers.uiq || (depth0 != null ? depth0.uiq : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"uiq","hash":{},"data":data}) : helper)))
    + "</h2></div>\n                  <div class=\"col-sm-2\"></div>\n                </div>\n                </div>\n\n\n              <div id=\"js-"
    + escapeExpression(((helper = (helper = helpers.zone_trim || (depth0 != null ? depth0.zone_trim : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"zone_trim","hash":{},"data":data}) : helper)))
    + "\" class=\"panel-collapse collapse\" role=\"tabpanel\">\n                  Hello\n              </div>\n\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, buffer = "<div class=\"panel-group\" id=\"accordion25\" style=\"padding: 20px 30px;\">\n";
  stack1 = helpers.each.call(depth0, (depth0 != null ? depth0.rows : depth0), {"name":"each","hash":{},"fn":this.program(1, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + "</div>\n";
},"useData":true});
this["MyApp"]["templates"]["dataEntryform"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  return "<div class=\"row\" style=\"margin-top: 40px;margin-left: 37px\">\n    <div class=\"col-sm-11\">\n        <table class=\"table\">\n            <thead>\n                <tr class=\"card\">\n                    <th>\n                        <center>Wing</center>\n                    </th>\n            <th><span style=\"width: 20px\">Under Investigation<span></th>\n            <th>Pending Trails</th>\n            <th><span style=\"width: 20px\">Under Inquiry<span></th>\n\n        </tr>\n    </thead>\n    <tbody class=\"js-tableBody\">\n        <tr class=\"card\">\n            <td style=\"width: 360px\">\n                <center><select class=\"form-control js-select-wing\"></select></center>\n            </td>\n            <td class=\"form-group mytable\">\n                <input type=\"number\" min=0 onkeypress='return event.charCode >= 48 && event.charCode <= 57' class=\"form-control js-order-investigation js-entryForm\">\n            </td>\n            <td class=\"form-group mytable\">\n                <input type=\"number\" min=0 onkeypress='return event.charCode >= 48 && event.charCode <= 57' class=\"form-control js-order-pending js-entryForm\">\n            </td>\n            <td class=\"form-group mytable\">\n                <input type=\"number\" min=0 onkeypress='return event.charCode >= 48 && event.charCode <= 57' class=\"form-control js-order-inquery js-entryForm\">\n            </td>\n        </tr>\n    </tbody>\n</table>\n</div>\n</div>\n<div class=\"row\">\n    <div class=\"col-sm-2 col-sm-offset-7\">\n        <button class=\"btn btn--action btn-block js-unitData-save\" data-loading-text=\"Loading...\">Submit</button>\n    </div>\n    <div class=\"col-sm-2\">\n       <button class=\"btn btn--dark btn-block js-unitData-reset\" >Cancel</button>\n    </div>\n</div>\n<hr />\n\n<div class=\"row\" style=\"margin-top: 40px;margin-left: 37px\">\n<div class=\"col-sm-11 js-updatedUnitDataDiv\">\n\n</div>\n</div>\n";
  },"useData":true});
this["MyApp"]["templates"]["staff"] = Handlebars.template({"1":function(depth0,helpers,partials,data) {
  var helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return "        <div class=\"panel-heading\" role=\"tab\" data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#collapseTwo\" aria-expanded=\"true\" aria-controls=\"collapseOne\" style=\"cursor:pointer\">\n            <div class=\"row count\">\n                <div class=\"col-sm-4\">\n                    <div class=\"count_num\">\n                        <center><h3>Sanctioned Strength<hr /></h3><h1><span>"
    + escapeExpression(((helper = (helper = helpers.Sanctioned || (depth0 != null ? depth0.Sanctioned : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"Sanctioned","hash":{},"data":data}) : helper)))
    + "</span></h1></center>\n                    </div>\n                </div>\n                <div class=\"col-sm-4\">\n                    <div class=\"count_num\">\n                        <center><h3>Available Strength<hr /></h3><h1><span>"
    + escapeExpression(((helper = (helper = helpers.Actual || (depth0 != null ? depth0.Actual : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"Actual","hash":{},"data":data}) : helper)))
    + "</span></h1><center>\n                    </div>\n                </div>\n                <div class=\"col-sm-4\">\n                    <div class=\"count_num\">\n                        <center><h3>Vacencies<hr /></h3><h1><span>"
    + escapeExpression(((helper = (helper = helpers.Vacancy || (depth0 != null ? depth0.Vacancy : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"Vacancy","hash":{},"data":data}) : helper)))
    + "</span></h1></center>\n                    </div>\n                </div>\n            </div>\n        </div>\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, buffer = "<div class=\"panel-group\" id=\"accordion\" role=\"tablist\" aria-multiselectable=\"true\">\n  <div class=\"row\"><h3>Strength</h3></div>\n    <div class=\"panel panel-default\">\n";
  stack1 = helpers.each.call(depth0, (depth0 != null ? depth0.rows : depth0), {"name":"each","hash":{},"fn":this.program(1, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + "        <div id=\"collapseTwo\" class=\"panel-collapse collapse\" role=\"tabpanel\" style=\"background-color: #D5D0CF\">\n           <div class=\"js-staffGradeTable\">\n\n           </div>\n        </div>\n    </div>\n</div>\n";
},"useData":true});
this["MyApp"]["templates"]["staffEdit"] = Handlebars.template({"1":function(depth0,helpers,partials,data) {
  var helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return "                          <tr class=\"card\" data-staff-id=\""
    + escapeExpression(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"id","hash":{},"data":data}) : helper)))
    + "\">\n                            <td>\n                              "
    + escapeExpression(((helper = (helper = helpers.grade || (depth0 != null ? depth0.grade : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"grade","hash":{},"data":data}) : helper)))
    + "\n                            </td>\n                            <td>\n                              "
    + escapeExpression(((helper = (helper = helpers.rank || (depth0 != null ? depth0.rank : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"rank","hash":{},"data":data}) : helper)))
    + "\n                            </td>\n                              <td>\n                                <input type=\"text\" class=\"form-control js-staff-input js-staff-sanctioned\" data-staff-id=\""
    + escapeExpression(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"id","hash":{},"data":data}) : helper)))
    + "\" value=\""
    + escapeExpression(((helper = (helper = helpers.sanctioned || (depth0 != null ? depth0.sanctioned : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"sanctioned","hash":{},"data":data}) : helper)))
    + "\" >\n                              </td>\n                              <td>\n                                <input type=\"text\" class=\"form-control js-staff-input js-staff-actual\" data-staff-id=\""
    + escapeExpression(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"id","hash":{},"data":data}) : helper)))
    + "\" value=\""
    + escapeExpression(((helper = (helper = helpers.actual || (depth0 != null ? depth0.actual : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"actual","hash":{},"data":data}) : helper)))
    + "\" >\n                              </td>\n                              <td>\n                                <input type=\"text\" class=\"form-control js-staff-input js-staff-vacancy\" data-staff-id=\""
    + escapeExpression(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"id","hash":{},"data":data}) : helper)))
    + "\" value=\""
    + escapeExpression(((helper = (helper = helpers.vacancy || (depth0 != null ? depth0.vacancy : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"vacancy","hash":{},"data":data}) : helper)))
    + "\" >\n                              </td>\n                              <td>\n                                <input type=\"text\" class=\"form-control js-staff-input js-staff-order\" data-staff-id=\""
    + escapeExpression(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"id","hash":{},"data":data}) : helper)))
    + "\" value=\""
    + escapeExpression(((helper = (helper = helpers.order_id || (depth0 != null ? depth0.order_id : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"order_id","hash":{},"data":data}) : helper)))
    + "\" >\n                              </td>\n\n                          </tr>\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, buffer = "\n\n            <div class=\"row\" style=\"padding: 15px 30px;\">\n                <div class=\"table-responsive\">\n                  <table class=\"table\" style=\"margin-bottom: 0px;\">\n                    <thead>\n                        <tr class=\"card\">\n                            <th>Grade</th>\n                            <th>Rank</th>\n                            <th>Sanctioned</th>\n                            <th>Actual</th>\n                            <th>Vacancy</th>\n                            <th>Order</th>\n                        </tr>\n                    </thead>\n                      <tbody>\n";
  stack1 = helpers.each.call(depth0, (depth0 != null ? depth0.rows : depth0), {"name":"each","hash":{},"fn":this.program(1, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + "                      </tbody>\n                  </table>\n                </div>\n            </div>\n";
},"useData":true});
this["MyApp"]["templates"]["staffGrade"] = Handlebars.template({"1":function(depth0,helpers,partials,data) {
  var helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return "        <div class=\"row js-graderRows\" data-Grade=\""
    + escapeExpression(((helper = (helper = helpers.Grade || (depth0 != null ? depth0.Grade : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"Grade","hash":{},"data":data}) : helper)))
    + "\" style=\"\">\n            <div data-toggle=\"collapse\" data-parent=\"#accordion21\" href=#"
    + escapeExpression(((helper = (helper = helpers.Grade || (depth0 != null ? depth0.Grade : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"Grade","hash":{},"data":data}) : helper)))
    + " style=\"cursor:pointer\">\n               <div class=\"row\" style=\"margin:10px 0; padding: 10px; background-color: white;\">\n                  <div class=\"col-sm-3\"><h2>"
    + escapeExpression(((helper = (helper = helpers.Grade || (depth0 != null ? depth0.Grade : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"Grade","hash":{},"data":data}) : helper)))
    + "</h2></div>\n                  <div class=\"col-sm-3\"><h4>Total Sanctioned:</h4><h2>"
    + escapeExpression(((helper = (helper = helpers.Sanctioned || (depth0 != null ? depth0.Sanctioned : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"Sanctioned","hash":{},"data":data}) : helper)))
    + "<h2></div>\n                  <div class=\"col-sm-3\"><h4>Total Actual:</h4><h2>"
    + escapeExpression(((helper = (helper = helpers.Actual || (depth0 != null ? depth0.Actual : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"Actual","hash":{},"data":data}) : helper)))
    + "<h2></div>\n                  <div class=\"col-sm-3\"><h4>Total Vacancy:</h4><h2>"
    + escapeExpression(((helper = (helper = helpers.Vacancy || (depth0 != null ? depth0.Vacancy : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"Vacancy","hash":{},"data":data}) : helper)))
    + "</h2></div>\n               </div>\n            </div>\n            <div id="
    + escapeExpression(((helper = (helper = helpers.Grade || (depth0 != null ? depth0.Grade : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"Grade","hash":{},"data":data}) : helper)))
    + " class=\"panel-collapse collapse js-gradeTabBody\" role=\"tabpanel\" style=\"background-color: #D5D0CF\">\n\n            </div>\n        </div>\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, buffer = "<div class=\"panel-group\" id=\"accordion21\" style=\"padding: 20px 30px;\">\n";
  stack1 = helpers.each.call(depth0, (depth0 != null ? depth0.rows : depth0), {"name":"each","hash":{},"fn":this.program(1, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + "</div>\n";
},"useData":true});
this["MyApp"]["templates"]["staffTable"] = Handlebars.template({"1":function(depth0,helpers,partials,data) {
  var helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return "            <tr class=\"card\">\n                <td>"
    + escapeExpression(((helper = (helper = helpers.Rank || (depth0 != null ? depth0.Rank : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"Rank","hash":{},"data":data}) : helper)))
    + "</td>\n                <td>"
    + escapeExpression(((helper = (helper = helpers.Sanctioned || (depth0 != null ? depth0.Sanctioned : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"Sanctioned","hash":{},"data":data}) : helper)))
    + "</td>\n                <td>"
    + escapeExpression(((helper = (helper = helpers.Actual || (depth0 != null ? depth0.Actual : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"Actual","hash":{},"data":data}) : helper)))
    + "</td>\n                <td>"
    + escapeExpression(((helper = (helper = helpers.Vacancy || (depth0 != null ? depth0.Vacancy : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"Vacancy","hash":{},"data":data}) : helper)))
    + "</td>\n            </tr>\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, buffer = "<div class=\"table-responsive\">\n<table class=\"table\">\n    <thead>\n        <tr class=\"card\">\n            <th>Rank</th>\n            <th>Sanctioned</th>\n            <th>Actual</th>\n            <th>Vacancy</th>\n        </tr>\n    </thead>\n    <tbody>\n";
  stack1 = helpers.each.call(depth0, (depth0 != null ? depth0.rows : depth0), {"name":"each","hash":{},"fn":this.program(1, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + "    </tbody>\n</table>\n</div>";
},"useData":true});
this["MyApp"]["templates"]["updatedForm"] = Handlebars.template({"1":function(depth0,helpers,partials,data) {
  var stack1, helper, helperMissing=helpers.helperMissing, functionType="function", escapeExpression=this.escapeExpression, buffer = "                <tr class=\"card\">\n                    <td class=\"form-group mytable\">\n";
  stack1 = ((helpers.eachIndex || (depth0 && depth0.eachIndex) || helperMissing).call(depth0, (data && data.index), {"name":"eachIndex","hash":{},"fn":this.program(2, data),"inverse":this.noop,"data":data}));
  if (stack1 != null) { buffer += stack1; }
  buffer += "                    </td>\n                    <td class=\"form-group mytable\">\n                        "
    + escapeExpression(((helper = (helper = helpers.wing_name || (depth0 != null ? depth0.wing_name : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"wing_name","hash":{},"data":data}) : helper)))
    + "\n                    </td>\n                    <td class=\"form-group mytable\">\n";
  stack1 = ((helpers.convertDate || (depth0 && depth0.convertDate) || helperMissing).call(depth0, (depth0 != null ? depth0.created_date : depth0), {"name":"convertDate","hash":{},"fn":this.program(2, data),"inverse":this.noop,"data":data}));
  if (stack1 != null) { buffer += stack1; }
  return buffer + "                    </td>\n                    <td class=\"form-group mytable\">\n                        "
    + escapeExpression(((helper = (helper = helpers.uin || (depth0 != null ? depth0.uin : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"uin","hash":{},"data":data}) : helper)))
    + "\n                    </td>\n                    <td class=\"form-group mytable\">\n                        "
    + escapeExpression(((helper = (helper = helpers.pt || (depth0 != null ? depth0.pt : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"pt","hash":{},"data":data}) : helper)))
    + "\n                    </td>\n                    <td class=\"form-group mytable\">\n                        "
    + escapeExpression(((helper = (helper = helpers.uiq || (depth0 != null ? depth0.uiq : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"uiq","hash":{},"data":data}) : helper)))
    + "\n                    </td>\n                </tr>\n";
},"2":function(depth0,helpers,partials,data) {
  var helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return "                            "
    + escapeExpression(((helper = (helper = helpers.value || (depth0 != null ? depth0.value : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"value","hash":{},"data":data}) : helper)))
    + "\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, buffer = "<div class=\"row\" style=\"background-color: #45B0DB\">\n    <center><h3>Recently Updated Data</h3></center>\n</div>\n<div class=\"row\">\n    <table class=\"table\">\n        <thead>\n            <tr class=\"card\">\n                <th>S.No</th>\n                <th>\n                    <center>Wing</center>\n                </th>\n                <th>Created Date</th>\n                <th>No of UI Cases</th>\n                <th>No of PT Cases</th>\n                <th>No of Petetion Inquiry</th>\n            </tr>\n        </thead>\n        <tbody>\n";
  stack1 = helpers.each.call(depth0, (depth0 != null ? depth0.rows : depth0), {"name":"each","hash":{},"fn":this.program(1, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + "        </tbody>\n    </table>\n</div>\n";
},"useData":true});
this["MyApp"]["templates"]["vehicleDashboard"] = Handlebars.template({"1":function(depth0,helpers,partials,data) {
  var stack1, helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, buffer = "      <div class=\"col-sm-4\" style=\"margin-bottom: 10px\">\n          <div class=\"count_num\">\n            <ul>\n              <li><h4>RO Name : "
    + escapeExpression(((helper = (helper = helpers.ro || (depth0 != null ? depth0.ro : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"ro","hash":{},"data":data}) : helper)))
    + "</h3></li>\n                <li>Vehicle count : "
    + escapeExpression(((helper = (helper = helpers.count || (depth0 != null ? depth0.count : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"count","hash":{},"data":data}) : helper)))
    + "</li>\n                <li><hr /></li>\n";
  stack1 = helpers['if'].call(depth0, (depth0 != null ? depth0.GOOD : depth0), {"name":"if","hash":{},"fn":this.program(2, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  stack1 = helpers['if'].call(depth0, (depth0 != null ? depth0.NEW : depth0), {"name":"if","hash":{},"fn":this.program(4, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  stack1 = helpers['if'].call(depth0, (depth0 != null ? depth0.FORCONDEMNATION : depth0), {"name":"if","hash":{},"fn":this.program(6, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  stack1 = helpers['if'].call(depth0, (depth0 != null ? depth0.REPAIR : depth0), {"name":"if","hash":{},"fn":this.program(8, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  stack1 = helpers['if'].call(depth0, (depth0 != null ? depth0.OLD : depth0), {"name":"if","hash":{},"fn":this.program(10, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + "              </ul>\n          </div>\n      </div>\n";
},"2":function(depth0,helpers,partials,data) {
  var helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return "                <li>GOOD : "
    + escapeExpression(((helper = (helper = helpers.GOOD || (depth0 != null ? depth0.GOOD : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"GOOD","hash":{},"data":data}) : helper)))
    + "</li>\n";
},"4":function(depth0,helpers,partials,data) {
  var helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return "                <li>NEW : "
    + escapeExpression(((helper = (helper = helpers.NEW || (depth0 != null ? depth0.NEW : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"NEW","hash":{},"data":data}) : helper)))
    + "</li>\n";
},"6":function(depth0,helpers,partials,data) {
  var helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return "                <li>FOR CONDEMNATION : "
    + escapeExpression(((helper = (helper = helpers.FORCONDEMNATION || (depth0 != null ? depth0.FORCONDEMNATION : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"FORCONDEMNATION","hash":{},"data":data}) : helper)))
    + "</li>\n";
},"8":function(depth0,helpers,partials,data) {
  var helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return "                <li>REPAIR : "
    + escapeExpression(((helper = (helper = helpers.REPAIR || (depth0 != null ? depth0.REPAIR : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"REPAIR","hash":{},"data":data}) : helper)))
    + "</li>\n";
},"10":function(depth0,helpers,partials,data) {
  var helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return "                <li>OLD : "
    + escapeExpression(((helper = (helper = helpers.OLD || (depth0 != null ? depth0.OLD : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"OLD","hash":{},"data":data}) : helper)))
    + "</li>\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, buffer = "<div class=\"row\"><h3>Vehicles</h3></div>\n<div class=\"row count\" style=\"overflow: hidden\">\n";
  stack1 = helpers.each.call(depth0, (depth0 != null ? depth0.rows : depth0), {"name":"each","hash":{},"fn":this.program(1, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + "</div>\n";
},"useData":true});
this["MyApp"]["templates"]["vehicleEdit"] = Handlebars.template({"1":function(depth0,helpers,partials,data) {
  var helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return "                          <tr class=\"card\" data-vehicle-id=\""
    + escapeExpression(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"id","hash":{},"data":data}) : helper)))
    + "\">\n                            <td>\n                              "
    + escapeExpression(((helper = (helper = helpers.name_of_officer || (depth0 != null ? depth0.name_of_officer : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"name_of_officer","hash":{},"data":data}) : helper)))
    + "\n                            </td>\n                              <td>\n                                "
    + escapeExpression(((helper = (helper = helpers.rank || (depth0 != null ? depth0.rank : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"rank","hash":{},"data":data}) : helper)))
    + "\n                              </td>\n                              <td>\n                                <input type=\"text\" class=\"form-control js-vehicle-input js-vehicle-general\" data-vehicle-id=\""
    + escapeExpression(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"id","hash":{},"data":data}) : helper)))
    + "\" value=\""
    + escapeExpression(((helper = (helper = helpers.general_no || (depth0 != null ? depth0.general_no : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"general_no","hash":{},"data":data}) : helper)))
    + "\" >\n                              </td>\n                              <td>\n                                <input type=\"text\" class=\"form-control js-vehicle-input js-vehicle-model\" data-vehicle-id=\""
    + escapeExpression(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"id","hash":{},"data":data}) : helper)))
    + "\" value=\""
    + escapeExpression(((helper = (helper = helpers.model_of_vehicle || (depth0 != null ? depth0.model_of_vehicle : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"model_of_vehicle","hash":{},"data":data}) : helper)))
    + "\" >\n                              </td>\n                              <td>\n                                <input type=\"text\" class=\"form-control js-vehicle-input js-vehicle-bearing\" data-vehicle-id=\""
    + escapeExpression(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"id","hash":{},"data":data}) : helper)))
    + "\" value=\""
    + escapeExpression(((helper = (helper = helpers.bearing_no || (depth0 != null ? depth0.bearing_no : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"bearing_no","hash":{},"data":data}) : helper)))
    + "\" >\n                              </td>\n                              <td>\n                                <input type=\"text\" class=\"form-control js-vehicle-input js-vehicle-condition\" data-vehicle-id=\""
    + escapeExpression(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"id","hash":{},"data":data}) : helper)))
    + "\" value=\""
    + escapeExpression(((helper = (helper = helpers.condition_of_vehicle || (depth0 != null ? depth0.condition_of_vehicle : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"condition_of_vehicle","hash":{},"data":data}) : helper)))
    + "\" >\n                              </td>\n                          </tr>\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, buffer = "\n\n            <div class=\"row\" style=\"padding: 15px 30px;\">\n                <div class=\"table-responsive\">\n                  <table class=\"table\" style=\"margin-bottom: 0px;\">\n                    <thead>\n                        <tr class=\"card\">\n                            <th>Name of Officer</th>\n                            <th>Rank</th>\n                            <th>General No.</th>\n                            <th>Model</th>\n                            <th>Bearing No.</th>\n                            <th>Vehicle Condition</th>\n                        </tr>\n                    </thead>\n                      <tbody>\n";
  stack1 = helpers.each.call(depth0, (depth0 != null ? depth0.rows : depth0), {"name":"each","hash":{},"fn":this.program(1, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + "                      </tbody>\n                  </table>\n                </div>\n            </div>\n";
},"useData":true});