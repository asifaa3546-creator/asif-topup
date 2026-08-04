
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
if (!confirm("আপনি কি অর্ডার নিশ্চিত করতে চান?")) {
    return;
}
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

}<script src="script.js"></script>
<input type="text" id="uid" placeholder="Enter Player UID">
<input type="text" id="player" placeholder="Enter Player Name">

<select id="package">
  ...
</select>

<button onclick="sendOrder()">Order Now</button>
let slides = document.querySelectorAll(".slide");
let current = 0;

setInterval(() => {

slides[current].classList.remove("active");

current++;

if(current >= slides.length){
current = 0;
}

slides[current].classList.add("active");

},3000);
const cards = document.querySelectorAll(".game-card");

cards.forEach(card => {
    card.addEventListener("click", () => {
        const game = card.querySelector("h3").innerText.replace(/[^\w\s]/g, "").trim();
        document.getElementById("game").value = game;
        window.scrollTo({
            top: document.querySelector(".order-form").offsetTop,
            behavior: "smooth"
        });
    });
});
