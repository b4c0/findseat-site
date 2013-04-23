var bd = new BrowserDetect();
    var isSafari = bd.browser === "Safari";
    var isIOS = (bd.OS === "iPhone/iPod");

function resizeMainFrame (firstLoad) {
        setTimeout(function () {
            if( isSafari && isIOS && firstLoad ){
                $("body,html").animate({scrollTop: 1}, 100);
            }
            $("#wrapper").css("height", $window.height());
        }, 250);
    }

    // Main Frame Resize
    $window.resize(function () {
        resizeMainFrame(false);
    });

    resizeMainFrame(true);