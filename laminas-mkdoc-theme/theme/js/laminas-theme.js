$(function () {
    setSidebarAndIndexPosition();
    $(window).scroll(function () {
        stickyHeader();
        setSidebarAndIndexPosition();
    });
    $(window).resize(function () {
        setSidebarAndIndexPosition();
    });
});
/**
 * calculate position for sidebar and index
 */
function setSidebarAndIndexPosition() {
    // top position
    var mainPositionTop =
        $("[role=main]").offset().top - $(window).scrollTop();
    var headerHeight = $('.header').innerHeight();
    mainPositionTop = mainPositionTop < headerHeight ? headerHeight : mainPositionTop; // min value = headerHeight
    $(".sidebar, .index__container").css("top", mainPositionTop);
    // bottom position
    var footerPositionTop =
        $(".footer").offset().top - $(window).scrollTop();
    var windowHeight = $(window).height();
    var sidebarPositionBottom = windowHeight - footerPositionTop;
    sidebarPositionBottom = sidebarPositionBottom < 0 ? 0 :  sidebarPositionBottom; // min value = 0
    $(".sidebar").css("bottom", sidebarPositionBottom);
    // right position for index
    var indexRightPosition = parseInt($(".content").css('margin-left')) - $(".index__container").width();
    $(".index__container").css("right", indexRightPosition);
 }


/**
 * Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
 */
 function stickyHeader() {
    var headerPositionTop = $('.header').offset().top;
    if ($(window).scrollTop() >= $('.navbar').innerHeight()) {
        $('.header').addClass("sticky");
        $('[role="main"]').addClass("padding-sticky");

    } else {
        $('.header').removeClass("sticky");
        $('[role="main"]').removeClass("padding-sticky");
    }
}