// This is the custom JavaScript file referenced by index.html. You will notice
// that this file is currently empty. By adding code to this empty file and
// then viewing index.html in a browser, you can experiment with the example
// page or follow along with the examples in the book.
//
// See README.txt for more information.
$(document).ready(function() {
   $('<a id="top"></a>').prependTo('body');
   $('div.chapter p').each(function() {
       var $link = $('<a href="#top">back to top</a>').click(function() {
           $(this).after('<p>You were here</p>');
       });
       $(this).after($link); 
   });
    
    $('#f-author').click(function() {
        if ($(this).html().indexOf("<b>") == -1) {
            $(this).html('<b>' + $(this).text() + '</b>');     
        } else {
            $(this).html($(this).text());
        }
    });
    
    $('div.chapter p').each(function() {
       var classValue = $(this).attr('class');
       $(this).attr({class: classValue + " inhabitants"});
    });
});