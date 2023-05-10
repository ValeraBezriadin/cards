const cards = document.querySelectorAll(".card__item");

cards.forEach((card) => {
  card.addEventListener("click", () => {
    card.classList.toggle("flipped");
    if (card.classList.contains("flipped")) {
      card.style.backgroundImage = "url(./files/333.png)";
    } else {
      card.style.backgroundImage = "url(./files/bkgr_card.jpg)";
    }
  });
});
