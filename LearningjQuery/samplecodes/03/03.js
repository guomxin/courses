// This is the custom JavaScript file referenced by index.html. You will notice
// that this file is currently empty. By adding code to this empty file and
// then viewing index.html in a browser, you can experiment with the example
// page or follow along with the examples in the book.
//
// See README.txt for more information.
$(document).ready(function(){
    $("div.author").click(function(){
       $(this).addClass("selected"); 
    });
    
    $("h3.chapter-title").dblclick(function(){
        $("#chapter-1 > p").toggleClass("hidden");
    });
    
    var setBodyClass = function(className) {
        $('body').removeClass().addClass(className);
    };
    var curStyleIndex = 0;
    var styles = ["default", "narrow", "large"];
    $(document).keyup(function(event) {
        if (event.which == 39) {
            curStyleIndex += 1;
            if (curStyleIndex == 3) curStyleIndex = 0;
            setBodyClass(styles[curStyleIndex]);
        }
    });
    
    $(document).mousemove(function(event) {
        // console.log("X:" + event.pageX + ", Y:" + event.pageY);
    });
    
    var curObj = null;
    $(document).on('mousedown', 'p', function(event) {
        $(this).addClass('hidden'); 
        curObj = $(this);
        // console.log("mousedown" + $(this));
    });
    $(document).on('mouseup', function(event) {
        curObj.removeClass('hidden');
        // console.log("mouseup" + $(this));
    });
})