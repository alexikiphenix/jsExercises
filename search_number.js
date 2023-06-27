function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min +1)) + min;
}
let min = 0;
let max = 100;
const number = getRandomIntInclusive(1, 100);
let pickedNb;
// pickedNb = max / 2;
pickedNb = Math.floor(min + (max / 2));

console.log(`Nombre à trouver : ${number}`);
const searchBetween = () =>
{
    if(pickedNb < number)
    {        
        console.log(`trop petit : ${pickedNb} -- min ${min}`);
        min = ++pickedNb;
        // min = Math.ceil(min+((max-min)/2));             
        pickedNb = Math.floor(min + (max-min)/2);             
    }else if(pickedNb > number)
    {   
        console.log(`trop grand : ${pickedNb} -- max ${max}`);
        // max = Math.floor(max - min + ((max-min)/2));                     
        max = --pickedNb;
        pickedNb = Math.floor(max-((max-min)/2));       
    }   

}

// do
// {
//     searchBetween();
// }while(pickedNb !== number)

for(let i = 0; i < 10; i++)
    searchBetween();

console.log(`nombre trouvé => ${pickedNb}`);

