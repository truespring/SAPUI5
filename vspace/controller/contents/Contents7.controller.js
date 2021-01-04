sap.ui.define([
	"OpenUI5/controller/common/BaseController",
    "sap/ui/model/json/JSONModel"
], function(BaseController, JSONModel) {
	"use strict";
		
	return BaseController.extend("OpenUI5.controller.common.BaseController", {

		onInit : function () {
            window.contents7 = this; 
			console.log("Contents7.js OnInit()");

			// set explored app's demo model on this sample
			var oModel = new JSONModel(sap.ui.require.toUrl("sap/ui/demo/mock/contents7.json"));
			this.getView().setModel(oModel);
		}
	});
}, true);