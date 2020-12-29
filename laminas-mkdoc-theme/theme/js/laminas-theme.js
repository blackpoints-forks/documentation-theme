$(function () {
    // sidebar - scroll to active navigation chapter (if not visible)
    if (
        $(".sidebar .subnavigation__list-item--active").length &&
        $(".sidebar .subnavigation__list-item--active").closest(
            "ul.subnavigation__list"
        ).closest("li").length
    ) {
        var sidebarHeight = $(".sidebar").height();
        var sidebarTopPosition = $(".sidebar").offset().top;
        var activeMenuTopPosition = $(
            ".sidebar .subnavigation__list-item--active"
        )
            .closest("ul.subnavigation__list")
            .closest("li")
            .offset().top;
        if (activeMenuTopPosition > sidebarHeight + sidebarTopPosition) {
            $(".sidebar").scrollTop(activeMenuTopPosition - sidebarTopPosition);
        }
    }
    // sidebar and header position
    setSidebarAndTocPosition();
    $(window).scroll(function () {
        stickyHeader();
        setSidebarAndTocPosition();
    });
    $(window).resize(function () {
        setSidebarAndTocPosition();
    });
});

/**
 * Calculate position for sidebar and index
 */
function setSidebarAndTocPosition() {
    // top position
    var mainPositionTop = $("[role=main]").offset().top - $(window).scrollTop();
    var headerHeight = $(".header").innerHeight();
    mainPositionTop =
        mainPositionTop < headerHeight ? headerHeight : mainPositionTop; // min value = headerHeight
    $(".sidebar, .toc__container").css("top", mainPositionTop);
    // bottom position
    var footerPositionTop = $(".footer").offset().top - $(window).scrollTop();
    var windowHeight = $(window).height();
    var sidebarPositionBottom = windowHeight - footerPositionTop;
    sidebarPositionBottom =
        sidebarPositionBottom < 0 ? 0 : sidebarPositionBottom; // min value = 0
    $(".sidebar").css("bottom", sidebarPositionBottom);
    // right position for toc
    var tocRightPosition =
    (parseInt($("[role=main] > .container").css("margin-left")) +
        parseInt($(".content").css("margin-left"))) -
        $(".toc__container").width();
    $(".toc__container").css("right", tocRightPosition);
}

/**
 * Sticky header
 */
function stickyHeader() {
    var headerPositionTop = $(".header").offset().top;
    if ($(window).scrollTop() >= $(".navbar").innerHeight()) {
        $(".header").addClass("sticky");
        $('[role="main"]').addClass("padding-sticky");
    } else {
        $(".header").removeClass("sticky");
        $('[role="main"]').removeClass("padding-sticky");
    }
}
