var cookies = 0;
var cursor = 1; //Upgrade 1
var cenaup1 = 20; //Upgrade 1
var cenaup2 = 50; //Upgrade 2
var loop = 0; //Upgrade 2


function klik() {
  cookies = cookies + cursor;
  document.getElementById("count").innerHTML = cookies;
  console.log("Cookies:"+cookies);
}

function up2loop() {
  cookies = cookies + 1;
  document.getElementById("count").innerHTML = cookies;
  console.log("Cookies:" + cookies);
}

function upg1() {
  if (cookies >= cenaup1) {
    cursor = cursor + 1;
    console.log("Cursor:"+cursor);
    cookies = cookies - cenaup1;
    document.getElementById("count").innerHTML = cookies;
    document.getElementById("u1").innerHTML = "Cursor("+cursor+")";

    cenaup1 = cenaup1 + Math.round(cenaup1 / 2);
    document.getElementById("c1").innerHTML = "("+cenaup1+")";
  } else {
    console.log("Not enough cookies");
  }

}

function upg2() {
  if (cookies >= cenaup2) {
    loop = loop + 1;
    console.log("Loop:"+loop);
    cookies = cookies - cenaup2;
    document.getElementById("count").innerHTML = cookies;
    document.getElementById("u2").innerHTML = "Loop("+loop+")";

    cenaup2 = cenaup2 + Math.round(cenaup2 / 2);
    document.getElementById("c2").innerHTML = "(" + cenaup2 + ")";

    setInterval(function () { up2loop() }, 3000);
  } else {
    console.log("Not enough cookies");
  }

}