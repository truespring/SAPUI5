sap.ui.define([
    "OpenUI5/controller/common/BaseController",
    "sap/ui/model/Filter",
    "sap/ui/model/FilterOperator"
], function(BaseController, Filter, FilterOperator) {
    "use strict";
        
    return BaseController.extend("OpenUI5.controller.common.BaseController",
    {
        onInit : function ()
        {
            console.log("BoardList.js onInit()")
        },
        onFilterBoard : function (oEvent) {

            // build filter array
            var aFilter = [];
            var sQuery = oEvent.getParameter("query");
            if(sQuery) {
                aFilter.push(new Filter("BoardTitle", FilterOperator.Contains, sQuery));
            }

            // filter binding
            var oList = this.byId("boardList");
            var oBinding = oList.getBinding("items");
            oBinding.filter(aFilter);
        },
        onPress: function (oEvent) {
            var oItem = oEvent.getSource();
            var oRouter = this.getRouter();
            oRouter.navTo("detail", {
                boardPath: window.encodeURIComponent(oItem.getBindingContext("board").getPath().substr(1))
            });
        }
        
    });
}, true);
