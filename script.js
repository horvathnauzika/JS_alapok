window.addEventListener("load", function () {
  elemekElerese1();
  elemekElerese2();
  elemekElerese3();
  elemekElerese4();
  elemekFormazasa1();
  esemenykezeles1();
  esemenykezeles2();
});

function elemekElerese1() {
  /*const ELEM = document.querySelectorAll("section h2")[0];
  console.log(ELEM.innerHTML);*/
  const ELEM = $("section h2")
  console.log(ELEM.html())
}
function elemekElerese2() {
  /*const ELEM = document.getElementById("ide");
  ELEM.innerHTML += "<P>Jó reggelt!</p>";*/
  const ELEM = $("#ide")
  ELEM.html("<p>Jó reggelt!</p>")
}
function elemekElerese3() {
  /*const ELEM = document.querySelectorAll("#ide")[0];
  ELEM.innerHTML += "<P>Jó reggelt!</p>";*/
  const ELEM = $(".ide")
  ELEM.html("<p>Jó reggelt!</p>")
}

function elemekElerese4() {
  /*const ELEM = document.getElementsByClassName("lista");
  console.log(ELEM[0]);
  let txt = "<ul>";
  for (let index = 0; index < 5; index++) {
    txt += "<li>" + Math.floor(Math.random() * (30 - 10 + 1) + 10) + "</li>";
  }
  txt += "</ul>";
  ELEM[0].innerHTML += txt;*/
  const ELEM = $(".lista")
  let txt = "<ul>";
  for (let index = 0; index < 5; index++) {
    txt += "<li>" + Math.floor(Math.random() * (30 - 10 + 1) + 10) + "</li>";
  }
  txt += "</ul>";
  ELEM.html(txt)
}

function elemekFormazasa1() {
  /*const ELEM = document.getElementsByClassName("lista");
  ELEM[0].classList.add("formazott");*/
  const ELEM = $(".lista")
  ELEM.addClass("formazott")
}

function esemenykezeles1() {
  /*const ELEM = document.getElementsByClassName("lista");
  ELEM[0].addEventListener("click", esemenykezelo);
  function esemenykezelo() {
    const ELEM2 = document.getElementsByClassName("kattintasutan");
    ELEM2[0].innerHTML += ELEM[0].innerHTML;
  }*/
  const ELEM = $(".lista")
  ELEM.on("click", function(){
    const ELEM2 = $(".kattintasutan")
    ELEM2.eq(0).html(ELEM.eq(0).html())
  });
}

function esemenykezeles2() {
  /*const ELEM = document.getElementsByClassName("feladat");
  ELEM[0].innerHTML += "<button>OK</button>";
  const GOMB = document.querySelectorAll("button")[0];
  GOMB.addEventListener("click", fuggveny);
  //function fuggveny() {
    
 // }*/
  /*const ELEM = $(".feladat")
  ELEM.eq(0).html("<button>OK</button>")
  const GOMB = $("button")
  GOMB.on("click", )*/
}


