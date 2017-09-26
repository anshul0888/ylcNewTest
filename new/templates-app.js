angular.module('templates-app', ['experiences/experiences.detail.tpl.html', 'experiences/experiences.tpl.html', 'home/home.tpl.html']);

angular.module("experiences/experiences.detail.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("experiences/experiences.detail.tpl.html",
    "<div class=\"container\" style=\"font-size: 16px;\">\n" +
    "    <div class=\"row\">\n" +
    "        <div id=\"carousel-example-generic\" style=\"width: 1170px; height: 500px;\" class=\"carousel slide\" data-ride=\"carousel\">\n" +
    "            <!-- Indicators -->\n" +
    "            <ol class=\"carousel-indicators\">\n" +
    "                <li data-target=\"#carousel-example-generic\" data-slide-to=\"0\" class=\"active\"></li>\n" +
    "                <li data-target=\"#carousel-example-generic\" ng-repeat=\"eachPhoto in photos track by $index\" data-slide-to=\"{{$index + 1}}\"></li>\n" +
    "            </ol>\n" +
    "            <!-- Wrapper for slides -->\n" +
    "            <div class=\"carousel-inner\" role=\"listbox\">\n" +
    "                <div class=\"item active\" style=\"background-image: url({{firstPhoto[0]}});\">\n" +
    "                    <img src=\"{{firstPhoto[0]}}\" style=\"width: 1170px;height: 500px;\" alt=\"...\">\n" +
    "                </div>\n" +
    "                <div class=\"item\" ng-repeat=\"eachPhoto in photos track by $index\" style=\"background-image: url({{eachPhoto}});\">\n" +
    "                    <img src=\"{{eachPhoto}}\" class=\"img-responsive\" style=\"width: 1170px;height: 500px;\" alt=\"...\">\n" +
    "                </div>\n" +
    "            </div>\n" +
    "            <!-- Controls -->\n" +
    "            <a class=\"left carousel-control\" data-target=\"#carousel-example-generic\" role=\"button\" ng-non-bindable data-slide=\"prev\">\n" +
    "                <i class=\"fa fa-chevron-left\" aria-hidden=\"true\" style=\"left: 5%;margin-top:250px;\"></i>\n" +
    "                <span class=\"sr-only\">Previous</span>\n" +
    "            </a>\n" +
    "            <a class=\"right carousel-control\" data-target=\"#carousel-example-generic\" role=\"button\" ng-non-bindable data-slide=\"next\">\n" +
    "                <i class=\"fa fa-chevron-right\" aria-hidden=\"true\" style=\"right: 5%;margin-top:250px;\"></i>\n" +
    "                <span class=\"sr-only\">Next</span>\n" +
    "            </a>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "\n" +
    "    <div class=\"row container-fluid\" style=\"padding-left: 15px; max-width: 1185px; background-color: rgba(73,68,64,1);\">\n" +
    "        <h4 style=\"color: rgba(255,255,255,1);font-weight: 100;\">{{expData.experience_title}}</h4>\n" +
    "    </div>\n" +
    "    <div class=\"row\" style=\"padding-left: 15px; max-width: 1185px;\">\n" +
    "        <!--Left Form-->\n" +
    "        <div class=\"col-sm-8\">\n" +
    "            <div class=\"container-fluid\">\n" +
    "                <!--City Name-->\n" +
    "                <div class=\"row container-fluid\">\n" +
    "                    <h2><span style=\"font-weight: 100;\">{{expData.experience_location}}</span></h2>\n" +
    "                    <!--City Description-->\n" +
    "                    <p>{{expData.experience_short_description}}</p>\n" +
    "                </div>\n" +
    "                <!--City tour details-->\n" +
    "                <div class=\"row\">\n" +
    "                    <div class=\"col-sm-3\"><i class=\"fa fa-hourglass\" style=\"color: teal; font-size: 20px;\" aria-hidden=\"true\"></i>&nbsp; <span class=\"tourDetails\">{{expData.experience_length.length_value}} {{expData.experience_length.length_type}}</span></div>\n" +
    "                    <div class=\"col-sm-4\"><i class=\"fa fa-weixin\" style=\"color: teal; font-size: 20px;\" aria-hidden=\"true\"></i>&nbsp; <span class=\"tourDetails\" ng-repeat=\"lang in expData.experience_languages\">{{lang}}</span></div>\n" +
    "                    <div class=\"col-sm-5\"><i class=\"fa fa-clock-o\" style=\"color: teal; font-size: 20px;\" aria-hidden=\"true\"></i>&nbsp; <span class=\"tourDetails\">{{expData.experience_start_time}}</span></div>\n" +
    "                </div>\n" +
    "                <div class=\"row container-fluid\">\n" +
    "                    <hr>\n" +
    "                </div>\n" +
    "\n" +
    "                <!--About Experience-->\n" +
    "                <div class=\"row\">\n" +
    "                    <div class=\"col-sm-3\">\n" +
    "                        <h5>About your experience</h5>\n" +
    "                    </div>\n" +
    "                    <div class=\"col-sm-9\">\n" +
    "                        <show-more text=\"expData.experience_long_description.description_by_hour\" limit=\"170\"> </show-more>\n" +
    "                        <p class=\"text-justify\">\n" +
    "                            <!--{{expData.experience_long_description.description_by_hour}}-->\n" +
    "                        </p>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "                <div class=\"row container-fluid\">\n" +
    "                    <hr>\n" +
    "                </div>\n" +
    "                <!--What's included-->\n" +
    "                <div class=\"row\">\n" +
    "                    <div class=\"col-sm-3\">\n" +
    "                        <h5>What's included</h5>\n" +
    "                    </div>\n" +
    "                    <div class=\"col-sm-9\">\n" +
    "                        <ul style=\"padding: 15px\">\n" +
    "                            <li ng-repeat=\"includedItems in expData.experience_included\">{{includedItems}}</li>\n" +
    "                        </ul>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "                <div class=\"row container-fluid\">\n" +
    "                    <hr>\n" +
    "                </div>\n" +
    "\n" +
    "                <!--What's excluded-->\n" +
    "                <div class=\"row\">\n" +
    "                    <div class=\"col-sm-3\">\n" +
    "                        <h5>What's excluded</h5>\n" +
    "                    </div>\n" +
    "                    <div class=\"col-sm-9\">\n" +
    "                        <ul style=\"padding: 15px\">\n" +
    "                            <li ng-repeat=\"excludedItems in expData.experience_excluded\">{{excludedItems}}</li>\n" +
    "                        </ul>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "                <div class=\"row container-fluid\">\n" +
    "                    <hr>\n" +
    "                </div>\n" +
    "\n" +
    "                <!--Transportation-->\n" +
    "                <div class=\"row\">\n" +
    "                    <div class=\"col-sm-3\">\n" +
    "                        <h5>Transportation</h5>\n" +
    "                    </div>\n" +
    "                    <div class=\"col-sm-9\">\n" +
    "                        <p>{{expData.experience_transportation}}</p>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "                <div class=\"row container-fluid\">\n" +
    "                    <hr>\n" +
    "                </div>\n" +
    "\n" +
    "                <!--Group Size-->\n" +
    "                <div class=\"row\">\n" +
    "                    <div class=\"col-sm-3\">\n" +
    "                        <h5>Group Size</h5>\n" +
    "                    </div>\n" +
    "                    <div class=\"col-sm-9\">\n" +
    "                        <p>{{expData.experience_group_size}}</p>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "                <div class=\"row container-fluid\">\n" +
    "                    <hr>\n" +
    "                </div>\n" +
    "\n" +
    "                <!--Cancellation Policy-->\n" +
    "                <div class=\"row\">\n" +
    "                    <div class=\"col-sm-3\">\n" +
    "                        <h5>Cancellation Policy</h5>\n" +
    "                    </div>\n" +
    "                    <div class=\"col-sm-9\">\n" +
    "                        <p>{{expData.experience_cancelation_policy}}</p>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "                <div class=\"row container-fluid\">\n" +
    "                    <hr>\n" +
    "                </div>\n" +
    "\n" +
    "                <!--Category-->\n" +
    "                <div class=\"row\">\n" +
    "                    <div class=\"col-sm-3\">\n" +
    "                        <h5>Category</h5>\n" +
    "                    </div>\n" +
    "                    <div class=\"col-sm-9\">\n" +
    "                        <div class=\"backTileDiv\" ng-repeat=\"categoryItems in expData.experience_categories\">{{categoryItems}}</div>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "                <div class=\"row container-fluid\">\n" +
    "                    <hr>\n" +
    "                </div>\n" +
    "\n" +
    "                <!--Good for-->\n" +
    "                <div class=\"row\">\n" +
    "                    <div class=\"col-sm-3\">\n" +
    "                        <h5>Good for</h5>\n" +
    "                    </div>\n" +
    "                    <div class=\"col-sm-9\">\n" +
    "                        <div class=\"backTileDiv\" ng-repeat=\"goodItems in expData.experience_for\">{{goodItems}}</div>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "                <div class=\"row container-fluid\">\n" +
    "                    <hr>\n" +
    "                </div>\n" +
    "\n" +
    "            </div>\n" +
    "\n" +
    "\n" +
    "        </div>\n" +
    "\n" +
    "        <!--Right Form-->\n" +
    "        <div class=\"col-sm-4\" style=\"background-color: rgba(255,255,255,1);\">\n" +
    "            <div class=\"container-fluid\">\n" +
    "                <br>\n" +
    "                <!--Cost-->\n" +
    "                <div class=\"row\">\n" +
    "                    <div class=\"col-sm-5\">\n" +
    "                        <span style=\"border-bottom: 1px solid rgba(0,0,0,1);font-size: 14px;\">Starts At</span><br>\n" +
    "                        <strong style=\"font-size: 18px;\">US ${{expData.experience_pricing.price_1_person}}</strong><br>\n" +
    "                        <span style=\"font-size: 14px;\">per person</span>\n" +
    "                    </div>\n" +
    "                    <div class=\"col-sm-7\">\n" +
    "                        <script type=\"text/javascript\" class=\"oncethere-widget\" data-referrer=\"651\" data-location=\"newyork_ny\" data-id=\"299kyzbibk\" data-button-text=\"Book Now\" data-offering-id=\"7787\" data-content=\"true-slim\" data-button-text-bottom-remove=\"undefined\" data-title=\"The Bernic Hotel\" data-calendar-glyph=\"false\" src=\"https://book.oncethere.com/javascripts/distributor.js\" data-button-text-bottom=\"See available dates and times\"></script><style>.oncethere.btn-open-modal { background-color: #d54727; border-color: #d54727; color: #ffffff; border-radius: 5px; width: 230px;} .oncethere-button-text-top {padding-top:5px;} .oncethere-glyph { padding-bottom:6px; }</style>\n" +
    "                        <!--<button class=\"btn btn-success btn-sm\" type=\"button\" data-toggle=\"modal\" data-target=\"#checkAvailabilityModal\">Check Availability</button>-->\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "                <div class=\"row container-fluid\">\n" +
    "                    <hr>\n" +
    "                </div>\n" +
    "\n" +
    "                <!--About our host-->\n" +
    "                <div class=\"row container-fluid\">\n" +
    "                    <div class=\"row\">\n" +
    "                        <div class=\"col-sm-8\">\n" +
    "                            <h4>About our host</h4>\n" +
    "                            <br>\n" +
    "                            <div class=\"stripe-3\"></div>\n" +
    "                        </div>\n" +
    "                        <div class=\"col-sm-4\">\n" +
    "                            <img class=\"img-circle hostImage\" src={{expData.experience_host_information.profile_picture}} alt=\"Profile Pic\">\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                    <div class=\"row container-fluid\">\n" +
    "                        <p>{{expData.experience_host_information.about}}</p>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "                <div class=\"row container-fluid\">\n" +
    "                    <hr>\n" +
    "                </div>\n" +
    "\n" +
    "                <!--Credentials-->\n" +
    "                <div class=\"row container-fluid\">\n" +
    "                    <div class=\"row container-fluid\">\n" +
    "                        <h4>Credentials</h4>\n" +
    "                        <br>\n" +
    "                        <div class=\"stripe-3\"></div>\n" +
    "                    </div>\n" +
    "                    <div class=\"row container-fluid\">\n" +
    "                        <p ng-repeat=\"qualifications in expData.experience_other_qualification\">{{qualifications}}</p>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "                <div class=\"row container-fluid\">\n" +
    "                    <hr>\n" +
    "                </div>\n" +
    "\n" +
    "            </div>\n" +
    "\n" +
    "\n" +
    "        </div>\n" +
    "    </div>\n" +
    "\n" +
    "\n" +
    "\n" +
    "\n" +
    "    <!-- Modal -->\n" +
    "    <div class=\"modal fade\" id=\"checkAvailabilityModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\">\n" +
    "        <div class=\"modal-dialog\" role=\"document\">\n" +
    "            <div class=\"modal-content\">\n" +
    "                <div class=\"modal-header\">\n" +
    "                    <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\"><span aria-hidden=\"true\">&times;</span></button>\n" +
    "                    <h4 class=\"modal-title\" id=\"myModalLabel\">Modal title</h4>\n" +
    "                </div>\n" +
    "                <div class=\"modal-body\">\n" +
    "                    ...\n" +
    "                </div>\n" +
    "                <div class=\"modal-footer\">\n" +
    "                    <button type=\"button\" class=\"btn btn-danger\" data-dismiss=\"modal\">Close</button>\n" +
    "                    <button type=\"button\" class=\"btn btn-success\" data-dismiss=\"modal\">Ok</button>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "    <!--Modal Ends-->\n" +
    "\n" +
    "\n" +
    "\n" +
    "\n" +
    "</div>");
}]);

