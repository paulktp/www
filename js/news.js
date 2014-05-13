$(document).ready(function() {

	//RSS url
	/* var RSS = "http://feedproxy.google.com/RaymondCamdensColdfusionBlog"; */
	var RSS = "https://www.facebook.com/feeds/page.php?id=134381556628058&format=rss20";
	//Stores entries
	var entries = [];
	var selectedEntry = "";

	//listen for detail links
	$(".contentLink").live("click", function() {
		selectedEntry = $(this).data("entryid");
	});

	//Listen for main page
	$("#mainPage").live("pageinit", function() {


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

			//now draw the list
			var s = '';
			$.each(entries, function(i, v) {
				s += '<li><a href="#contentPage" class="contentLink" data-entryid="'+i+'">' + v.title + '</a></li>';
			});
			$("#linksList").append(s);
			$("#linksList").listview("refresh");
		});

	});

	//Listen for the content page to load
	$("#contentPage").live("pageshow", function(prepage) {
		//Set the title
		$("h1", this).text(entries[selectedEntry].title);
		var contentHTML = "";
		contentHTML += entries[selectedEntry].description;
		contentHTML += '<p/><a href="'+entries[selectedEntry].link + '">Read Entry on Site</a>';
		$("#entryText",this).html(contentHTML);
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
	
