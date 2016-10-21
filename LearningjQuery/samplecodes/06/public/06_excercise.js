$(document).ready(function() {
   $('#letter-b a').click(function(event) {
    event.preventDefault();
    $.getJSON('http://localhost:3000/db', function(data) {
      
      $('#dictionary').text(data);
    }).fail(function(jqXHR) {
        $('#dictionary')
.html('An error occurred: ' + jqXHR.status)
.append(jqXHR.responseText);
    });
  });

    $('#letter-c a').click(function(event) {
    event.preventDefault();
    $.getScript('c.js');
  });
    
    
    
});