angular.module("experiences/experiences.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("experiences/experiences.tpl.html",
    "<div ui-view= \"experience\"></div>");
}]);

angular.module("home/home.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("home/home.tpl.html",
    "<div ng-controller=\"FilterSearchCtrl\">\n" +
    "  <!--Hotel Headline and Description-->\n" +
    "  <div ng-controller=\"HotelDescCtrl\" class=\"container-fluid\">\n" +
    "    <h3 style=\"font-family: 'Helvetica Neue Light', sans-serif; font-size: 40px\">{{hotelDescHeadline}}</h3>\n" +
    "    <p class=\"text-justify \" style=\"font-size: 16px;\">{{hotelDescData}}</p>\n" +
    "  </div>\n" +
    "  <br>\n" +
    "  <br>\n" +
    "  <br>\n" +
    "  <br>\n" +
    "  <!--Filter-->\n" +
    "\n" +
    "  <div class=\"row container-fluid\" ng-controller=\"FilterCtrl\">\n" +
    "    <div class=\"form-inline form-group\">\n" +
    "      <label class=\"col-sm-1 col-sm-offset-2 control-label\" style=\"text-align: right;\">Filter by</label>\n" +
    "      <div class=\"col-sm-2\" >\n" +
    "        <!--DropDown for Category-->\n" +
    "        <div uib-dropdown is-open=\"categoryStatus.isopen\">\n" +
    "          <button class=\"btn btn-primary btn-block dropdown-toggle\" ng-model=\"categoryFi\" type=\"button\" id=\"categoryFilterButton\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"true\">\n" +
    "            Category\n" +
    "            <span class=\"caret\"></span>\n" +
    "          </button>\n" +
    "          <br>\n" +
    "          <ul class=\"dropdown-menu\"  uib-dropdown-menu role=\"menu\" aria-labelledby=\"categoryFilterButton\">\n" +
    "            <li role=\"menuitem\" ng-repeat=\"categoryItems in categoryMenu\"><a ng-click=\"categoryItemSelected(categoryItems)\">{{categoryItems}}</a></li>\n" +
    "          </ul>\n" +
    "        </div>\n" +
    "        <!--Dropdown for Category Ends-->\n" +
    "      </div>\n" +
    "\n" +
    "      <div class=\"col-sm-2\" >\n" +
    "        <!--DropDown for Borough-->\n" +
    "        <div uib-dropdown is-open=\"categoryStatus.isopen\">\n" +
    "          <button class=\"btn btn-primary btn-block dropdown-toggle\" ng-model=\"categoryFi\" type=\"button\" id=\"boroughFilterButton\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"true\">\n" +
    "            Borough\n" +
    "            <span class=\"caret\"></span>\n" +
    "          </button>\n" +
    "          <br>\n" +
    "          <ul class=\"dropdown-menu\"  uib-dropdown-menu role=\"menu\" aria-labelledby=\"boroughFilterButton\">\n" +
    "            <li role=\"menuitem\" ng-repeat=\"boroughItems in boroughMenu\"><a ng-click=\"boroughItemSelected(boroughItems)\">{{boroughItems}}</a></li>\n" +
    "          </ul>\n" +
    "        </div>\n" +
    "        <!--Dropdown for Borough Ends-->\n" +
    "      </div>\n" +
    "      <!--Clear filter button-->\n" +
    "      <div class=\"col-sm-2\">\n" +
    "        <button type=\"button\" class=\"btn btn-danger btn-block\" ng-if=\"filterClicked\" ng-click=\"removeFilter();\"><i class=\"fa fa-times\" aria-hidden=\"true\"></i>&nbsp;Clear Filter</button>\n" +
    "      </div>\n" +
    "      <!--clear filter button ends-->\n" +
    "    </div>\n" +
    "  </div>\n" +
    "  <!--Filter Ends-->\n" +
    "  <!--<br>-->\n" +
    "  <br>\n" +
    "  <br>\n" +
    "  <br>\n" +
    "\n" +
    "  <!--Filter Search Message Display-->\n" +
    "  <div class=\"text-center\"><h4>{{categoryFilterDisplay}}<i><span style=\"font-size: 22px;\">{{categoryFilter}}</span></i>{{boroughFilterDisplay}}<i><span style=\"font-size: 22px;\">{{boroughFilter}}</span></i></h4></div>\n" +
    "  <!--Filter Search Message Display Ends-->\n" +
    "\n" +
    "  <div class=\"container\" style=\"padding-left: 0px;\">\n" +
    "    <!-- Experience Card -->\n" +
    "    <!--<div class=\"row\" ng-repeat=\"cardData in experienceCardData\" ng-if=\"$index % 3 == 0\">-->\n" +
    "    <div class=\"col-sm-4\" ng-repeat=\"(key,value) in experienceCardData\">\n" +
    "      <!-- | filter:{value.experience_categories : categoryFilter} | filter:{borough: boroughFilter}    | filter :{value :{experience_categories:categoryFilter}} -->\n" +
    "      <!--Include \".slice($index, ($index+3 > experienceCardData.length ? experienceCardData.length : $index+3))\" after \"experienceCardData in ng-repeat\" just in case-->\n" +
    "      <a ng-click=\"cardClick(key)\">\n" +
    "        <div class=\"thumbnail experienceCard\" >\n" +
    "          <img class=\"experienceCardImg img-responsive\" src={{value.thumbail_image_link}} alt=\"image.jpg\">\n" +
    "        </div>\n" +
    "      </a>\n" +
    "      {{value.experience_categories}}\n" +
    "    </div>\n" +
    "    <!--</div>-->\n" +
    "    <!--Experience Card Ends-->\n" +
    "  </div>\n" +
    "\n" +
    "  <br>\n" +
    "</div>\n" +
    "\n" +
    "");
}]);
