sap.ui.define([
    "sap/ui/core/UIComponent",
    "./controller/contents6/ProcessDialog"
], function (UIComponent, ProcessDialog) {
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
        },
        exit : function () {
            this._processDialog.destory();
            delete this._processDialog;
        },
        openProcessDialog : function (path) {
            this._processDialog.open(path);
        }
    });
});