function resizeMainFrame (firstLoad) {
        setTimeout(function () {
            $("#wrapper").css("height", $(window).height());
        }, 250);
    }

    // Main Frame Resize
    $(window).resize(function () {
        resizeMainFrame(false);
    });

    resizeMainFrame(true);