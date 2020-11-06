/* Måste vara med: 
En knapp som återställer allt till originalutseendet
Alla ändringar som du har gjort ska ändras tillbaka
Byt ut minst ett foto
Ändra bakgrundsfärg på minst ett element
Ändra text på minst ett element
Ändra färg på minst en knapp
Ta bort minst 1 element (Måste läggas till igen när man trycker på återställningsknappen)
Lägg till en lista var som helst i DOMen (måste tas bort med resetknappen)
Listan ska innehålla flera li element
Varje li element ska ha en synlig border. (Valfritt utseende)
*/


//återställsknappen
let btns = document.querySelectorAll('button');
let reset = btns[2];
reset.innerText = 'RESET';


//Sätt en event listener på reset-knappen
reset.addEventListener('click', resetAll);

//sätt event listener för första knappen
let knapp1 = btns[0];
knapp1.addEventListener('click', 
    function(event){
        changeArt1toHotPink();
        changeH2inArt2();
    }
);

function resetAll(){
    //reset art1 till white background
    let art1 = document.querySelector('.art-1');
    art1.style.backgroundColor = 'white';

    //reset radikalt till Sinus Hoodie
    let h2 = document.querySelector('.art-2 h2');
    h2.innerText = 'Sinus Hoodie';
}

function changeH2inArt2(){
    let h2 = document.querySelector('.art-2 h2');
    h2.innerText = 'Radikalt';
}

//ändrar art-1 bakgrundsfärg till hot pink
function changeArt1toHotPink(){
    let art1 = document.querySelector('.art-1');
    art1.style.backgroundColor = 'hotpink';
}