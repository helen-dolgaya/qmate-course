const QmateService = require("@sap_oss/wdio-qmate-service");

exports.config = {

    baseUrl: "https://us4.leverx.local:44302/sap/bc/ui2/flp",

    specs: [
        [
            "./specs/01_create.spec.js",
            "./specs/02_checkList.spec.js"
        ]
    ],

    params: {
        qmateCustomTimeout: 700000,
        import: {
          data:"./data/",
          purchaseOrder: "./data/purchaseOrder.json"
        },
        export: {
          purchaseOrder: "./data/purchaseOrder.json"
        }
  
    },

    maxInstances: 5,

    capabilities: [{
        // capabilities for local browser web tests
        browserName: "chrome", // or "firefox", "microsoftedge", "safari",
        acceptInsecureCerts: true,
        'goog:chromeOptions': {
            args: [
                "--output=/dev/null",
                "--log-level=3",
                "--no-sandbox",
                "--incognito",
                "--ignore-certificate-errors",
                "--window-size=1920,1200",
                "--whitelisted-ips",
                "--disable-dev-shm-usage",
                "--headless",
                "--disable-gpu",
                "--disable-web-security",
                "--disable-infobars",
                "--disable-extensions",
                "--disable-logging",
                "--lang=en-US"
            ]
        }
    }],

    connectionRetryTimeout: 120000,
    connectionRetryCount: 3,
    waitForUI5Timeout: 60000,

    //services: [[QmateService],['chromedriver']],
    services: [[QmateService]],

    framework: 'mocha',
    mochaOpts: {
        timeout: 500000,
        bail: true
    },

    reporters: [
        [
            'spec',
            {
                symbols: {
                    passed: '[PASS]',
                    failed: '[FAIL]',
                },
            },
        ]
    ],

};