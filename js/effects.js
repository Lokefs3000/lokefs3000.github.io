var mousepos = [0, 0];
var lmousepos = [0, 0];

function loadEffect() {
    window.addEventListener("mousemove", function(ev) {
        mousepos = [ev.clientX, ev.clientY]
    })

    mouseMover(0);
}

var mouseDiv = null;

function lerp(a, b, t) {
    return a * (1 - t) + b * t;
}

var lastTime = 0
function mouseMover(time) {
    requestAnimationFrame(mouseMover)

    var dt = (time - lastTime) / 1000.0;

    if (mouseDiv == null) {
        mouseDiv = document.getElementById("cursor_main");
    }
    else {
        lmousepos[0] = lerp(lmousepos[0], mousepos[0], dt * 10);
        lmousepos[1] = lerp(lmousepos[1], mousepos[1], dt * 10);

        mouseDiv.style.left = lmousepos[0] + "px";
        mouseDiv.style.top = lmousepos[1] + "px";
    }

    lastTime = time;
}