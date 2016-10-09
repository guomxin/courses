// This is the custom JavaScript file referenced by index.html. You will notice
// that this file is currently empty. By adding code to this empty file and
// then viewing index.html in a browser, you can experiment with the example
// page or follow along with the examples in the book.
//
// See README.txt for more information.
$(document).ready(function() {
    $('#selected-plays li li').addClass('special');
    $('tr td:nth-child(3)').addClass('year');
    $('tr:contains(Tragedy):eq(0)').addClass('special');
    $('li:has(a)').nextAll().addClass('afterlink');
    $('a[href$=".pdf"]').closest('ul').addClass('tragedy');
})