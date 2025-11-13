let livres = [
    {code:2,titre:"Jane Eyre", annee:1847 ,prix:99,auteur:"CharlotteBrontë" ,disponible :true},
    {code:2,titre:"octobr", annee:1947 ,prix:199,auteur:"ahmadben ali" ,disponible :true},

];

let btnAjouter = document.getElementById("ajoute-livre");
let catalogue = document.getElementById("catalogue");
let searchInput = document.getElementById("search");

function afficherLivres(filtre = "") {
    /*
  catalogue.innerHTML = "";

  let livresFiltres = livres.filter(livre =>
    livre.titre.toLowerCase().includes(filtre.toLowerCase())
  );

  livresFiltres.forEach((livre, index) => {
    let div = document.createElement("div");
    div.className = "carte";  

    div.innerHTML = `
      <h3>${livre.titre}</h3>
      <p>Code : ${livre.code}</p>
      <p>Auteur : ${livre.auteur}</p>
      <p>Année : ${livre.annee}</p>
      <p>Prix : ${livre.prix} DH</p>
      <p>Disponible : ${livre.disponible ? "Oui" : "Non"}</p>
      <button class="supprime">Supprimer</button>
    `;

    div.querySelector(".supprime").addEventListener("click", function () {
      livres.splice(index, 1); 
      afficherLivres(searchInput.value);

    });

    catalogue.appendChild(div);
  });
  */
 catalogue.innerHTML="";
 livres.forEach((liv,i)=>{
    let div = document.createElement("div");
    div.className = "carte";  

   div.innerHTML=`  <h3>${liv.titre} </h3> <p>Code : ${liv.code}</p> <p>Auteur : ${liv.auteur}</p> <p>Année : ${liv.annee}</p> 
   <p>Prix : ${liv.prix} DH</p> <p>Disponible : ${liv.disponible ? "Oui" : "Non"}</p> <button class="supprime">Supprimer</button>` ;
    catalogue.appendChild(div);
    div.querySelector(".supprime").addEventListener("click", function () {
        livres.splice(i, 1); 
        afficherLivres(searchInput.value);
  
      });

 }); 
}

document.getElementById("form-ajout").addEventListener("submit", function (e) {
    e.preventDefault()
  let code = Number(document.getElementById("code").value);
  let titre = document.getElementById("titre").value;
  let auteur = document.getElementById("auteur").value;
  let annee = Number(document.getElementById("annee").value);
  let prix = Number(document.getElementById("prix").value);
 

  let disponible = document.getElementById("disponible").value === "true";

  let nouveauLivre = { code, titre, auteur, annee, prix, disponible };

  livres.push(nouveauLivre);
  afficherLivres(); 
  document.getElementById("form-ajout").reset();
});


let btnSearch = document.getElementById("btnSearch")
btnSearch.addEventListener("click", function () {
  afficherLivres(searchInput.value);
});
afficherLivres();