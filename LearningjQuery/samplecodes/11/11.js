// This is the custom JavaScript file referenced by index.html. You will notice
// that this file is currently empty. By adding code to this empty file and
// then viewing index.html in a browser, you can experiment with the example
// page or follow along with the examples in the book.
//
// See README.txt for more information.
$(document).ready(function() {
    $('div.member').on('mouseenter mouseleave', function(event) {
    var size = event.type == 'mouseenter' ? 85 : 75;
    var pad = event.type == 'mouseenter' ? 0 : 5;
    $(this).find('img').stop().animate({
      width: size,
      height: size,
      paddingTop: pad,
      paddingLeft: pad
    });
    });
    
    function showDetails() {
        var $member = $(this);
        if ($member.hasClass('active')) {
        return;
        }
        $('div.member.active')
        .removeClass('active')
        .children('div').fadeOut();
        $member.addClass('active');
        
        $(this).find('div').css({
        display: 'block',
        left: '-300px',
        top: 0
        }).each(function(index) {
        $(this).animate({
        left: 0,
        top: 25 * index
        },
                       {
duration: 'slow',
specialEasing: {
top: 'easeInQuart'
}});
        });
    };
    
    $('div.member').click(showDetails);
});