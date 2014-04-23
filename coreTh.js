/**
 * Directions to London
 */
var map1;
$(document).ready(function(){
  var map1 = new GMaps({
    el: '#directions_map',
    lat: 49.357571,
    lng: 6.168425999999954,
    zoom:12
  });
  GMaps.geolocate({
    success: function(position){
      map1.setCenter(position.coords.latitude, position.coords.longitude);
	  	    map1.addMarker({
			lat: position.coords.latitude,
			lng: position.coords.longitude,
			title: 'You are here.',
			infoWindow: {
			content: 'Vous �tes ici'}
		});
       map1.drawRoute({
        origin: [position.coords.latitude, position.coords.longitude],
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
    map1.addMarker({
      lat: 49.119327,
      lng: 6.17101,
      title: 'Kyou sushi Thionville',
      infoWindow: {
        content: 'Restaurant kyou sushi de Metz Adresse : 6 Rue du Moyen Pont, 57000 Metz </ br>T�l�phone : 03 87 66 83 52 </ br>Horaires : Ouvert 7/7j de 12:00 � 15:00 et de 18:30 � 23:00'}
    });
});