var last = null;

function loadMain() {
    document.addEventListener("contextmenu", (e) => {e.preventDefault()});

    loadPage(document.getElementById("home"));

    connectLoad("home");
    connectLoad("about");
    connectLoad("retro1");
}

function connectLoad(id) {
    var doc = document.getElementById(id);
    doc.addEventListener("mousedown", function(ev) {
        loadPage(doc);
    });
}

function loadPage(doc) {
    if (last != null)
        last.classList.remove("menuoption_sel");
    doc.classList.add("menuoption_sel");

    document.getElementById("pageframe").src = "sub/" + doc.id + ".html";

    last = doc;
}