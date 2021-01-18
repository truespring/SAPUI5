sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/core/routing/History",
    "sap/ui/model/json/JSONModel",
    "sap/ui/core/UIComponent"
], function (Controller, History, JSONModel, UIComponent) {
    "use strict";
    return Controller.extend("sap.ui.deme.walkthrough.controller.Register_product", {
        onInit: function () {            
			// set explored app's demo model on this sample
			var oModel = new JSONModel(sap.ui.require.toUrl("sap/ui/demo/mock/contents5_1.json"));
			this.getView().setModel(oModel);

        },

        // 뒤로 가기 버튼
        onNavBack: function () {

            var oHistory = History.getInstance();
            var sPreviousHash = oHistory.getPreviousHash();

            if (sPreviousHash !== undefined) {
                window.history.go(-1);
            } else {
                var oRouter = UIComponent.getRouterFor(this);
                oRouter.navTo("contents5", {}, true);
            }
        },
        onNavRegister: function () {
            alert("등록되었습니다.");
            console.log(this.getView().byId("order_no").getValue())
            console.log(this.getView().byId("customers").getValue())
            // var oRouter = UIComponent.getRouterFor(this);
            // oRouter.navTo("contents5", {}, true);
        }
    });
});