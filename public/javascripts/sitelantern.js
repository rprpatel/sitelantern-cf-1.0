CloudFlare.define("sitelantern",
    ["sitelantern/config"],
    function(config)
    {
		//build the URL for JS resource
		var url = 'https://beacon.primoris.co.nz/beaconjs_remote?id=' + config.visitorid +'&debug=false';
		
		//Load and execute file
		CloudFlare.require([url]);
    }
);
