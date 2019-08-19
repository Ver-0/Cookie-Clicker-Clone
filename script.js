var cookies=0;
var cursor=1;


function klik() {
  cookies = cookies + cursor;
  document.getElementById("count").innerHTML = cookies;
  console.log("Cookies:"+cookies);
}

function upg1() {
  if (cookies >= 10) {
    cursor = cursor + 1;
    console.log("Cursor"+cursor);
    cookies = cookies - 10;
    document.getElementById("count").innerHTML = cookies;
  } else {
    console.log("Not enough cookies");
  }

}
