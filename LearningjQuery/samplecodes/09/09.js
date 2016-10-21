// This is the custom JavaScript file referenced by index.html. You will notice
// that this file is currently empty. By adding code to this empty file and
// then viewing index.html in a browser, you can experiment with the example
// page or follow along with the examples in the book.
//
// See README.txt for more information.
(function($) {
  $.expr.setFilters.containsexactly = function(elements, argument, not) {
    var resultElements = [];
    for (var i = 0; i < elements.length; i++) {
      //var test = ($(elements[i]).text() == argument);
      var test = false;
      $(elements[i]).children().each(function() {
        if ($(this).text() == argument) {
            test = true;
        } 
      });
      if ((!not && test) || (not && !test)) {
        resultElements.push(elements[i]);
      }
    }
    return resultElements;
  };
})(jQuery);

$(document).ready(function() {
    var $news = $('#news');
    function stripe() {
        $news.find('tr.alt').removeClass('alt');
        $news.find('tr.alt-2').removeClass('alt-2');
        $news.find('tbody').each(function() {
            $(this).children(':visible').has('td').each(function(index, element){
                if (index % 3 == 1) {
                    $(element).addClass('alt');
                } else if (index % 3 == 2) {
                    $(element).addClass('alt-2');
                }
            });
        });
    }
    stripe();
    
    $('#topics a').click(function(event) {
        event.preventDefault();
        var topic = $(this).text();

        $('#topics a.selected').removeClass('selected');
        $(this).addClass('selected');
        
        $('#news').find('tr').show();
        if (topic != 'All') {
          $('#news').find('tr:has(td)').not(':containsexactly(' + topic + ')').hide();
        }
        stripe();
    });
    
});