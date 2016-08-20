cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
    {
        "id": "com.unarin.cordova.beacon.underscorejs",
        "file": "plugins/com.unarin.cordova.beacon/www/lib/underscore-min-1.6.js",
        "pluginId": "com.unarin.cordova.beacon",
        "runs": true
    },
    {
        "id": "com.unarin.cordova.beacon.Q",
        "file": "plugins/com.unarin.cordova.beacon/www/lib/q.min.js",
        "pluginId": "com.unarin.cordova.beacon",
        "runs": true
    },
    {
        "id": "com.unarin.cordova.beacon.LocationManager",
        "file": "plugins/com.unarin.cordova.beacon/www/LocationManager.js",
        "pluginId": "com.unarin.cordova.beacon",
        "merges": [
            "cordova.plugins"
        ]
    },
    {
        "id": "com.unarin.cordova.beacon.Delegate",
        "file": "plugins/com.unarin.cordova.beacon/www/Delegate.js",
        "pluginId": "com.unarin.cordova.beacon",
        "runs": true
    },
    {
        "id": "com.unarin.cordova.beacon.Region",
        "file": "plugins/com.unarin.cordova.beacon/www/model/Region.js",
        "pluginId": "com.unarin.cordova.beacon",
        "runs": true
    },
    {
        "id": "com.unarin.cordova.beacon.Regions",
        "file": "plugins/com.unarin.cordova.beacon/www/Regions.js",
        "pluginId": "com.unarin.cordova.beacon",
        "runs": true
    },
    {
        "id": "com.unarin.cordova.beacon.CircularRegion",
        "file": "plugins/com.unarin.cordova.beacon/www/model/CircularRegion.js",
        "pluginId": "com.unarin.cordova.beacon",
        "runs": true
    },
    {
        "id": "com.unarin.cordova.beacon.BeaconRegion",
        "file": "plugins/com.unarin.cordova.beacon/www/model/BeaconRegion.js",
        "pluginId": "com.unarin.cordova.beacon",
        "runs": true
    },
    {
        "id": "cordova-plugin-device.device",
        "file": "plugins/cordova-plugin-device/www/device.js",
        "pluginId": "cordova-plugin-device",
        "clobbers": [
            "device"
        ]
    },
    {
        "id": "cordova-plugin-background-mode.BackgroundMode",
        "file": "plugins/cordova-plugin-background-mode/www/background-mode.js",
        "pluginId": "cordova-plugin-background-mode",
        "clobbers": [
            "cordova.plugins.backgroundMode",
            "plugin.backgroundMode"
        ]
    }
];
module.exports.metadata = 
// TOP OF METADATA
{
    "cordova-plugin-whitelist": "1.2.2",
    "com.unarin.cordova.beacon": "3.4.1",
    "cordova-plugin-device": "1.1.2",
    "cordova-plugin-background-mode": "0.6.6-dev"
};
// BOTTOM OF METADATA
});