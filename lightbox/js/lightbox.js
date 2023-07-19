window.onload = function () {
  var imageBox = document.querySelectorAll(".pic");
  var lightbox = document.querySelector("#lightbox");
  var lightboxImage = document.querySelector("#lightboxImage");
  for (var i = 0; i < imageBox.length; i++) {
    imageBox[i].addEventListener("click", showlightBox);
  }
  function showlightBox() {
    var bigLocation = this.getAttribute("data-src");
    // console.log(data - src);
    lightboxImage.setAttribute("src", bigLocation);
    lightbox.style.display = "block";
  }
  lightbox.onclick = function () {
    lightbox.style.display = "none";
  };
};
