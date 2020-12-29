sap.ui.define([
		"sap/ui/core/mvc/Controller",
		"sap/ui/model/json/JSONModel",
		"sap/m/MessageToast"
	], function(Controller, JSONModel, MessageToast) {
	"use strict";

	return Controller.extend("sap.m.sample.ActionSelect.controller.ActionSelect", {

		onInit: function () {

			// set explored app's demo model on this sample
			var oModel = new JSONModel(sap.ui.require.toUrl("sap/ui/demo/mock/contents5_1.json"));
			this.getView().setModel(oModel);

		}
	});
});