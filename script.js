window.addEventListener("load", function () {
    elemekElerese1();
    elemekElerese2();
    elemekElerese3();
    elemekElerese4();
});

function elemekElerese1() {
    const ELEM=document.querySelectorAll("section h2")[0]
    console.log(ELEM.innerHTML)
}
function elemekElerese2() {
    const ELEM=document.getElementById("ide")
    ELEM.innerHTML += "<P>Jó reggelt!</p>"
}
function elemekElerese3() {
    const ELEM=document.querySelectorAll("#ide")[0]
    ELEM.innerHTML += "<P>Jó reggelt!</p>"
}

function elemekElerese4(){
    const ELEM=document.getElementsByClassName("lista")
    let txt = "<ul>"
    for (let index = 0; index < 5; index++) {
        txt += "<li>" + Math.random(10-30)+10 + "</li>"
    }
    txt = "</ul>"
    ELEM.innerHTML += txt
}