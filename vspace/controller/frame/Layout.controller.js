sap.ui.define([
   "OpenUI5/controller/common/BaseController",
], function (BaseController) {
   "use strict";
   return BaseController.extend("OpenUI5.controller.common.BaseController", {
      
      fullscreen : "",

      onInit : function () {
         window.layoutControll = this;

         console.log("Layout.js OnInit()");
      }
   });
});