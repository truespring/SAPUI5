sap.ui.define([
    "sap/ui/core/UIComponent",
    "./controller/contents6/ProcessDialog",
    "./controller/contents6/ManagementDialog",
    "./controller/contents7/PerformanceDialog"
], function (UIComponent, ProcessDialog, ManagementDialog, PerformanceDialog) {
    "use strict";

    return UIComponent.extend("OpenUI5.Component", {

        metadata: {
            manifest: "json"
        },
        
        init: function () {
        	console.log("Component.js init()");
        	
            // call the init function of the parent
            UIComponent.prototype.init.apply(this, arguments);

            // create the views based on the url/hash
            var oRouter = this.getRouter();
            oRouter.initialize();
            
            // set dialog
            this._processDialog = new ProcessDialog(this.getRootControl());
            this._managementDialog = new ManagementDialog(this.getRootControl());
            this._performaneceDialog = new PerformanceDialog(this.getRootControl());
		},


		exit : function() {
            this._processDialog.destroy();
            delete this._processDialog;

            this._managementDialog.destroy();
            delete this._managementDialog;

            this._performaneceDialog.destroy();
            delete this._performaneceDialog;
		},

		openProcessDialog : function () {
			this._processDialog.openProcess();
        },
        
        openManagementDialog : function () {
            this._managementDialog.openManagement();
        },

        openPerformanceDialog : function () {
            this._performaneceDialog.openPerformance();
        }
    });
});