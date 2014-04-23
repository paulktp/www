// Wait for device API libraries to load
	function init() {
    document.addEventListener("deviceready", onDeviceReady, false);}

    // device APIs are available
	var options = { timeout: 31000, enableHighAccuracy: true, maximumAge: 90000 };
	var devicePlatform = device.platform;
    function onDeviceReady() {
        navigator.geolocation.getCurrentPosition(onSuccess, onError, options);
		
		if(device.platform == 'iOS'){ initPushwooshiOS();}
		if(device.platform == 'Android'){ initPushwooshAndroid();}
    }
	
    // onSuccess Geolocation
    function onSuccess(position) {
        var element1 = document.getElementById('myDiv1');
		var element2 = document.getElementById('myDiv2');
		
		var distTh = Distance(position.coords.latitude , position.coords.longitude, 49.3667, 6.1667);
		var distMe = Distance(position.coords.latitude , position.coords.longitude, 49.119327,  6.17101);
	if(device.model.indexOf('iPad') == -1){
		if(parseFloat(distMe) > parseFloat(distTh)){
			element1.innerHTML = '<p style="text-align:center; margin-top:10%;color:e2b500">Vous �tes plus proche du </p>';
			element1.innerHTML += '<p style="text-align:center;">Restaurant de Thionville<br />Distance : ' + distTh + 'km <br /><br />Cliquer ici pour plus d\'information</p>';
			element2.innerHTML = '<p style="text-align:center; margin-top:15%;">Restaurant de Metz<br />Distance : ' + distMe + 'km <br /><br />Cliquer ici pour plus d\'information</p>';
			element1.style.backgroundColor = "white";
			element2.style.backgroundColor = "white";
			}else{ 
			element2.innerHTML = '<p style="text-align:center; margin-top:10%;color:e2b500">Vous �tes plus proche du </p>';
			element2.innerHTML += '<p style="text-align:center;">Restaurant de Metz<br />Distance : ' + distMe + 'km <br /><br />Cliquer ici pour plus d\'information</p>';				
			element1.innerHTML = '<p style="text-align:center; margin-top:15%">Restaurant de Thionville<br />Distance : ' + distTh + 'km <br /><br />Cliquer ici pour plus d\'information</p>';
			element2.style.backgroundColor = "white";
			element1.style.backgroundColor = "white";}
	}else{
		if(parseFloat(distMe) > parseFloat(distTh)){
			element1.innerHTML = '<p style="text-align:center; margin-top:10%;color:e2b500; font-size:2em">Vous �tes plus proche du </p>';
			element1.innerHTML += '<p style="text-align:center; font-size:2em">Restaurant de Thionville<br />Distance : ' + distTh + 'km <br /><br />Cliquer ici pour plus d\'information</p>';
			element2.innerHTML = '<p style="text-align:center; margin-top:15%; font-size:2em">Restaurant de Metz<br />Distance : ' + distMe + 'km <br /><br />Cliquer ici pour plus d\'information</p>';
			element1.style.backgroundColor = "white";
			element2.style.backgroundColor = "white";
			}else{ 
			element2.innerHTML = '<p style="text-align:center; margin-top:10%;color:e2b500; font-size:2em">Vous �tes plus proche du </p>';
			element2.innerHTML += '<p style="text-align:center; font-size:2em">Restaurant de Metz<br />Distance : ' + distMe + 'km <br /><br />Cliquer ici pour plus d\'information</p>';				
			element1.innerHTML = '<p style="text-align:center; margin-top:15%; font-size:2em">Restaurant de Thionville<br />Distance : ' + distTh + 'km <br /><br />Cliquer ici pour plus d\'information</p>';
			element2.style.backgroundColor = "white";
			element1.style.backgroundColor = "white";}
	
	}
}
	function getLatitude(position){
		return position.coords.latitude;
	}
	
	function getLongitude(position) {
		return position.coords.longitude;
	}

    // onError Callback receives a PositionError object
    function onError(error) {
        alert('message: Les donn�es du GPS doivent �tre accessibles pour que l\' application fonctionne correctement. Veuillez activer le GPS.\n');}
	
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