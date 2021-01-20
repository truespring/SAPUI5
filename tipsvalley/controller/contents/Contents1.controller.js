sap.ui.define([
	"OpenUI5/controller/common/BaseController"
], function(BaseController) {
    "use strict";
        
    return BaseController.extend("OpenUI5.controller.common.BaseController",
    {
        onInit : function ()
        {
            window.contents1 = this; 
            console.log("Content1.js onInit()")
        }
        
    });
}, true);
