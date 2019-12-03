var signState = 0;
var fireRed = document.getElementsByClassName("off-fire-r")[0];
var fireYellow = document.getElementsByClassName("off-fire-y")[0];
var fireGreen = document.getElementsByClassName("off-fire-g")[0];

function setSignRed() {
    fireRed.className = "off-fire-r fire-red";
    fireGreen.className = "off-fire-g";
    fireYellow.className = "off-fire-y";
    setTimeout(function() { setSignGreen(); }, 7000);
}

function setSignYellow() {
    fireRed.className = "off-fire-r";
    fireGreen.className = "off-fire-g";
    fireYellow.className = "off-fire-y fire-yellow";
    setTimeout(function() { setSignRed(); }, 3000);
}

function setSignGreen() {
    fireRed.className = "off-fire-r";
    fireGreen.className = "off-fire-g fire-green";
    fireYellow.className = "off-fire-y";
    setTimeout(function() { setSignYellow(); }, 7000);
}

function startSign() {
    setSignRed();
}

startSign()