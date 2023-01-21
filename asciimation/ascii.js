window.onload = function(){
    "use strict";

    document.getElementById("animation").onchange = () => {
        /* global ANIMATIONS */
        document.getElementById("text-area").value = ANIMATIONS[document.getElementById("animation").value];
    };

    let animation_play;
    const separator = '=====\n';
    let speed = 250;
    let counter = 0;
    let is_played = false;
    let animation_frames;
    let font_size = 12;
    document.getElementById("text-area").style.fontSize = font_size + 'pt';

    document.getElementById("start").onclick = () => {
        document.getElementById("start").disabled = true;
        document.getElementById("stop").disabled = false;
        playAnimation();
    };

    function playAnimation() {
        if(!is_played) animation_frames = document.getElementById("text-area").value.split(separator);
        is_played = true;
        animation_play = setInterval(() => {
            document.getElementById("text-area").value = animation_frames[counter++];
            if(counter >= animation_frames.length) counter = 0;
        }, speed);
    }

    function stopAnimation(reset = true) {
        clearInterval(animation_play);
        if(reset) {
            counter = 0;
            is_played = false;
        }
    }

    document.getElementById("stop").onclick = () => {
        stopAnimation();
        document.getElementById("stop").disabled = true;
        document.getElementById("start").disabled = false;
        document.getElementById("text-area").value = animation_frames.join(separator);
    };

    document.getElementById("turbo").onchange = () => {
        speed = document.getElementById("turbo").checked?50:250;
        if(is_played) {
            stopAnimation(false);
            playAnimation();
        }
    };

    document.getElementById("fontsize").onchange = () => {
        font_size = document.getElementById("fontsize").value;
        document.getElementById("text-area").style.fontSize = font_size + 'pt';
    };
};