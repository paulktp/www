document.addEventListener("deviceready", onDeviceReady, false);

    // Cordova is ready
    //
	var options = { timeout: 10000, enableHighAccuracy: true, maximumAge: 90000 };
    function onDeviceReady() {
       pos = navigator.geolocation.getCurrentPosition(onSuccess, onError, options);
	   
	   
	   
	   if(device.model.indexOf('iPad') >= 0) {
			var d = document.getElementById('footer');
			d.className = d.className + " ui-footer-fixed";
			var d2 = document.getElementById('directions_map');
			d2.className = d2.className + " map_ipad";
		}
    }
		var lati;
		var longi;
    function onSuccess(position) {
		
		lati = position.coords.latitude;
		longi = position.coords.longitude ;
		alert(lati+'+'+longi)
		var map;
		var map = new GMaps({
			el: '#directions_map',
			lat: 49.357571,
			lng: 6.168425999999954,
			zoom:12
		  });
	  GMaps.geolocate({
		success: function(position){
			alert(success)
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
			content: 'Restaurant Kyou Sushi de Metz <br/>Adresse : 6 Rue du Moyen Pont, 57000 Metz <br/>Téléphone : 03 87 66 83 52 <br/>Horaires : Ouvert 7/7j de 12:00 à 15:00 et de 18:30 à 23:00'}
		});
    }

    // onError Callback receives a PositionError object
    //
    function onError(error) {
		navigator.notification.alert('Les données du GPS doivent être accessibles pour que l\' application fonctionne correctement. Veuillez activer le GPS.\n'
									, alertCallback, "Erreur", "Fermer")
        alert('code: '    + error.code    + '\n' +
                'message: ' + error.message + '\n');
    }
	function alertCallback(){
		//nothing
	}
	
	function redirectIndex() {	
         var ref = window.open('index.html', '_self', 'location=yes');
	}
	