var getPubDate = function(ladate)
	{
		var d = new Date(ladate);
		var day = d.getDate();
        var month = d.getMonth() + 1;
        var year = d.getFullYear();
		
		if (day < 10) {
            day = "0" + day;
        }
        if (month < 10) {
            month = "0" + month;
        }
        var date = day + "/" + month + "/" + year;
		
		return date;
	}


$(document).ready(function() {

	//RSS url
	/* var RSS = "http://feedproxy.google.com/RaymondCamdensColdfusionBlog"; */
	var RSS = "https://www.facebook.com/feeds/page.php?id=134381556628058&format=rss20";
	//Stores entries
	var entries = [];
	var selectedEntry = "";

	//listen for detail links
	/* $(".contentLink").on("click", function() {
		selectedEntry = $(this).data("entryid");
		alert(selectedEntry)
	}); */

	//Listen for main page
	$("#mainPage").on("pageinit", function() {

		$.get(RSS, {}, function(res, code) {
			var xml = $(res);
			var items = xml.find("item");
			$.each(items, function(i, v) {
				entry = {
				title:$(v).find("title").text(),
				link:$(v).find("link").text(),
				description:$.trim($(v).find("description").text()),
				pubDate:$(v).find("pubDate").text()
				};
				entries.push(entry);
			});

			//now draw the list
			var s = '';
			var currendDate = '';
			$.each(entries, function(i, v) {
				var date = getPubDate(v.pubDate);
				if(currendDate != date){
					currendDate = date;
					s += '<li data-role="list-divider">'+currendDate+'</li>';
				}
				s += '<li><a href="#contentPage" class="contentLink" data-entryid="'+i+'">' + v.title + '</a></li>';
			});
			$("#linksList").html(s);
			$("#linksList").listview("refresh");
			
			$(".contentLink").on("click", function() {
				selectedEntry = $(this).data("entryid");
			});
		});

	});

	//Listen for the content page to load
	 $("#contentPage").on("pageshow", function(prepage) {
		//Set the title
		/* $("h1", this).text(entries[selectedEntry].title); */
		var contentHTML = "";
		contentHTML += '<h2>'+entries[selectedEntry].title+'</h2>';
		contentHTML += entries[selectedEntry].description;
		/* contentHTML += '<p/><a href="'+entries[selectedEntry].link + '">Read Entry on Site</a>'; */
	
		
		var date = getPubDate(entries[selectedEntry].pubDate);
		contentHTML += "<br/><br/>"+date;
		
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
	
	
	
