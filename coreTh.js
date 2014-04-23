  document.addEventListener("deviceready", onDeviceReady, false);

    // Cordova is ready
    //
	var pos;
    function onDeviceReady() {
       pos = navigator.geolocation.getCurrentPosition(onSuccess, onError);
    }
		var lati;
		var longi;
    function onSuccess(position) {
        var element = document.getElementById('geolocation');				
		lati = position.coords.latitude;
		longi = position.coords.longitude ;
    }

    // onError Callback receives a PositionError object
    //
    function onError(error) {
        alert('code: '    + error.code    + '\n' +
                'message: ' + error.message + '\n');
    }
	
	var element1 = document.getElementById('DivIpad');
	var element2 = document.getElementById('ret');
	if(device.model.indexOf('iPad') != -1){
		element1.innerHTML = '<img src="img/picRestMetz.jpg" style="width: 100%; height:38%; position:relative; bottom:0px"/>';
		}
	if(device.platform == "iOS"){
			element2.innerHTML = '<p onClick = "redirectIndex()" style="margin-left:3%; margin-top:5%; color:black; text-decoration: underline;">Retour</p>';
	}


	function redirectIndex() {	
         var ref = window.open('index.html', '_self', 'location=yes');
	}
	function redirectWebSite() {	
         var ref = window.open('http://www.kyousushi.com', '_system', 'location=yes');
	}
	function redirectKyouFB() {	
         var ref = window.open('https://www.facebook.com/KyouSushi', '_system', 'location=yes');
	}	
	
	var map;
$(document).ready(function(){
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
			title: 'You are here.',
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
    map.addMarker({
      lat: 49.119327,
      lng: 6.17101,
      title: 'Kyou sushi Thionville',
      infoWindow: {
        content: 'Restaurant kyou sushi de Metz Adresse : 6 Rue du Moyen Pont, 57000 Metz </ br>Téléphone : 03 87 66 83 52 </ br>Horaires : Ouvert 7/7j de 12:00 à 15:00 et de 18:30 à 23:00'}
    });
});