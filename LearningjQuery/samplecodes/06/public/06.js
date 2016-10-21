// This is the custom JavaScript file referenced by index.html. You will notice
// that this file is currently empty. By adding code to this empty file and
// then viewing index.html in a browser, you can experiment with the example
// page or follow along with the examples in the book.
//
// See README.txt for more information.
$(document).ready(function() {
    $(document).ajaxError(function(event, jqXHR){
        $('#dictionary')
            .html('An error occurred: ' + jqXHR.status)
            .append(jqXHR.responseText);
    });
    
    $('#dictionary').load('exercises-content.html');
    
    $('.letter h3').mouseover(function(){
        var letter = $(this).text().toLowerCase();
        $('#dictionary').load('exercises-content.html #letter-' + letter);
    });
    
    $.getJSON('https://api.github.com/users/jquery/repos', function(data) {
        $('#dictionary').append('<hr>');
        $.each(data, function(index, entry){
             var html = ['<div>', entry.name, entry.url, '</div>'].join(' ');
            $('#dictionary').append(html);
        });
    });
});