require ('dotenv').config();
var masterData = require( '../data/masterData.json');
var elementsData = require( '../data/elementsData.json');

var objectPage = require( '../module/objectPage.js');
var listReport = require( '../module/listReport.js');


describe("Create a New Purchase Order", function () {

    it("Step 01: Open the system and navigate to the app", async function () {
        
        await ui5.navigation.navigateToApplication("PurchaseOrder-manage");

    });

    it("Step 02: App Login", async function () {

        await ui5.session.login(process.env.USER, process.env.PASSWORD);

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
        await util.browser.sleep(30000);

    });

    it("Step 04: Purchase order Type - Standard Z-PO (ZNB)", async function() {

        await objectPage.fillInfields(
            elementsData.combobox.purchaseOrderType.type,
            elementsData.combobox.purchaseOrderType.metadata,
            elementsData.combobox.purchaseOrderType.id,
            masterData.generalInformation.purchaseOrderType
        );

       });
   
    it("Step 05: Choose Supplier - 50000040", async function() {

    await objectPage.fillInfields(
        elementsData.fields.supplier.type,
        elementsData.fields.supplier.metadata,
        elementsData.fields.supplier.id,
        masterData.generalInformation.supplier
    );

    });
   
    it("Step 06: Choose currency - EUR", async function() {

    await objectPage.fillInfields(
        elementsData.fields.currency.type,
        elementsData.fields.currency.metadata,
        elementsData.fields.currency.id,
        masterData.generalInformation.currency
    );

    });
   
    it("Step 07: Choose Purchasing Group - 001", async function() {

    await objectPage.fillInfields(
        elementsData.fields.purchasingGroup.type,
        elementsData.fields.purchasingGroup.metadata,
        elementsData.fields.purchasingGroup.id,
        masterData.generalInformation.purchasingGroup
    );
    await common.userInteraction.pressEnter();

    });

    it ('Step 08: Choose Purchasing Organization - 1010',  async function(){

        await objectPage.fillInfields(
            elementsData.fields.purchasingOrganization.type,
            elementsData.fields.purchasingOrganization.metadata,
            elementsData.fields.purchasingOrganization.id,
            masterData.generalInformation.purchasingOrganization
        );
        await common.userInteraction.pressEnter();

    });

    it ('Step 09: Choose Company Code - 1010',  async function(){
 
        await objectPage.fillInfields(
            elementsData.fields.companyCode.type,
            elementsData.fields.companyCode.metadata,
            elementsData.fields.companyCode.id,
            masterData.generalInformation.companyCode
        );
        await common.userInteraction.pressEnter();

    });

    it ('Step 10: Navigate to the Items Tab',  async function(){
        const selector = {
            "elementProperties": {
                "viewName": "sap.suite.ui.generic.template.ObjectPage.view.Details",
                "metadata": "sap.m.Button",
                "id": "*objectPage-anchBar-ui.ssuite.s2p.mm.pur.po.manage.st.s1::sap.suite.ui.generic.template.ObjectPage.view.Details::C_PurchaseOrderTP--ItemsFacet::Section-anchor"
            }
        };
        
    });


    var itemArr = masterData.items;
    for (let [itemIndex, itemValue] of itemArr.entries()) {

        it ("Item " + itemValue.item + " Add Purchase Order Item",  async function(){
            
            const selector = {
                "elementProperties": {
                    "viewName": "sap.suite.ui.generic.template.ObjectPage.view.Details",
                    "metadata": "sap.m.Button",
                    "id": "*ItemsFacet::addEntry"
                }
            };
            await ui5.userInteraction.click(selector);

        });

        it ("Item " + itemValue.item + " Select Item Category - " + itemValue.itemCategory,  async function(){

            await objectPage.fillInfields(
                elementsData.fields.itemCategory.type,
                elementsData.fields.itemCategory.metadata,
                elementsData.fields.itemCategory.path, 
                itemValue.itemCategory,
                itemValue.item
            );

        });
    
        it ("Item " + itemValue.item + " Choose Material - " + itemValue.Material,  async function(){

            await objectPage.fillInfields(
                elementsData.fields.itemMaterial.type,
                elementsData.fields.itemMaterial.metadata,
                elementsData.fields.itemMaterial.path, 
                itemValue.Material,
                itemValue.item
            );

        });
    
        it ("Item " + itemValue.item + " Fill in Quantity " + itemValue.orderQuantity,  async function(){

            await objectPage.fillInfields(
                elementsData.fields.itemQuantity.type,
                elementsData.fields.itemQuantity.metadata,
                elementsData.fields.itemQuantity.path, 
                itemValue.orderQuantity,
                itemValue.item
            );

        });
};

    it ('Step 15: Create Document - Click Create button',  async function(){
        const selector = {
            "elementProperties": {
                "viewName": "sap.suite.ui.generic.template.ObjectPage.view.Details",
                "metadata": "sap.m.Button",
                "id": "*activate"
            }
        };

        await common.userInteraction.pressEnter();
        await ui5.userInteraction.click(selector);

    });

    it ('Step 16: Get PO ID',  async function(){
        const selector = {
            "elementProperties": {
                "viewName": "sap.suite.ui.generic.template.ObjectPage.view.Details",
                "metadata": "sap.m.Title",
                "id": "*template::ObjectPage::ObjectPageDynamicHeaderTitle"
            }
        };

        const purchaseOrderID = await ui5.element.getPropertyValue(selector, "text");

        console.log (purchaseOrderID);

        const userData = {
            "purchaseOrder": purchaseOrderID
        };
        browser.config.params.export.purchaseOrder = userData;
        const references = browser.config.params.import.data ["references"];
        references.purchaseOrderNumber = purchaseOrderID;
    });

    it ('Step 17: Logging Out',  async function(){
        await ui5.session.logout();
    });

});