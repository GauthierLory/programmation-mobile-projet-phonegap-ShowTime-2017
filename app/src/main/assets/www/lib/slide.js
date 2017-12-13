$("#carouselExampleIndicators").on("swiperight", function(event) {
    $(this).carousel('prev');
});
$("#carouselExampleIndicators").on("swipeleft", function(event) {
    $(this).carousel('next');
});