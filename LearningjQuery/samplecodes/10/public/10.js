// This is the custom JavaScript file referenced by index.html. You will notice
// that this file is currently empty. By adding code to this empty file and
// then viewing index.html in a browser, you can experiment with the example
// page or follow along with the examples in the book.
//
// See README.txt for more information.
$(document).ready(function() {
    var pageNum = 1;
    $('#more-photos').click(function(event) {
        event.preventDefault();
        var $link = $(this);
        var url = $link.attr('href');
        if (url) {
            $.get(url, function(data) {
                $('#gallery').append(data);
            });
            pageNum++;
            if (pageNum < 20) {
                $link.attr('href', 'pages/' + pageNum + '.html');
            }
            else {
                $link.remove();
            }
        }
    });
    
    $('#gallery').on('mouseenter mouseleave', 'div.photo', function(event) {
        var $details = $(this).find('.details');
        if (event.type == 'mouseenter') {
            $details.fadeTo('fast', 0.7);
        } else if (event.type == 'mouseleave') {
            $details.fadeOut('fast');
        }
    });
});