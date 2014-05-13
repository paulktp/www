document.addEventListener("deviceready", onDeviceReady, false);

    // Cordova is ready
    //
	var options = { timeout: 31000, enableHighAccuracy: true, maximumAge: 90000 };
    function onDeviceReady() {
       pos = navigator.geolocation.getCurrentPosition(onSuccess, onError, options);
	   
	   if(device.model.indexOf('iPad') >= 0) {
			var d = document.getElementById('footer');
			d.className = d.className + " ui-footer-fixed";
		}
    }
		var lati;
		var longi;
    function onSuccess(position) {

		lati = position.coords.latitude;
		longi = position.coords.longitude ;
				var map;
	  var map = new GMaps({
		el: '#directions_map',
		lat: 49.3580638,
		lng: 6.1691812000000255,
		zoom:12
	  });
	  GMaps.geolocate({
		success: function(position){
		  map.setCenter(lati, longi);
				map.addMarker({
				lat: lati,
				lng: longi,
				title: 'You are here.',
				infoWindow: {
				content: 'Vous êtes ici'}
			});
		   map.drawRoute({
			origin: [lati, longi],
			destination: [49.3580638, 6.1691812000000255],
			travelMode: 'driving',
			strokeColor: '#000',
			strokeOpacity: 0.6,
			strokeWeight: 6
		  });
		},
		error: function(error){
		  alert('Geolocation failed: '+error.message);
		},
		not_supported: function(){
		  alert("Your browser does not support geolocation");
		}
	  });
		map.addMarker({
		  lat: 49.3580638,
		  lng: 6.1691812000000255,
		  title: 'Kyou sushi Thionville',
		  infoWindow: {
			content: 'Le restaurant kyou sushi de Thionville ouvrira prochainement'}
		});
    }

    // onError Callback receives a PositionError object
    //
    function onError(error) {
        alert('code: '    + error.code    + '\n' +
                'message: ' + error.message + '\n');
    }
	
		function redirectIndex() {	
         var ref = window.open('index.html', '_self', 'location=yes');
	}
	function redirectWebSite() {	
         var ref = window.open('http://www.kyousushi.com/la-carte/menus/', '_system', 'location=yes');
	}
	function redirectKyouFB() {	
         var ref = window.open('https://www.facebook.com/KyouSushi', '_system', 'location=yes');
	}	