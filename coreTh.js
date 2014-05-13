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
				title: 'Vous êtes ici.',
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
		  title: 'Kyou Sushi Thionville',
		  infoWindow: {
			content: 'Le restaurant Kyou Sushi de Thionville ouvrira prochainement.'}
		});
    }

    // onError Callback receives a PositionError object
    //
    function onError(error) {
        alert('code: '    + error.code    + '\n' +
                'message: ' + error.message + '\n');
    }	