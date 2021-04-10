window.addEventListener("load", init);

function ID(nev) {
    return document.getElementById(nev);
}
function $(nev) {
    return document.querySelectorAll(nev);
}
var position = [];

function init() {
    for (var i = 0; i < $("img").length; i++) {
        $("img")[i].addEventListener("click", kattintasesemeny);
    }
}
function kattintasesemeny() {
    (position.push(this.src));
    console.log(position);
}
