sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/core/UIComponent",
    "sap/ui/model/json/JSONModel",
    "sap/ui/model/Filter",
    "sap/ui/model/FilterOperator"
], function (Controller, UIComponent, JSONModel, Filter, FilterOperator) {
    "use strict";
    
    return Controller.extend("my.application.controller.BaseController", 
    {
    	/**
		 * Convenience method for getting the manifest.json file entry value.
		 * @public
		 * @returns {string} manifest.json file entry value
		 */
		getManifestEntry : function (sEntry) {
			return this.getOwnerComponent().getManifestEntry(sEntry);
		},
    	
    	getRouter: function ()
        {
            return UIComponent.getRouterFor(this);
        },
 
        getModel: function (sName)
        {
            return this.getView().getModel(sName);
        },
 
        setModel: function (oModel, sName)
        {
            return this.getView().setModel(oModel, sName);
        },
 
        getResourceBundle: function ()
        {
            return this.getOwnerComponent().getModel("i18n").getResourceBundle();
        },
        getViewIdValue : function (sName)
        {
            return this.getView().byId(sName).getValue();
        },

        FilterInvoices : function (oEvent, oId) {
            // build filter array
            var aFilter = [];
            var sQuery = oEvent.getParameter("query");
            if(sQuery) {
                aFilter.push(new Filter("Name", FilterOperator.Contains, sQuery));
            }

            // filter binding
            var oList = this.byId(oId);
            var oBinding = oList.getBinding("items");
            oBinding.filter(aFilter);
        }
    });
});