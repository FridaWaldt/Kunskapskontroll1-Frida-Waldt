/* Måste vara med: 
En knapp som återställer allt till originalutseendet
Alla ändringar som du har gjort ska ändras tillbaka - CHECK
Byt ut minst ett foto - CHECK
Ändra bakgrundsfärg på minst ett element - CHECK
Ändra text på minst ett element - CHECK
Ändra färg på minst en knapp - CHECK
Ta bort minst 1 element (Måste läggas till igen när man trycker på återställningsknappen)
Lägg till en lista var som helst i DOMen (måste tas bort med resetknappen)
Listan ska innehålla flera li element
Varje li element ska ha en synlig border. (Valfritt utseende)
*/




/* BYT UT MINST ETT FOTO START*/

let secondPicture = document.querySelector ('.art-2 figure img');

let buyButtonArticle2 = document.querySelector('.art-2 button');


buyButtonArticle2.addEventListener('click',
    function(event){
        pictureChange();
        changeButtonColor();
    }
)

function pictureChange(){
    secondPicture.setAttribute('src', 'img/hoodie-forrest.png')
}

/* BYT UT MINST ETT FOTO SLUT*/




/* ÅTERSTÄLLNINGSKNAPPEN START*/


//Välj en återställsknapp
let btns = document.querySelectorAll('button');
let reset = btns[2];
reset.innerText = 'RESET';


//Sätt en event listener på reset-knappen
reset.addEventListener('click', resetAll);

function resetAll(){
    //reset Body till vit bakgrund
    let body = document.querySelector('body');
    body.style.backgroundColor = 'white';

    //reset RESET ME till Products
    let productsHomeNav = navA[1];
    productsHomeNav.innerText = 'Products';

    //reset Forrest-hoodie-picture till Fire-hoodie-picture
    let secondPicture = document.querySelector ('.art-2 figure img');
    secondPicture.setAttribute('src', 'img/hoodie-fire.png');

    //reset Buy Button color to black
    let buyButtonArticle2 = document.querySelector('.art-2 button');
    buyButtonArticle2.style.backgroundColor = 'black';
    buyButtonArticle2.style.color = 'white';

}

/* ÅTERSTÄLLNINGSKNAPPEN SLUT*/