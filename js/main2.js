/*var viewPortTag=document.createElement('meta');
viewPortTag.id="viewport";
viewPortTag.name = "viewport";
viewPortTag.content = "width=320; content=user-scalable=no, initial-scale=1, maximum-scale=1, minimum-scale=1, target-densitydpi=device-dpi;";
document.getElementsByTagName('head')[0].appendChild(viewPortTag);
*/

// Wait for device API libraries to load
	function init() {	
    document.addEventListener("deviceready", onDeviceReady, false);}

    // device APIs are available
	var options = { timeout: 31000, enableHighAccuracy: true, maximumAge: 90000 };
	var devicePlatform = device.platform;
    function onDeviceReady() {
        navigator.geolocation.getCurrentPosition(onSuccess, onError, options);
		
		// if(device.platform == 'iOS'){ initPushwooshiOS();}
		// if(device.platform == 'Android'){ initPushwooshAndroid();}
    }
	
    // onSuccess Geolocation
    function onSuccess(position) {
        var isplusprocheMetz = document.getElementById('isplusprocheMetz');
        var isplusprocheMetz2 = document.getElementById('isplusprocheMetz2');
		var isplusprocheThionville = document.getElementById('isplusprocheThionville');
		var isplusprocheThionville2 = document.getElementById('isplusprocheThionville2');
		
		
		var distTh = Distance(position.coords.latitude , position.coords.longitude, 49.3667, 6.1667);
		var distMe = Distance(position.coords.latitude , position.coords.longitude, 49.119327,  6.17101);
		
		
		if(parseFloat(distMe) > parseFloat(distTh)){
			isplusprocheThionville.style.display = 'block';
			isplusprocheThionville2.style.display = 'block';
			
			isplusprocheMetz.style.display = 'none';
			isplusprocheMetz2.style.display = 'none';
		}else{
			isplusprocheMetz.style.display = 'block';
			isplusprocheMetz2.style.display = 'block';
			
			isplusprocheThionville.style.display = 'none';
			isplusprocheThionville2.style.display = 'none';
		}

}

    // onError Callback receives a PositionError object
    function onError(error) {
        alert('message: Les données du GPS doivent être accessibles pour que l\' application fonctionne correctement. Veuillez activer le GPS.\n');
            navigator.app.exitApp();}
	
		var LatA = 41.3879169;
		var LngB = 2.1699187;

		var LatB = 40.4167413;
		var LngB = -3.7032498;

		Distancia = Dist(LatA, LngA, LatB, LngB);  

		function Distance(LatA, LngA, LatB, LngB)
		  {
		  rad = function(x) {return x*Math.PI/180;}

		  var R     = 6371;                         
		  var dLat  = rad( LatB - LatA );
		  var dLong = rad( LngB - LngA );

		  var a = Math.sin(dLat/2) * Math.sin(dLat/2) + Math.cos(rad(LatA)) * Math.cos(rad(LatB)) * Math.sin(dLong/2) * Math.sin(dLong/2);
		  var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
		  var d = R * c;

		  return d.toFixed(1);     
		}