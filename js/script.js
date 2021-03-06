var writeUs = document.querySelector(".write-us-btn");
var popup = document.querySelector(".modal-content");
var popupClose = document.querySelector(".modal-content-close");
			
writeUs.addEventListener("click", function(event) {
event.preventDefault();
popup.classList.add("modal-content-show");
});

popupClose.addEventListener("click", function(event){
event.preventDefault();
popup.classList.remove("modal-content-show");
});
			
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