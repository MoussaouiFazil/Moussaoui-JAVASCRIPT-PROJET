console.log("tout fonctionne");

const h1 = document.querySelector("h1");

let color = "red"

color = "blue"

h1.style.color = "Yellow";
//document.querySelector("h1").style.color = "red" (c'est le meme chose qu'au dessus)

// Selecteurs
const button = document.querySelector('#button');

// le listener
button.addEventListener('click', function () {
    
    if (h1.style.color === "green")  {
         h1.style.color = "black";
    }   else {
        h1.style.color = "green";
    }    


})
