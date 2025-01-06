let currentIndex = 0;
const images = document.querySelectorAll(".img-gallery img");
const fullImg = document.getElementById("fullImg");
const fullImgBox = document.getElementById("fullImgBox");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");

function openFullImg(numbers) {
  currentIndex = numbers;
  fullImg.src = images[currentIndex].src;
  fullImgBox.style.display = "flex";
}

function closeFullImg() {
  fullImgBox.style.display = "none";
}

prevBtn.addEventListener("click", () => {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  fullImg.src = images[currentIndex].src;
});

nextBtn.addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % images.length;
  fullImg.src = images[currentIndex].src;
});
