sap.ui.define([
    "OpenUI5/controller/common/BaseController",
    "sap/ui/model/json/JSONModel"
], function(BaseController, JSONModel) {
    "use strict";
        
    return BaseController.extend("OpenUI5.controller.common.BaseController",
    {
        onInit : function ()
        {
            window.contents1 = this; 
            console.log("Content2.js onInit()")

            var oModel = new JSONModel(sap.ui.require.toUrl("Mockdata/actionselect.json"));
			this.setModel(oModel);
        }
        
    });
}, true);
