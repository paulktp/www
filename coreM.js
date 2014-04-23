var map;
$(document).ready(function(){
  var map = new GMaps({
    el: '#directions_map',
    lat: 49.119666,
    lng: 6.176905000000033,
    zoom: 12
  });

    success: function(position){
      map.setCenter(getLatitude(position), getLongitude(position));
	    map.addMarker({
			lat: getLatitude(position),
			lng: getLongitude(position),
			title: 'You are here.',
			infoWindow: {
			content: 'Vous êtes ici'}
		});
       map.drawRoute({
        origin: [getLatitude(position), getLongitude(position)],
        destination: [49.119327, 6.17101],
        travelMode: 'driving',
        strokeColor: '#000',
        strokeOpacity: 0.6,
        strokeWeight: 6
      });
    },
 
    map.addMarker({
      lat: 49.119327,
      lng: 6.17101,
      title: 'Kyou sushi Metz',
      infoWindow: {
        content: 'Restaurant kyou sushi de Metz Adresse : 6 Rue du Moyen Pont, 57000 Metz </ br>Téléphone : 03 87 66 83 52 </ br>Horaires : Ouvert 7/7j de 12:00 à 15:00 et de 18:30 à 23:00'}
    });
});