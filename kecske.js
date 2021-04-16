window.addEventListener("load", init);

function ID(nev) {
    return document.getElementById(nev);
}
function $(nev) {
    return document.querySelectorAll(nev);
}
var position = [];
var csonak = [];

function init() {
    for (var i = 0; i < $("img").length; i++) {
        $("img")[i].addEventListener("click", kattintasesemeny);
        //$("img")[i].addEventListener("click", csonakbaHelyez);
        $("img")[i].addEventListener("click", ovatosanCsonakbaHelyez);
    }
    $("footer > p")[0].innerHTML = "Hergár Péter, Molnár Aliz, Tóth Kristóf";
}

function kattintasesemeny() {
    (position.push(this.src, this.alt));
    console.log(position);
}

//clean code
function ovatosanCsonakbaHelyez() {
    csonakbaHelyez(this);
    ezVeszelyes();
}

function csonakbaHelyez(image) {
    image.style.display="none";
    ID("csonak").innerHTML += "<img src='" + position[0] + "' alt='" + position[1]+ "'>";
    position.shift();
    csonak.push(position[0]);
    //console.log(csonak);
    position.shift();
    //console.log(position);
}

function ezVeszelyes() {
    if(csonak.includes('kecske') && csonak.includes('farkas')) {
        alert('Vigyázz! A farkas megeszi a köcskét!!!')
    };
    if(csonak.includes('kecske') && csonak.includes('kaposzta')) {
        alert('Vigyázz! A köcske megeszi a káposztát!!!')
    }
}