// ==UserScript==
// @id             iitc-plugin-basemap-gsicyberjapan
// @name           IITC plugin: GSI Cyber Japan map tiles
// @category       Map Tiles
// @version        0.0.9.201712061725
// @namespace      https://github.com/NightHackzz/IITC-Plugin
// @updateURL      https://raw.githubusercontent.com/NightHackzz/IITC-Plugin/master/basemap-gsi-cyber-japan.user.js
// @downloadURL    https://raw.githubusercontent.com/NightHackzz/IITC-Plugin/master/basemap-gsi-cyber-japan.user.js
// @description    [NHZ-20171206.9] Add the native GSI Cyber Japan map tiles as an optional layer.
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

    plugin_info.buildName = 'gsi-cyber-japan';
    plugin_info.dateTimeVersion = '20171206172100';
    plugin_info.pluginId = 'gsi-cyber-japan';

	var setup = function ()
	{
		// 国土地理院 tiles

		var gisOpt = {
		  attribution: 'Map Data Japan GSI',
		  maxNativeZoom: 18,
		  maxZoom: 21,
		};

		var layers = {
		  'https://cyberjapandata.gsi.go.jp/xyz/std/{z}/{x}/{y}.png' : 'Japan GSI Standard',
          'https://cyberjapandata.gsi.go.jp/xyz/seamlessphoto/{z}/{x}/{y}.jpg' : 'Japan GSI Seamless'
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

