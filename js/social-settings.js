
(function($){ 'use strict';
	
	// Instafeed Active
	var feed = new Instafeed({
        get: 'user',
        clientId: 'b84a5448343245f88dd43e62ba0cc9a8',
        accessToken: '4793566378.b84a544.7bc3d435c78d43beb7766d0387395ddd',
        userId: '4793566378',
        limit: 6,
        template: "<a href='{{link}}' target='_blank'><img src='{{image}}' /></a>"
	});
	feed.run();

	// Flickr feed
	$('#flickr-feed').jflickrfeed({
        limit: 8,
        qstrings: {
            id: '152704974@N02'
        },
        itemTemplate: "<div class='feed-media'>"+
                        "<a class='flickr-light' href='{{image}}' title='{{title}}'>" +
                            "<img src='{{image_s}}' alt='{{title}}' />" +
                        "</a>" +
                      "</li>"
    }, function(data) {
        $('.flickr-light').venobox({
            numeratio: true,
            infinigall: true
        }); 
    });

    // Twitter feed
    function handleTweets(tweets) {
        
        var x = tweets.length,
        n = 0,
        element = document.getElementById('twitter-feed'),
        html = "<div class='twitter-carousel owl-carousel'>";
        while (n < x) {
            html += "<div class='tweet-single'>" + tweets[n] + '</div>';
            n++;
        }
        html += '</div>';
        
        element.innerHTML = html;
           
        /* Tweets attached to owl-carousel */
        $('.twitter-carousel').owlCarousel({
            loop: true,
            autoplay: true,
            smartSpeed: 1000,
            dots: false,
            items: 1
        });
    }

    if( $('#twitter-feed').length ) 
    {   
        var config_feed = {
        "profile": {"screenName": 'wowthemez'},
          "domId": 'twitter-feed',
          "maxTweets": 3,
          "enableLinks": true,
          "showUser": true,
          "showTime": true,
          "dateFunction": '',
          "showRetweet": false,
          "customCallback": handleTweets,
          "showInteraction": false
        };
        twitterFetcher.fetch(config_feed);
    }

})(jQuery);
