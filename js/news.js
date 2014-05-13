$(document).ready(function() {

	var RSS = "https://www.facebook.com/feeds/page.php?id=134381556628058&format=rss20";
	/* var RSS = "http://feedproxy.google.com/RaymondCamdensColdfusionBlog"; */
	var entries = [];

/* $.ajax({
            url: 'https://ajax.googleapis.com/ajax/services/feed/load?v=1.0&num=10&q=' + encodeURI(RSS),
            dataType: 'json',
            beforeSend: function () {
              console.log('beforeSend');
            },
            success: function (data) {
				console.log('success');
			},
            error: function () {
               console.log('error');
            },
            complete: function () {
              console.log('complete');
            }
         }); */
	 $.get(RSS, {}, function(res, code) {
		var xml = $(res);
		var items = xml.find("item");
		$.each(items, function(i, v) {
			entry = {
				title:$(v).find("title").text(),
				link:$(v).find("link").text(),
				description:$.trim($(v).find("description").text())
			};
			entries.push(entry);
		});
		
		var s = '';
		$.each(entries, function(i, v) {
			s += '<li><a href="#contentPage" class="contentLink" data-entryid="'+i+'">' + v.title + '</a></li>';
		});
		$("#linksList").append(s);
		$("#linksList").listview("refresh");
	});

});

	// Wait for device API libraries to load
	function init() {	
		// document.addEventListener("deviceready", onDeviceReady, false);
	}

	var options = { timeout: 31000, enableHighAccuracy: true, maximumAge: 90000 };
    function onDeviceReady() {
		if(device.model.indexOf('iPad') >= 0) {
			var d = document.getElementById('footer');
			d.className = d.className + " ui-footer-fixed";
		}
    }
	
