sap.ui.define(
  [
    "sap/ui/core/UIComponent",
    "sap/ui/model/json/JSONModel",
    "sap/ui/model/resource/ResourceModel",
  ],
  function (UIComponent, JSONModel, ResourceModel) {
    "use strict";
    return UIComponent.extend("sap.ui.walkthrough.Component", {
      metadata: {
        manifest: "json",
      },
      init: function () {
        //call the init function of the parent
        UIComponent.prototype.init.apply(this, arguments);
        //set data models
        var oData = {
          recipient: {
            name: "UI5",
          },
        };
        var oModel = new JSONModel(oData);
        this.setModel(oModel);
        //Show Description + Value of input, this refers to view and getView() show the line with the setModel
        //which modify the contente of the Description + "Value"
      },
    });
  }
);
