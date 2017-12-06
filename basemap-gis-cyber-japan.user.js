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
function wrapper(plugin_info) {
    if(typeof window.plugin !== 'function') window.plugin = function() {};

    plugin_info.buildName = 'gis-cyber-japan';
    plugin_info.dateTimeVersion = '20171206.0002';
    plugin_info.pluginId = 'gis-cyber-japan';

	window.plugin.mapGISCyberJapan = function () {};

	var setup = function ()
	{
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
	};


    setup.info = plugin_info; //add the script info data to the function as a property
    if(!window.bootPlugins) window.bootPlugins = [];
    window.bootPlugins.push(setup);
    // if IITC has already booted, immediately run the 'setup' function
    if(window.iitcLoaded && typeof setup === 'function') setup();
} // wrapper end
// inject code into site context
var script = document.createElement('script');
var info = {};
if (typeof GM_info !== 'undefined' && GM_info && GM_info.script) info.script = { version: GM_info.script.version, name: GM_info.script.name, description: GM_info.script.description };
script.appendChild(document.createTextNode('('+ wrapper +')('+JSON.stringify(info)+');'));
(document.body || document.head || document.documentElement).appendChild(script);



// PLUGIN END //////////////////////////////////////////////////////////
