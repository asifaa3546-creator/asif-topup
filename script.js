
document.addEventListener("DOMContentLoaded", function () {
  alert("👋 Welcome to ASIF TOPUP!");
});function orderNow(){
  const uid=document.getElementById("uid").value;
  const pack=document.getElementById("package").value;

  const msg=`Hello ASIF TOPUP!
UID: ${uid}
Package: ${pack}`;

  window.open(
    "https://wa.me/8801341181330?text="+encodeURIComponent(msg),
    "_blank"
  );
}function sendOrder() {

let uid = document.getElementById("uid").value;
let player = document.getElementById("player").value;
let pack = document.getElementById("package").value;

let message =
`🎮 ASIF TOPUP BD

UID: ${uid}

Player: ${player}

Package: ${pack}`;

let url =
`https://wa.me/8801341181330?text=${encodeURIComponent(message)}`;

window.open(url, "_blank");

}
