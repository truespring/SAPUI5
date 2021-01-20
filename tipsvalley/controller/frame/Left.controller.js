sap.ui.define([
	"OpenUI5/controller/common/BaseController"
], function(BaseController){
	"use strict";
		
	return BaseController.extend("OpenUI5.controller.common.BaseController", {
		onInit : function() {
			console.log("Left.js OnInit()");
		},

		onNavToContent0 : function() {
			console.log("Left.js onNavToContent0 Clicked");
			
			var oRouter = this.getRouter();
			oRouter.navTo("contents0");
		},

		onNavToContent1 : function() {
			console.log("Left.js onNavToContent1 Clicked");
			
			var oRouter = this.getRouter();
			oRouter.navTo("contents1");
		},
		
		onNavToContent2 : function() {
			console.log("Left.js onNavToContent2 Clicked");

			var oRouter = this.getRouter();
		    oRouter.navTo("contents2");
		},
		
		onNavToContent3 : function(oEent) {
			console.log("Left.js onNavToContent3 Clicked");

			var oRouter = this.getRouter();
		    oRouter.navTo("contents3");
		},
		
		onNavToContent4 : function() {
			console.log("Left.js onNavToContent4 Clicked");

			var oRouter = this.getRouter();
		    oRouter.navTo("contents4");
		},
		
		onNavToContent5 : function() {
			console.log("Left.js onNavToContent5 Clicked");

			var oRouter = this.getRouter();
		    oRouter.navTo("contents5");
		},
		
		onNavToContent6 : function() {
			console.log("Left.js onNavToContent6 Clicked");

			var oRouter = this.getRouter();
		    oRouter.navTo("contents6");
		},
		
		onNavToContent7 : function() {
			console.log("Left.js onNavToContent7 Clicked");

			var oRouter = this.getRouter();
		    oRouter.navTo("contents7");
		},
		
		onNavToContent8 : function() {
			console.log("Left.js onNavToContent8 Clicked");

			var oRouter = this.getRouter();
		    oRouter.navTo("contents8");
		},
		
		onNavToContent9 : function() {
			console.log("Left.js onNavToContent9 Clicked");

			var oRouter = this.getRouter();
		    oRouter.navTo("contents9");
		},
		
		onNavToContent10 : function() {
			console.log("Left.js onNavToContent10 Clicked");

			var oRouter = this.getRouter();
		    oRouter.navTo("contents10");
		},
		
		onNavToContent11 : function() {
			console.log("Left.js onNavToContent11 Clicked");

			var oRouter = this.getRouter();
		    oRouter.navTo("contents11");
		}
	});
}, true);