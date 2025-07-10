var path = "kiosk";
var regex = /\d+/;
var currentPage = null;
var timeout = null;
var counter = 0;
var images = $(".kioskImg");

$(document).on('keyup',function(e) {
    clearTimeout(timeout);
    timeout = setTimeout(function() {
        showPage("kiosk");
    }, 1000*30);
    var newPath = ""
    if (path === "kiosk") {
        newPath = "0";
    } else {
        switch(e.key) {
            case "1":
            case "2":
            case "3":
            case "4":
            case "5":
            case "6":
            case "7":
            case "8":
            case "9":
                newPath = path + e.key;
                break;
            case "0":
                newPath = "0";
            break;
        }
    }
    currentPage = $("#page-"+newPath)[0];
    if (currentPage) {
        showPage(newPath);
    }
});

function showPage(newPath) {
        $(".page").removeClass("visible");
        path = newPath;
        $("#page-"+newPath).addClass("visible");
}

setInterval(function() {
    images.removeClass("visible");
    counter = (counter+1)%images.length;
    images.eq(counter).addClass("visible");
}, 5000);

$("#message h1").text($(window).height());