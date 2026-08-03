
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
}
