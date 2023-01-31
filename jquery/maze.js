/* global $ */
$(() => {
    let is_play = false;
    let restart = () => {
        $('#start').css('opacity', '1');
        is_play = false;
    }

    let fail = () => {
        alert('FAILED !!!');
        restart();
    }

    let success = () => {
        alert('SUCCESS !!!');
        restart();
    }

    $('#start').click(function() {
        if(!is_play) {
            $(this).css('opacity', '0.5');
            is_play = true;
        }
    });

    $('.boundary').mouseover(() => {
        if(is_play) fail();
    });

    $('#end').mouseover(() => {
        if(is_play) success();
    });

    $('#maze').mouseleave(() => {
        if(is_play) fail();
    })
});