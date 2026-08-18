function sendOrder(packageName) {

    let uid = document.getElementById("uid").value;
    let player = document.getElementById("player").value;

    let message =
`🎮 ASIF TOPUP BD

🎯 Package: ${packageName}

🆔 UID: ${uid}

👤 Player Name: ${player}`;

    let url = `https://wa.me/8801341181330?text=${encodeURIComponent(message)}`;

    window.open(url, "_blank");
}
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
}function function sendOrder(packageName) {
    let message = `🎮 ASIF TOPUP BD

Package: ${packageName}`;

    let url = `https://wa.me/8801341181330?text=${encodeURIComponent(message)}`;

    window.open(url, "_blank");
}() {
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
function checkStatus() {
    let id = document.getElementById("orderId").value.trim();
    let result = document.getElementById("statusResult");

    if (id === "") {
        result.innerHTML = "❌ Please enter your Order ID.";
    } else {
        result.innerHTML = "🟡 Status: Pending (Admin will update your order soon.)";
    }
}
let offerEnd = new Date().getTime() + (24 * 60 * 60 * 1000);

setInterval(function () {
  let now = new Date().getTime();
  let distance = offerEnd - now;

  if (distance <= 0) {
    document.getElementById("countdown").innerHTML = "🔥 OFFER EXPIRED";
    return;
  }

  let hours = Math.floor(distance / (1000 * 60 * 60));
  let minutes = Math.floor(
    (distance % (1000 * 60 * 60)) / (1000 * 60)
  );
  let seconds = Math.floor(
    (distance % (1000 * 60)) / 1000
  );

  document.getElementById("countdown").innerHTML =
    hours + "h : " + minutes + "m : " + seconds + "s";
}, 1000);
