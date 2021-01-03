sap.ui.define([
	"OpenUI5/controller/common/BaseController"
], function(BaseController) {
	"use strict";
		
	return BaseController.extend("OpenUI5.controller.common.BaseController", {

		onInit : function () {
            window.contents7 = this; 
			console.log("Contents7.js OnInit()");
		}
	});
}, true);