// 상위로 올리는 스크롤 스크립트

$(document).ready(function () {

    // declare variable
    var scrollTop = $(".scrollTop");

    $(window).scroll(function () {
        var topPos = $(this).scrollTop();
        if (topPos > 100) {
            $(scrollTop).css("opacity", "0.5");

        } else {
            $(scrollTop).css("opacity", "0");
        }
    }); // scroll END
    //Click event to scroll to top
    $(scrollTop).click(function () {
        $('html, body').animate({
            scrollTop: 0
        }, 100);
        return false;
    });
    // var h1 = $("#h1").position();

    // $('.link1').click(function () {
    //     $('html, body').animate({
    //         scrollTop: h1.top
    //     }, 500);
    //     return false;
    // });
});



