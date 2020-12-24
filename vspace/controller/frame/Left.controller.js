sap.ui.define([
	"OpenUI5/controller/common/BaseController"
], function(BaseController){
	"use strict";
		
	return BaseController.extend("OpenUI5.controller.common.BaseController", {
		onInit : function() {
			console.log("Left.js OnInit()");
		},

		
		onNavToContent1 : function() {
			console.log("Left.js onNavToContent1 Clicked");
			
			var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
			oRouter.navTo("contents1");
		},
		
		onNavToContent2 : function(oEvent) {
			console.log("Left.js onNavToContent2 Clicked");

			var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
		    oRouter.navTo("contents2");
		},
		
		onNavToContent3 : function(oEvent) {
			console.log("Left.js onNavToContent3 Clicked");

			var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
		    oRouter.navTo("contents3");
		},
		
		onNavToContent4 : function(oEvent) {
			console.log("Left.js onNavToContent4 Clicked");

			var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
		    oRouter.navTo("contents4");
		},
		
		onNavToSensorSparkRT : function(oEvent) {
			console.log("Left.js onNavToSensorSparkRT Clicked");

			var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
		    oRouter.navTo("sensorSparkRT");
		},
		
		onNavToSparkController : function(oEvent) {
			console.log("Left.js onNavToSparkController Clicked");

			var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
		    oRouter.navTo("sparkController");
		},
		
		onNavToCpuInfo : function(oEvent) {
			console.log("Left.js onNavToCpuInfo Clicked");

			var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
		    oRouter.navTo("cpuInfo");
		},
		
		onNavToSapUI5 : function(oEvent) {
			console.log("Left.js onNavToSapUI5 Clicked");

			//var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
		    //oRouter.navTo("sparkController");
			
			window.open("http://192.168.1.138:9100");
		},
		
		onNavToPythonML : function(oEvent) {
			console.log("Left.js .onNavToPythonML Clicked");

			//var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
		    //oRouter.navTo("cpuInfo");
			
			window.open("http://192.168.1.147");
		}
		,
		onNavToAWX : function(oEvent) {
			console.log("Left.js .onNavToAWX Clicked");

			//var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
		    //oRouter.navTo("cpuInfo");
			
			window.open("http://192.168.1.146");
		}
		,
		onNavToAmbari : function(oEvent) {
			console.log("Left.js .onNavToAmbari Clicked");

			//var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
		    //oRouter.navTo("cpuInfo");
			
			window.open("http://192.168.1.134:8080");
		},
		onNavToGrafana : function(oEvent) {
			console.log("Left.js .onNavToGrafana Clicked");

			//var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
		    //oRouter.navTo("cpuInfo");
			
			window.open("http://192.168.1.147:3000");
		}
		,
		onNavToPrometheus : function(oEvent) {
			console.log("Left.js .onNavToPrometheus Clicked");

			//var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
		    //oRouter.navTo("cpuInfo");
			
			window.open("http://192.168.1.147:9090");
		}
		,		
		onNavToPrometheusFSImage : function(oEvent) {
			console.log("Left.js .onNavToPrometheusFSImage Clicked");

			//var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
		    //oRouter.navTo("cpuInfo");
			
			window.open("http://192.168.1.136:7772/metrics");
		}
		,
		onNavToPrometheusNode : function(oEvent) {
			console.log("Left.js .onNavToPrometheusNode Clicked");

			//var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
		    //oRouter.navTo("cpuInfo");
			
			window.open("http://192.168.1.136:9100/metrics");
		}
	});
}, true);