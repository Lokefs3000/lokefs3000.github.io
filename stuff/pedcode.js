var lines = []
var isopen = false

function createLineElement(x, y, length, angle) {
    var line = document.createElement("div");
    var styles = 'border: 3px solid gray; '
               + 'width: ' + length + 'px; '
               + 'height: 0px; '
               + '-moz-transform: rotate(' + angle + 'rad); '
               + '-webkit-transform: rotate(' + angle + 'rad); '
               + '-o-transform: rotate(' + angle + 'rad); '  
               + '-ms-transform: rotate(' + angle + 'rad); '  
               + 'position: absolute; '
               + 'top: ' + y + 'px; '
               + 'left: ' + x + 'px; ';
    line.setAttribute('style', styles);  
    lines.push(line)
    line.style.zIndex = "-1";
    return line;
}

function createLine(x1, y1, x2, y2) {
    var a = x1 - x2,
        b = y1 - y2,
        c = Math.sqrt(a * a + b * b);

    var sx = (x1 + x2) / 2,
        sy = (y1 + y2) / 2;

    var x = sx - c / 2,
        y = sy;

    var alpha = Math.PI - Math.atan2(-b, a);

    return createLineElement(x, y, c, alpha);
}

function lineFromElements(a, b) {
    var a_elem = document.getElementById(a);
    var b_elem = document.getElementById(b);

    var ax = a_elem.getBoundingClientRect().x + a_elem.getBoundingClientRect().width / 2;
    var ay = a_elem.getBoundingClientRect().y + a_elem.getBoundingClientRect().height / 2;
    var bx = b_elem.getBoundingClientRect().x + b_elem.getBoundingClientRect().width / 2;
    var by = b_elem.getBoundingClientRect().y + b_elem.getBoundingClientRect().height / 2;

    document.getElementById("diagram_container").appendChild(createLine(ax, ay, bx, by))
}

function createZoomIn(id) {
    var elem = document.getElementById(id)
    var container = document.getElementById("diagram_container")

    elem.onclick = function(ev) {
        if (isopen)
            return
        isopen = true;

        var viewer = document.getElementById("viewer");
        var close = document.getElementById("close");
        container.style.filter = "blur(4px)"

        viewer.classList.remove("antiexist");
        viewer.classList.add("exist");

        close.classList.remove("antiexist");
        close.classList.add("exist");

        viewer.src = "/stuff/diagrams/" + id + ".html"
    }
}

function createLines() {
    lineFromElements("1", "3")
    lineFromElements("3", "4")
    lineFromElements("4", "5")
    lineFromElements("5", "6")
    lineFromElements("6", "7")
    lineFromElements("7", "8")
    lineFromElements("8", "9")
    lineFromElements("9", "2")

    createZoomIn("1")
    createZoomIn("2")
    createZoomIn("3")
    createZoomIn("4")
    createZoomIn("5")
    createZoomIn("6")
    createZoomIn("7")
    createZoomIn("8")
    createZoomIn("9")
}

window.onresize = function(ev) {
    for (let i = 0; i < lines.length; i++) {
        const element = lines[i];
        element.remove();
    }

    createLines();
}

function closePanel() {
    isopen = false;

    var container = document.getElementById("diagram_container")
    var viewer = document.getElementById("viewer");
    var close = document.getElementById("close");
    container.style.filter = "blur(0px)"

    viewer.classList.remove("exist");
    viewer.classList.add("antiexist");

    close.classList.remove("exist");
    close.classList.add("antiexist");
}