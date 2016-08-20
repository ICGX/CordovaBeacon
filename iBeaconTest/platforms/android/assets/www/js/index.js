/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
var app = {
    // Application Constructor
    initialize: function() {
        this.bindEvents();
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicitly call 'app.receivedEvent(...);'
    onDeviceReady: function() {
        app.receivedEvent('deviceready');
        
        var delegate = new cordova.plugins.locationManager.Delegate();

        delegate.didDetermineStateForRegion = function (pluginResult) {
            logToDom('[DOM] didDetermineStateForRegion: ' + JSON.stringify(pluginResult));
            cordova.plugins.locationManager.appendToDeviceLog('[DOM] didDetermineStateForRegion: '
            + JSON.stringify(pluginResult));
        };

        delegate.didStartMonitoringForRegion = function (pluginResult) {
            console.log('didStartMonitoringForRegion:', pluginResult);
            logToDom('didStartMonitoringForRegion:' + JSON.stringify(pluginResult));
        };

        delegate.didRangeBeaconsInRegion = function (pluginResult) {
            logToDom('[DOM] didRangeBeaconsInRegion: ' + JSON.stringify(pluginResult));
            var parentElement = document.getElementById('beacon-status');
            var beacons = pluginResult.beacons;
            if(beacons.length == 0){
                parentElement.innerHTML = "Not in range";
            }else{
                var acc = beacons[0].accuracy;
                var rss = beacons[0].rssi;
                var tx = beacons[0].tx;
                var result = "<br>"+acc+"<br>"+rss+"<br>"+tx;
                switch(beacons[0].proximity){
                    case "ProximityNear":
                        parentElement.innerHTML = "Near"+result;
                        break;
                    case "ProximityFar":
                        parentElement.innerHTML = "Far"+result;
                        break;
                    case "ProximityImmediate":
                        parentElement.innerHTML = "Immediate"+result;
                        break;
                }
            }
        };

        region = createBeacon();

        cordova.plugins.locationManager.setDelegate(delegate);
        cordova.plugins.locationManager.requestAlwaysAuthorization();
        // cordova.plugins.locationManager.startMonitoringForRegion(region)
        //     .fail(function(e) { console.error(e); })
        //     .done();
        cordova.plugins.locationManager.startRangingBeaconsInRegion(region)
            .fail(function(e) { console.error(e); })
            .done();
    },
    // Update DOM on a Received Event
    receivedEvent: function(id) {
        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');

        console.log('Received Event: ' + id);
    }
};

/**
 * Function that creates a BeaconRegion data transfer object.
 * 
 * @throws Error if the BeaconRegion parameters are not valid.
 */
function createBeacon() {

    var uuid = '00000000-0000-0000-0000-000000000000'; // mandatory
    var identifier = 'id.beacon.test'; // mandatory
    var minor = 0; // optional, defaults to wildcard if left empty
    var major = 0; // optional, defaults to wildcard if left empty

    // throws an error if the parameters are not valid
    var beaconRegion = new cordova.plugins.locationManager.BeaconRegion(identifier, uuid, major, minor);

    return beaconRegion;   
}

var logToDom = function (message) {
    console.log(message);
    var parentElement = document.getElementById('beacon-status');
    // parentElement.innerHTML = message;
};

app.initialize();