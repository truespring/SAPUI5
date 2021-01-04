sap.ui.define([
    "sap/ui/core/UIComponent",
    "./controller/contents6/ProcessDialog",
    "./controller/contents6/ManagementDialog"
], function (UIComponent, ProcessDialog, ManagementDialog) {
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
		},


		exit : function() {
            this._processDialog.destroy();
            delete this._processDialog;

            this._managementDialog.destroy();
            delete this._managementDialog;
		},

		openProcessDialog : function () {
			this._processDialog.openProcess();
        },
        
        openManagementDialog : function () {
            this._managementDialog.openManagement()
        }
    });
});