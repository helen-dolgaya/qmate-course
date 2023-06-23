// require ('dotenv').config();
describe("Create a New Purchase Order", function () {

    it("Step 01: Open the system and navigate to the app", async function () {
        await ui5.navigation.navigateToApplication("PurchaseOrder-manage");
        //   await ui5.session.sleep(100000);
    });

    it("Step 02: App Login", async function () {
        await ui5.session.login("ADOUHAYA", "7Horseslove");
        // await ui5.session.login(process.env.USER, process.env.PASSWORD);
        // await util.browser.sleep(90000);
    });

    it("Step 03: Click Create on the list Report page", async function () {
        const selector = {
            "elementProperties": {
                "viewName": "sap.suite.ui.generic.template.ListReport.view.ListReport",
                "metadata": "sap.m.Button",
                "id": "*addEntry"
            }
        };
        await ui5.userInteraction.click(selector);
        await util.browser.sleep(60000);
    });

    it("Step 04: Purchase order Type - Standard Z-PO (ZNB)", async function() {
        const selector = {    
       "elementProperties": {
           "viewName": "sap.suite.ui.generic.template.ObjectPage.view.Details",
           "metadata": "sap.m.ComboBox",
           "id": "*GeneralInformationFacet1::PurchaseOrderType::Field-comboBoxEdit"
       }
   };
           actualValue = "Standard Z-PO (ZNB)"
           await ui5.userInteraction.selectComboBox(selector, actualValue);
       });
   
    it("Step 05: Choose Supplier - 50000040", async function() {
       const selector = {
           "elementProperties": {
               "viewName": "sap.suite.ui.generic.template.ObjectPage.view.Details",
               "metadata": "sap.m.Input",
               "id": "*GeneralInformationFacet1::Supplier::Field-input"
           }
       };
       actualValue = "50000040";
       await ui5.userInteraction.clearAndFill(selector, 50000040);
    });
   
    it("Step 06: Choose currency - EUR", async function() {
       const selector = {
           "elementProperties": {
               "viewName": "sap.suite.ui.generic.template.ObjectPage.view.Details",
               "metadata": "sap.m.Input",
               "id": "*GeneralInformationFacet1::DocumentCurrency::Field-input"
           }
       };
       actualValue = "EUR";
       await ui5.userInteraction.clearAndFill(selector, "EUR");
    });
   
    it("Step 07: Choose Purchasing Group - 001", async function() {
       const selector = {
           "elementProperties": {
               "viewName": "sap.suite.ui.generic.template.ObjectPage.view.Details",
               "metadata": "sap.m.Input",
               "id": "*GeneralInformationFacet2::PurchasingGroup::Field-input"
           }
       };
       actualValue = "001";
       await ui5.userInteraction.clearAndFill(selector, "001");
       await common.userInteraction.pressEnter();
    });

    // it("Step 04: Select PO", async function () {
    //     const selector = {
    //         "elementProperties": {
    //             "viewName": "sap.suite.ui.generic.template.ObjectPage.view.Details",
    //             "metadata": "sap.m.ComboBox",
    //             "id": "*PurchaseOrderType::Field-comboBoxEdit"
    //         }
    //     }
    //     actualValue = "Standard Z-PO (ZHB)";
    //     await ui5.userInteraction.selectComboBox(selector, actualValue);
    // });

    // it("Step 05: Choose Supplier", async function () {
    //     const selector = {
    //         "elementProperties": {
    //             "viewName": "sap.suite.ui.generic.template.ObjectPage.view.Details",
    //             "metadata": "sap.m.Input",
    //             "id": "*GeneralInformationFacet1::Supplier::Field-input"
    //         }
    //     }
    //     const valueToEnter = "50000048";
    //     await ui5.userInteraction.clearAndFill(selector, valueToEnter);
    // });

    // it("Step 06: Choose Purchase Group", async function () {
    //     const selector = {
    //         "elementProperties": {
    //             "viewName": "sap.suite.ui.generic.template.ObjectPage.view.Details",
    //             "metadata": "sap.m.Input",
    //             "id": "*GeneralInformationFacet2::PurchasingGroup::Field-input"
    //         }
    //     }
    //     const valueToEnter = "001";
    //     await ui5.userInteraction.clearAndFill(selector, valueToEnter);
    //     await common.userInteraction.pressEnter();
    // });

    // it("Step 07: Choose Purchase Organization", async function () {
    //     const selector = {
    //         "elementProperties": {
    //             "viewName": "sap.suite.ui.generic.template.ObjectPage.view.Details",
    //             "metadata": "sap.m.Input",
    //             "id": "*GeneralInformationFacet3::PurchasingOrganization::Field-input"
    //         }
    //     }
    //     const valueToEnter = "1010";
    //     await ui5.userInteraction.clearAndFill(selector, valueToEnter);
    //     await common.userInteraction.pressEnter();
    // });

    // it("Step 08: Choose Company Code", async function () {
    //     const selector = {
    //         "elementProperties": {
    //             "viewName": "sap.suite.ui.generic.template.ObjectPage.view.Details",
    //             "metadata": "sap.m.Input",
    //             "id": "*GeneralInformationFacet3::CompanyCode::Field-input"
    //         }
    //     }
    //     const valueToEnter = "1010";
    //     await ui5.userInteraction.clearAndFill(selector, valueToEnter);
    // });

    // it("Step 09: Navigate to Items Tab", async function () {
    //     const selector = {
    //         "elementProperties": {
    //             "viewName": "sap.suite.ui.generic.template.ObjectPage.view.Details",
    //             "metadata": "sap.m.Button",
    //             // "id": "*objectPage-"
    //         }
    //     }
    //     await ui5.userInteraction.click(selector);
    // });

    // it("Step 10: Navigate to Items Tab", async function () {
    //     const selector = {
    //         "elementProperties": {
    //             "viewName": "sap.suite.ui.generic.template.ObjectReport.view.Details",
    //             "metadata": "sap.m.Button",
    //             // "id": "*objectPage-"
    //         }
    //     }
    //     await ui5.userInteraction.click(selector);
    // });

});