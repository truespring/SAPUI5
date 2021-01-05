sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel"
], function (Controller, JSONModel) {
    "use strict";

    return Controller.extend("OpenUI5.controller.History", {
        onInit : function () {

        },

        onOpenHistoryDialog : function () {
            this.getOwnerComponent().openHistoryDialog();
        },
        onOpenManagementDialog : function () {
            this.getOwnerComponent().openInspectionManagementDialog();
        }
    });
});