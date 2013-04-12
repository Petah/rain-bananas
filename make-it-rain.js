function makeBanana() {
    var banana = $('<i class="banana">')
        .css('left', Math.random() * $(window).width())
        .appendTo('body');
    setTimeout(function() {
        banana.addClass('banana-fall');
    }, 100);
    setTimeout(function() {
        banana.remove();
    }, 4000);
    setTimeout(makeBanana, Math.random() * 400);
}

$(function() {
    $('html').on('click', function() {
        $('body').addClass('raining');
        setTimeout(makeBanana, Math.random() * 400);
    });
});
