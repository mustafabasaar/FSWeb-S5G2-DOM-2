import "./less/index.less";

// Örnek bir event kullanımı aşağıdadır. Çalıştırmak için comment dışına alın
// document.querySelector("h1").addEventListener("click",function(e){
// alert("Bana tıkladın!")
// });

// Kodlar buraya gelecek!
const newElement = document.querySelectorAll("header div nav a");
newElement[3].addEventListener("mouseover", function () {
  newElement[3].textContent = "CALL FOR FUN";
});
newElement[3].addEventListener("mouseout", function () {
  newElement[3].textContent = "İletişim";
});
const imgElement = document.createElement("img");
imgElement.src =
  "https://iasbh.tmgrup.com.tr/f5ccbe/752/395/0/26/600/342?u=https://isbh.tmgrup.com.tr/sbh/2017/10/02/cocuklarin-eglence-otobusu-forumbus-1-yasinda-1506941329704.jpg";
imgElement.width = 190;
imgElement.height = 80;

const newTopic = document.querySelector("header div h1");
newTopic.addEventListener("mouseover", function () {
  newTopic.innerHTML = "";
  newTopic.appendChild(imgElement);
});
newTopic.addEventListener("mouseout", function () {
  newTopic.innerHTML = "Eğlence Otobüsü";
});
const imgEvent = document.querySelector(".img-content");
imgEvent.addEventListener("scroll", function () {
  imgEvent.textContent = "HEMEN KAYDOLUN ACELEEEE";
});

img.addEventListener("wheel", function (m) {
  m.target.style.transform = "rotate(180deg)";
});

document.addEventListener("keydown", function (m) {
  if (m.type === "keydown" && m.key === "Escape") {
    document.querySelector("body").style.backgroundColor = "orange";
  }

  if (m.type === "keydown" && m.key === "ArrowUp") {
    console.log("Yap Bir şeyler");
  }
});

window.addEventListener("load", function (m) {
  console.log("Hallettik");
});

window.addEventListener("resize", function (m) {
  console.log(m);
  console.log("inner sizes", m.target.innerWidth, m.target.innerHeight);

  console.log("Yeniden boyutlandırıldı");
});

window.addEventListener("scroll", function (m) {
  console.log("Scroll yapıldı", m.target.scrollingElement.scrollTop);
});
