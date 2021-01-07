sap.ui.define([
    'sap/ui/core/mvc/Controller',
    'sap/ui/model/json/JSONModel',
    'sap/viz/ui5/data/FlattenedDataset',
    'sap/viz/ui5/controls/common/feeds/FeedItem'
], function(Controller, JSONModel, FlattenedDataset, FeedItem) {
    "use strict";

    var oPageController = Controller.extend("OpenUI5.ChartContainer", {

        _constants: {
            sampleName: "OpenUI5",
            vizFrame: {
                id: "chartContainerVizFrame",
                dataset: {
                    dimensions: [{
                        name: 'Country',
                        value: "{Country}"
                    }],
                    measures: [{
                        group: 1,
                        name: 'Profit',
                        value: '{Revenue2}'
                    }, {
                        group:1,
                        name: 'Target',
                        value: '{Target}'
                    }, {
                        group: 1,
                        name: "Forcast",
                        value: "{Forcast}"
                    }, {
                        group: 1,
                        name: "Revenue",
                        value: "{Revenue}"
                    }, {
                        group: 1,
                        name: 'Revenue2',
                        value: '{Revenue2}'
                    }, {
                        group: 1,
                        name: "Revenue3",
                        value: "{Revenue3}"
                    }],
                    data: {
                        path: "/Products"
                    }
                },
                modulePath: "/ChartContainerData.json",
                type: "line",
                properties: {
                    plotArea: {
                        showGap: true
                    }
                },
                feedItems: [{
                    'uid': "primaryValues",
                    'type': "Measure",
                    'values': ["Revenue"]
                }, {
                    'uid': "axisLabels",
                    'type': "Dimension",
                    'values': ["Country"]
                }, {
                    'uid': "targetValues",
                    'type': "Measure",
                    'values': ["Target"]
                }]
            }
        },

        onInit: function () {
            var oVizFrame = this.getView().byId(this._constants.vizFrame.id);
            this._updateVizFrame(oVizFrame);
        },
        _updateVizFrame: function(vizFrame) {
            var oVizFrame = this._constants.vizFrame;
            var oVizFramePath = jQuery.sap.getModulePath(this._constants.sampleName, oVizFrame.modulePath);
            var oModel = new JSONModel(oVizFramePath);
            var oDataset = new FlattenedDataset(oVizFrame.dataset);

            vizFrame.setVizProperties(oVizFrame.properties);
            vizFrame.setDataset(oDataset);
            vizFrame.setModel(oModel);
            this._addFeedItems(vizFrame, oVizFrame.feedItems);
            vizFrame.setVizType(oVizFrame.type);
        },
        _addFeedItems: function(vizFrame, feedItems) {
            for (var i = 0; i < feedItems.length; i++) {
                vizFrame.addFeed(new FeedItem(feedItems[i]));
            }
        }
    });
    return oPageController;
})