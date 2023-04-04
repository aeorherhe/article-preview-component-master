const article = document.querySelector("article");
const shareBtn = document.querySelectorAll(".share-Btn");

shareBtn.forEach(function (sharebtn) {
  sharebtn.addEventListener("click", function () {
    article.classList.toggle("show-links");
  });
});
