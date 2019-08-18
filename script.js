var cookies=0;
var cursor=1;


function klik() {
  cookies = cookies + cursor;
  document.getElementById("count").innerHTML = cookies;
  console.log("Cookies:"+cookies);
}
