"use strict";
// 0- "récupérer" l'image
let monImage = document.getElementById('mon-image');
let largeurImage = 50;
let angleImage = 0;
// 1- "récupérer" le bouton HTML
let btnTournerGauche = document.getElementById('tourner-gauche');
let btnTournerDroite = document.getElementById('tourner-droite');
let btnAllerGauche = document.getElementById('aller-gauche');
let btnAllerHaut = document.getElementById('aller-haut');
let btnEncadrer = document.getElementById('encadrer');
let btnDezoomer = document.getElementById('dezoomer');

console.log(btnAllerHaut);
//console.log(monImage);

// 2- Déclaration de la fonction
const tournerGauche = () =>
{

    monImage.style.transform = `rotate(-90deg)`;
};

// 3- Ajout d'un écouteur d'évènements (click)
btnTournerGauche.addEventListener('click', () =>
    {
        tournerGauche();    
    }
);


// 2- Déclaration de la fonction
const tournerDroite = () =>
{
    angleImage = angleImage + 90;
    monImage.style.transform = `rotate(${angleImage}deg)`;
};

// 3- Ajout d'un écouteur d'évènements (click)
btnTournerDroite.addEventListener('click', () =>
    {
        tournerDroite();    
    }
);

// 2- Déclaration de la fonction aller à gauche
const allerGauche = () => 
{
    monImage.style.transform = `translateX(-50px)`;
}

// 3- Ajout d'un écouteur d'évènements et exécution de la fonction
btnAllerGauche.addEventListener('click', () =>
    {
        allerGauche();
    }
)

// 2- Déclaration de la fonction aller en haut
const allerHaut = () => 
{
    monImage.style.transform = `translateY(-50px)`;
}

// 3- Ajout d'un écouteur d'évènements et exécution de la fonction
btnAllerHaut.addEventListener('click', () =>
    {
        allerHaut();
    }
)

// 2- Déclaration de la fonction encadrer
const encadrer = () =>
{
    // monImage.classList.toggle('encadrement'); // Méthode 1 avec ajout de classe
    monImage.style.border = `15px solid darkred`; // Méthode 2 par js
}

// 3- Ajout d'un écouteur d'évènements et exécution de la fonction
btnEncadrer.addEventListener('click', () =>
    {
        encadrer();
    }
)

// 2- Déclaration de la fonction dezoomer
const dezoomer = () =>
{
   //monImage.style.transform = `scale(50%)`;
    if(largeurImage >= 15)
    {
        largeurImage = largeurImage-5; 
        monImage.style.width = `${largeurImage}%`;
    }
    else
        alert("Taille minimale atteinte !");
}

// 3- Ajout d'un écouteur d'évènements et exécution de la fonction
btnDezoomer.addEventListener('click', () =>
    {
        dezoomer();
    }
)