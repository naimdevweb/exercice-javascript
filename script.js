// const alphabetMinuscule = [
//     "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m",
//     "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"
//   ];

//   let letter = "s";
//   for (let i = 0; i <= alphabetMinuscule.length;i++){
//     if(alphabetMinuscule[i] == letter){
//       console.log(i + 1);
//     }
//   };



  //EXERCICE 5
//   const nom = "bonjour";
// const voyelles = ["a","e","i","o","u"];

// console.log("Votre mot a " + nom.length + " lettres")

// console.log("Les voyelles sont : ")

// for (let i = 0 ; i < nom.length ; i++) {
//     if ( voyelles.includes ( nom.charAt(i) ) )
//         console.log(nom.charAt(i))
// }

// nom.forEach ( (lettre) => {if (lettre == "a" | lettre == "e" | lettre == "i" | lettre == "o" | lettre == "u" | lettre == "y") { console.log(lettre)} })
 

//EXERCICE 6
/*
const phrase = "salut tout le monde";
let time = 0;
let variable = "";
let counted = []; 
for (let i = 0; i < phrase.length; i++) {
  if (phrase[i] === " " || counted.includes(phrase[i])) {
    continue; 
  }

  variable = phrase[i];
  time = 0; 

  
  for (let letter = 0; letter < phrase.length; letter++) {
    if (phrase[letter] === variable) {
      time++;
    }
  }

  console.log(variable + ": " + time); 
  counted.push(variable); 
}
*/
   
  

// function rectangle(longueur , largeur){
//   if (longueur === largeur){
//     return ("le resultats est un carre")
//   }
//   else{
//     return ("le resultats est un rectangle")
//   }

// }
// console.log(rectangle (5, 8));

//EXERCICE 7

/*
let nombres = [5, -3, 12, -7, 9, -2, 0, -15, 8];


let positifs = [];
let négatifs = [];


for (let i = 0; i < nombres.length; i++) {
    if (nombres[i] >= 0) {
        positifs.push(nombres[i]);
    } else {
        négatifs.push(nombres[i]);
    }
}


console.log("Nombres positifs :", positifs);
console.log("Nombres négatifs :", négatifs);
*/

//EXERCICE 8

// let nombres = [1,6,8,9,5];
// for (let i = 0; i < 5; i++) { 
// }

// let plusGrand = nombres[0];

// for (let i = 1; i < nombres.length; i++) {
//     if (nombres[i] > plusGrand) {
//         plusGrand = nombres[i];
//     }
// }


// console.log("Le plus grand nombre est :", plusGrand);


//EXERCICE 9

// let mot = "bonjour"
// let motInverse = mot.split("").reverse().join("");
// console.log(motInverse)


//PARTIE 2

//EXERCICE 1
// let texte = "bonjour tout le monde";
// alert(texte);

//EXERCICE 2

// let lastName = "Dupont";
// let firstName = "Jean";
// let city = "Sainte";

// alert("Nom : " + lastName + "\nPrénom : " + firstName + "\nVille : " + city);

//EXERCICE 3

// let prenom = prompt("Saisissez votre prénom :");

// alert("Bonjour, " + prenom);

//EXERCICE4

// document.addEventListener("DOMContentLoaded", function () {

  
//   const form = document.getElementById("userForm");

  
//   form.addEventListener("submit", function (event) {
     
//       event.preventDefault();

      
//       const lastName = document.getElementById("lastname").value;
//       const firstName = document.getElementById("firstname").value;
//       const city = document.getElementById("city").value;

      
//       alert("Nom : " + lastName + "\nPrénom : " + firstName + "\nVille : " + city);
//   });

// });

//EXERCICE 5

// function calculerMultiplication(premierNombre, deuxiemeNombre) {
//   let partieEntiere, resultat;

  
//   partieEntiere = Math.floor(premierNombre);

  
//   resultat = partieEntiere * deuxiemeNombre;

 
  
//   alert("Le résultat de la multiplication est : " + resultat);
// }

// calculerMultiplication(4.75, 3.2); // Exemple d'appel avec des valeurs arbitraires

 

//EXERCICE 6

// function afficherReste() {
  

//   let premierNombre = parseFloat(document.forms['form']['firstNumber'].value); 
//   let deuxiemeNombre = parseFloat(document.forms['form']['secondNumber'].value);

  
//   if (isNaN(premierNombre) || isNaN(deuxiemeNombre)) {
//       alert("Veuillez entrer des nombres valides.");
//       return; // Arrêter l'exécution si les entrées ne sont pas valides.
//   }

 
//   let reste = premierNombre % deuxiemeNombre;

  
//   alert("Le reste de la division de " + premierNombre + " par " + deuxiemeNombre + " est : " + reste);
// }



//EXERCICE 7

// function calculer(pointure, anneeNaissance) {
//   let resultat;

  
//   resultat = (pointure * 2 + 5) * 50 - anneeNaissance + 1766;

 
//   alert("Le résultat du calcul est : " + resultat);
// }


// document.getElementById("calculateButton").addEventListener("click", function() {
  
//   let pointure = document.querySelector('[name="shoeSize"]').value;
//   let anneeNaissance = document.querySelector('[name="birthYear"]').value;

  
//   pointure = parseInt(pointure);
//   anneeNaissance = parseInt(anneeNaissance);

  
//   if (isNaN(pointure) || isNaN(anneeNaissance)) {
//       alert("Veuillez entrer des valeurs valides.");
//       return;
//   }

  
//   calculer(pointure, anneeNaissance);
// });

//EXERCICE 8

function age(){
  for(i = 0; i <= 18; i++)
    if(console.log())
}










     


