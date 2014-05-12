	function redirectKyouMetz() {	
         var ref = window.open('pageMetz.html', '_self', 'location=yes');
	}
	function redirectKyouThionville() {	
         var ref = window.open('pageThionville.html', '_self', 'location=yes');
	}
	function redirectKyouFB() {	
         var ref = window.open('https://www.facebook.com/KyouSushi', '_system', 'location=yes');
	}
	function refreshPage() {		
         document.location = "index.html";
	}
	
	// pushwoosh
	function initPushwooshAndroid(){
    var pushNotification = window.plugins.pushNotification;
    pushNotification.onDeviceReady();
 
    pushNotification.registerDevice({ projectid: "222157888865", appid : "C125D-81938" },
        function(status) {
            var pushToken = status;
            console.warn('push token: ' + pushToken);
        },
        function(status) {
            console.warn(JSON.stringify(['failed to register 1', status]));
        }
    );
 
    document.addEventListener('push-notification', function(event) {
        var title = event.notification.title;
            var userData = event.notification.userdata;
                                 
            if(typeof(userData) != "undefined") {
            console.warn('user data: ' + JSON.stringify(userData));
        }
                                     
        navigator.notification.alert(title);
    });
		}
	function initPushwooshiOS(){
	function initPushwoosh() {
    var pushNotification = window.plugins.pushNotification;
    pushNotification.onDeviceReady();
     
    pushNotification.registerDevice({alert:true, badge:true, sound:true, pw_appid:"C125D-81938", appname:"Kyou"},
        function(status) {
            var deviceToken = status['deviceToken'];
            console.warn('registerDevice: ' + deviceToken);
        },
        function(status) {
            console.warn('failed to register : ' + JSON.stringify(status));
            navigator.notification.alert(JSON.stringify(['failed to register ', status]));
        }
    );
     
    pushNotification.setApplicationIconBadgeNumber(0);
     
    document.addEventListener('push-notification', function(event) {
        var notification = event.notification;
        //navigator.notification.alert(notification.aps.alert);
		navigator.notification.alert(notification.aps.alert, alertCallback, "Notification", "OK") ;
        pushNotification.setApplicationIconBadgeNumber(0);
    });
}
	}
	
	function alertCallback(){
	
	}


			// Call this to register for push notifications and retreive a deviceToken
			PushNotification.prototype.registerDevice = function(config, success, fail) {
				cordova.exec(success, fail, "PushNotification", "registerDevice", config ? [config] : []);
			};
			 
			// Call this to set tags for the device
			PushNotification.prototype.setTags = function(config, success, fail) {
				cordova.exec(success, fail, "PushNotification", "setTags", config ? [config] : []);
			};
			 
			//Unregister device from push notifications
			PushNotification.prototype.unregisterDevice = function(success, fail) {
				cordova.exec(success, fail, "PushNotification", "unregisterDevice", []);
			};
			 
			//starts geo push notifications
			PushNotification.prototype.startGeoPushes = function(success, fail) {
				cordova.exec(success, fail, "PushNotification", "startGeoPushes", []);
			};
			 
			//stops geo push notifications
			PushNotification.prototype.stopGeoPushes = function(success, fail) {
				cordova.exec(success, fail, "PushNotification", "stopGeoPushes", []);
			};
			 
			//sets multi notification mode on
			PushNotification.prototype.setMultiNotificationMode = function(success, fail) {
				cordova.exec(success, fail, "PushNotification", "setMultiNotificationMode", []);
			};
			 
			//sets single notification mode
			PushNotification.prototype.setSingleNotificationMode = function(success, fail) {
				cordova.exec(success, fail, "PushNotification", "setSingleNotificationMode", []);
			};
			 
			//type: 0 default, 1 no sound, 2 always
			PushNotification.prototype.setSoundType = function(type, success, fail) {
				cordova.exec(success, fail, "PushNotification", "setSoundType", [type]);
			}; 
			 
			//type: 0 default, 1 no vibration, 2 always
			PushNotification.prototype.setVibrateType = function(type, success, fail) {
				cordova.exec(success, fail, "PushNotification", "setVibrateType", [type]);
			}; 