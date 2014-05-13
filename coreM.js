document.addEventListener("deviceready", onDeviceReady, false);

    // Cordova is ready
    //
	var options = { timeout: 31000, enableHighAccuracy: true, maximumAge: 90000 };
    function onDeviceReady() {
       pos = navigator.geolocation.getCurrentPosition(onSuccess, onError, options);
    }
		var lati;
		var longi;
    function onSuccess(position) {
		var element1 = document.getElementById('img');
		var element2 = document.getElementById('ret');

		if(device.platform == 'iOS'){
		}else{element2.style.display = 'none';}
		if(device.model.indexOf('iPad') >= 0) {
			element1.innerHTML = '<h1 style="text-align:center;margin-top:9%"><img src="logo.png" /></h1>';
		}
		
		lati = position.coords.latitude;
		longi = position.coords.longitude ;
		
		var map;
		var map = new GMaps({
			el: '#directions_map',
			lat: 49.357571,
			lng: 6.168425999999954,
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
			destination: [49.119327, 6.17101],
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
	  var image = 'img/fav.png';

		map.addMarker({
		  lat: 49.119327,
		  lng: 6.17101,
		  title: 'Kyou Sushi Metz',
		  icon: image,
		  infoWindow: {
			content: 'Restaurant Kyou Sushi de Metz Adresse : 6 Rue du Moyen Pont, 57000 Metz </br>Téléphone : 03 87 66 83 52 </br>Horaires : Ouvert 7/7j de 12:00 à 15:00 et de 18:30 à 23:00'}
		});
		
		map.fitZoom();
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
	