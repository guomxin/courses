$(document).ready(function() {
    var img_desps = ['panda', 'horse', 'cat', 'dolphin'];
    var index = 1;
    function select_image() {
        $('img').removeClass('selected');
        $('#image'+index).addClass('selected');
        $('#img-content').text(img_desps[index-1]);
    }
    select_image();
    
    $("button").click(function() {
        var button_id = $(this).attr('id');
        var img_count = $('.crop-image').length;
        if (button_id == 'prev') {
            index -= 1;
            if (index < 1) {
                index = img_count;
            }
            select_image();
        } else if (button_id == 'next') {
            index += 1;
            if (index > img_count) {
                index = 1;
            }
            select_image();
        }
    });
})