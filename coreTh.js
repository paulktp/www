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
      map.setCenter(position.coords.latitude, position.coords.longitude);
	  	    map.addMarker({
			lat: position.coords.latitude,
			lng: position.coords.longitude,
			title: 'You are here.',
			infoWindow: {
			content: 'Vous êtes ici'}
		});
       map.drawRoute({
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
    map.addMarker({
      lat: 49.119327,
      lng: 6.17101,
      title: 'Kyou sushi Thionville',
      infoWindow: {
        content: 'Restaurant kyou sushi de Metz Adresse : 6 Rue du Moyen Pont, 57000 Metz </ br>Téléphone : 03 87 66 83 52 </ br>Horaires : Ouvert 7/7j de 12:00 à 15:00 et de 18:30 à 23:00'}
    });
});