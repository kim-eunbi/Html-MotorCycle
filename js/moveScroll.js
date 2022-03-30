// 스크롤하면 박스 따라옴

$(document).ready(function () {
    const currentPosition = parseInt($(".quickmenu").css("top"));
    $(window).scroll(function () {
        var position = $(window).scrollTop();
        $(".quickmenu").stop().animate({ "top": position + currentPosition + "px" }, 1000);
    });
});
