sap.ui.define(["sap/ui/core/UIComponent"], function(UIComponent) {
	"use strict";

	return UIComponent.extend("OpenUI5.Component", {

		metadata: {
			rootView: "OpenUI5.ChartContainer",
			dependencies: {
				libs: [
					"sap.m",
					"sap.ui.core",
					"sap.suite.ui.commons"
				]
			},
			config: {
				sample: {
					files: [
						"ChartContainer.view.xml",
						"ChartContainer.controller.js",
						"ChartContainerData.json"
					]
				}
			}
		}
	});
});
