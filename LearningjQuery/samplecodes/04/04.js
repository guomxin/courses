// This is the custom JavaScript file referenced by index.html. You will notice
// that this file is currently empty. By adding code to this empty file and
// then viewing index.html in a browser, you can experiment with the example
// page or follow along with the examples in the book.
//
// See README.txt for more information.
$(document).ready(function() {
    $('#container').fadeIn('slow'); 
    
    var initialBgColor = $('p').css("backgroundColor");
    $('p').mouseover(function(event) {
       $(this).css("backgroundColor", "yellow");
    });
    $('p').mouseout(function(event) {
       $(this).css("backgroundColor", initialBgColor); 
    });
    
    $('h2').click(function() {
       $(this).animate({opacity:0.25, marginLeft: '20px'}, {
           duration:'slow',
           complete: function() {
               $('div.speech').fadeTo('slow', 0.5);
           }
       }); 
    });
    
    
    $switcher = $('#switcher');
    $switcher.css('position', 'relative');
    var curLeft = parseInt($switcher.offset().left);
    var curTop = parseInt($switcher.offset().top);
    $(document).keyup(function(event) {
        console.log("before: " + event.which + "," + curLeft + "," + curTop);
        
        switch (event.which) {
            case 37: // left
                curLeft -= 20;
                console.log("After: " + event.which + "," + curLeft + "," + curTop);
                $switcher.animate({left: curLeft}, 'slow');
                break;
            case 38: // up
                curTop -= 20;
                $switcher.animate({'top': curTop}, 'slow');
                break;
            case 39: // right
                curLeft += 20;
                $switcher.animate({left: curLeft}, 'slow');
                break;
            case 40: // down
                curTop += 20;
                $switcher.animate({'top': curTop}, 'slow');
                break;
            default:
        }
    });
});