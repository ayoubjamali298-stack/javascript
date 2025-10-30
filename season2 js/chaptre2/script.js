let titre = document.getElementById("titre");
let image = document.querySelector("img");
let bouton = document.querySelector(".btn");

bouton.addEventListener("click", function() {
  titre.innerText = "profil de ayoub !";
  titre.classList.toggle("highlight");
  image.setAttribute("src", "image/83508ce4-acdd-40c5-812a-d0f5d360d8cb.jpg");
  image.setAttribute("alt", "photos de ayoub");
});
