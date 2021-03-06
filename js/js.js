document.querySelector(".buy").addEventListener("click", function (event) {
event.preventDefault();

var buyModal = document.querySelector(".modal-basket");
var buyClose = document.querySelector(".modal-basket-close");
buyModal.classList.add("modal-basket-show");

buyClose.addEventListener("click", function (event) {
event.preventDefault();
buyModal.classList.remove("modal-basket-show");
});

});

document.querySelector(".js-open-map").addEventListener("click", function (event) {
event.preventDefault();

var mapPopup = document.querySelector(".modal-content-map");
var mapClose = mapPopup.querySelector(".modal-content-close");
mapPopup.classList.add("modal-content-show");

mapClose.addEventListener("click", function (event) {
event.preventDefault();
mapPopup.classList.remove("modal-content-show");
});

});

document.querySelector(".mail").addEventListener("click", function (event) {
event.preventDefault();

var writeModal = document.querySelector(".modal-content");
var writeUsClose = document.querySelector(".modal-content-close");
writeModal.classList.add("modal-show");

writeUsClose.addEventListener("click", function (event) {
event.preventDefault();
writeModal.classList.remove("modal-show");
});
});
