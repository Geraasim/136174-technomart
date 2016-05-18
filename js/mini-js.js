var mapOpen = document.querySelector(".js-open-map");
var mapPopup = document.querySelector(".modal-content-map");
var mapClose = mapPopup.querySelector(".modal-content-close");

mapOpen.addEventListener("click", function(event) {
  event.preventDefault();
  mapPopup.classList.add("modal-content-show");
});

mapClose.addEventListener("click", function(event) {
  event.preventDefault();
  mapPopup.classList.remove("modal-content-show");
});

window.addEventListener("keydown", function(event) {
  if (event.keyCode === 27) {
    if (mapPopup.classList.contains("modal-content-show")) {
      mapPopup.classList.remove("modal-content-show");
    }
  }
});

var writeUs = document.querySelector(".mail");
var writeModal = document.querySelector(".modal-content");
var writeUsClose = document.querySelector(".modal-content-close");

writeUs.addEventListener("click", function (event) {
event.preventDefault();
writeModal.classList.add("modal-show");
});
writeUsClose.addEventListener("click", function (event) {
event.preventDefault();
writeModal.classList.remove("modal-show");
});

var buy = document.querySelectorAll(".buy");
var buyModal = document.querySelector(".modal-basket");
var buyClose = document.querySelector(".modal-basket-close");

buy.addEventListener("click", function (event) {
event.preventDefault();
buyModal.classList.add("modal-basket-show");
});
buyClose.addEventListener("click", function (event) {
event.preventDefault();
buyModal.classList.remove("modal-basket-show");
});
