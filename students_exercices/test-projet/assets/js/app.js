// récupérer image
let monImage = document.getElementById('mon-image');
let largeurImage = 60;

// Récupérer bouton HTML
let btnDezoomer = document.querySelector('#dezoomer'); // Méthode 2
let btnAllerGauche = document.querySelector('#aller-gauche'); // Méthode 2
console.log(btnAllerGauche);


// définition fonction dézoomer
const dezoomer = () =>
{
    if(largeurImage >= 15)
    {
        largeurImage = largeurImage - 5;
        // largeurImage -= 5;    
        monImage.style.width = `${largeurImage}%`;
    }
    else
        alert("Taille minimale atteinte !");    
}

btnDezoomer.addEventListener('click', () => 
{   
    dezoomer();
})

const allerGauche = () =>
{
    monImage.classList.toggle('aller-gauche');    
}

btnAllerGauche.addEventListener('click', () => 
{
    allerGauche();
})