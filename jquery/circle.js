/* global $ */
$(() => {
    let circles = [];
    let growTimer;

    function clean() {
        circles.forEach(c => {
            pop.call(c);
        });
        clearInterval(growTimer);
    }
    
    function pop(e) {
        circles.splice(circles.indexOf(c => {
            return c.id==this.id;
        }), 1);
        $('#'+this.id).remove();
        if(e) e.stopImmediatePropagation();
    }

    function hoverIn() {
        $(this).css('opacity', '0.5');
    }

    function hoverOut() {
        $(this).css('opacity', '1');
    }

    function getRandom(max) {
        return Math.random() * max;
    }

    function addCircle() {
        do{
            var left = getRandom(screen.availWidth - $('#width').val());
            var top = getRandom(screen.availHeight - $('#width').val());
        }while(circles.some(c => c.css.left.split('px')[0]==left && c.css.top.split('px')[0]==top));

        do{
            var color = Math.floor(getRandom(16777215)).toString(16);
        }while(circles.some(c => c.id==color));

        return {
            'id': color,
            'click': pop,
            'mouseover': hoverIn,
            'mouseleave': hoverOut,
            'css': {
                'position': 'fixed',
                'width': $('#width').val()+'px',
                'height': $('#width').val()+'px',
                'left': left+'px',
                'top': top+'px',
                'background-color': '#'+color,
                'border-radius': '50%'
            }
        };
    }

    $('input[type="button"]').click(() => {
        clean();
        for(let i=0;i<$('#number_circles').val();i++) {
            const new_c = addCircle();
            circles.push(new_c);
            $('#circle_area').append($('<div>', new_c));
        }
        growTimer = setInterval(grow, $('#grow_rate').val());
    });

    function grow() {
        circles.forEach(c => {
            if($('#'+c.id).css('width')){
                let width = Number($('#'+c.id).css('width').split('px')[0])+Number($('#growth_amount').val());
                $('#'+c.id).css('width', width+'px');
                $('#'+c.id).css('height', width+'px');
            }
        });
    }
});