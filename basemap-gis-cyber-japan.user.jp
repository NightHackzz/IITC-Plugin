// ==UserScript==
// @id             iitc-plugin-basemap-gsicyberjapan
// @name           IITC plugin: GSI Cyber Japan map tiles
// @category       Map Tiles
// @version        0.1.1.20171206
// @namespace      https://github.com/NightHackzz/IITC-Plugin
// @updateURL      https://raw.githubusercontent.com/NightHackzz/IITC-Plugin/master/basemap-gis-cyber-japan.user.jp
// @downloadURL    https://raw.githubusercontent.com/NightHackzz/IITC-Plugin/master/basemap-gis-cyber-japan.user.jp
// @description    [NHZ-20171206] Add the native GIS Cyber Japan map tiles as an optional layer.
// @include        https://*.ingress.com/intel*
// @include        http://*.ingress.com/intel*
// @match          https://*.ingress.com/intel*
// @match          http://*.ingress.com/intel*
// @include        https://*.ingress.com/mission/*
// @include        http://*.ingress.com/mission/*
// @match          https://*.ingress.com/mission/*
// @match          http://*.ingress.com/mission/*
// @grant          none
// ==/UserScript==

// use own namespace for plugin
window.plugin.mapGISCyberJapan = {
  addLayer: function() {
    // 国土地理院 tiles

    var gisOpt = {
      attribution: 'Map data GIS Cyber Japan',
      maxNativeZoom: 18,
      maxZoom: 18,
    };

    var layers = {
      'https://cyberjapandata.gsi.go.jp/xyz/std/{z}/{x}/{y}.png' : 'GIS Japan Tile',
    };

    for(var url in layers) {
      var layer = new L.TileLayer(url, gisOpt);
      layerChooser.addBaseLayer(layer, layers[url]);
    }
  },
};

var setup =  window.plugin.mapGISCyberJapan.addLayer;

// PLUGIN END //////////////////////////////////////////////////////////
