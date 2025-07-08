var path = "video";
var regex = /\d+/;
var currentPage = null;
var timeout = null;

$(document).on('keyup',function(e) {
    var newPath = ""
    if (path === "video") {
        newPath = "0";
        clearTimeout(timeout);
        timeout = setTimeout(function() {
            showPage("video");
        }, 1000*30);
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