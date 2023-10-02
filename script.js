$(document).ready(function () {
    console.log('funfa!')
    $('.overlay,.modal_item_header_close').click(function () {
        $('.overlay').fadeOut();
        $('.modal').fadeOut();
        $('.modal_item').slideUp();
        return false;
    });


$('.item, .new-items, .new-items2, .item-mobile ').click(function () {
console.log('funciona')
    $('.overlay').fadeIn();
    $('.modal').fadeIn();
    $('.modal_item:eq(' + $(this).index() + ')').slideDown();
    return false;
});

});


