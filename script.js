window.addEventListener("load", function () {
  elemekElerese1();
  elemekElerese2();
  elemekElerese3();
  elemekElerese4();
  elemekFormazasa1();
  esemenykezeles1();
  esemenykezelo();
  esemenykezeles2();
});

function elemekElerese1() {
  const ELEM = document.querySelectorAll("section h2")[0];
  console.log(ELEM.innerHTML);
}
function elemekElerese2() {
  const ELEM = document.getElementById("ide");
  ELEM.innerHTML += "<P>Jó reggelt!</p>";
}
function elemekElerese3() {
  const ELEM = document.querySelectorAll("#ide")[0];
  ELEM.innerHTML += "<P>Jó reggelt!</p>";
}

function elemekElerese4() {
  const ELEM = document.getElementsByClassName("lista");
  console.log(ELEM[0]);
  let txt = "<ul>";
  for (let index = 0; index < 5; index++) {
    txt += "<li>" + Math.floor(Math.random() * (30 - 10 + 1) + 10) + "</li>";
  }
  txt += "</ul>";
  ELEM[0].innerHTML += txt;
}

function elemekFormazasa1() {
  const ELEM = document.getElementsByClassName("lista");
  ELEM[0].classList.add("formazott");
}

function esemenykezeles1() {
  const ELEM = document.getElementsByClassName("lista");
  ELEM[0].addEventListener("click", esemenykezelo);
  function esemenykezelo() {
    const ELEM2 = document.getElementsByClassName("kattintasutan");
    ELEM2[0].innerHTML += ELEM[0].innerHTML;
  }
}

function esemenykezeles2() {
  const ELEM = document.getElementsByClassName("feladat");
  ELEM[0].innerHTML += "<button>OK</button>";
  const GOMB = document.querySelectorAll("button")[0];
  GOMB.addEventListener("click", fuggveny);
  //function fuggveny() {
    
 // }
}


