sap.ui.define([
	"OpenUI5/controller/common/BaseController",
], function(BaseController) {
    "use strict";
        
    return BaseController.extend("OpenUI5.controller.common.BaseController",
    {
        onInit : function ()
        {
            window.contents0 = this; 
            console.log("Content0.js onInit()")
        }
        
    });
}, true);
