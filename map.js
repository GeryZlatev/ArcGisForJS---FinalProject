require([
    "esri/config", 
    "esri/WebMap", 
    "esri/views/MapView",
    "esri/widgets/ScaleBar",
    "esri/widgets/Legend",
    "esri/widgets/Home"
], function(esriConfig, WebMap, MapView, ScaleBar,Legend, Home) {
    esriConfig.apiKey = "AAPK2b8b0de0d4984515a672b18ad40b9e8b6TP9ai3QVkOfvsWzaN5IjP3dULNRrjYyzK1bc_z4voYXPkTawiugtOCZYXkAThQ7"

    const webMap = new WebMap({
        portalItem: {
            id: "9cd3c2bd19f04c8896fe7a1e0f3f5e23"
        }
    });

    const view = new MapView({
        container: "viewDiv",
        map: webMap


    });

    const homeBtn = new Home({
        view: view
    });

    view.ui.add(homeBtn, "top-left");





})