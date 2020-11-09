/* BYT UT MINST ETT FOTO START*/

let buyButtonArticle2 = document.querySelector('.art-2 button');


buyButtonArticle2.addEventListener('click',
    function(event){
        pictureChange();
        changeButtonColor();
    }
)

function pictureChange(){
    let secondPicture = document.querySelector ('.art-2 figure img');
    secondPicture.setAttribute('src', 'img/pikachu.png')
}

/* BYT UT MINST ETT FOTO SLUT*/




/* ÄNDRA FÄRG PÅ ETT ELEMENT START */

//Target Nav A
let navA = document.querySelectorAll('nav a');

//Choose the Home Nav Button
let homeNavKnapp = navA[0];


//Add the Click event to change the color of home to red.
homeNavKnapp.addEventListener('click',
    function(event){
        changeColorWithHome();
    }


)


// Create the function to add the color red to body
function changeColorWithHome(){
    let body = document.querySelector('body');
    body.style.backgroundColor = 'red';
}


/* ÄNDRA FÄRG PÅ ETT ELEMENT SLUT */




/* ÄNDRA TEXT PÅ ETT ELEMENT START*/


let productsHomeNav = navA[1];

//Add the Click event to change the text of the Products Home Button to 'RESET ME';

productsHomeNav.addEventListener('click',

    function(event){
        changeProductsText();
    }
)


// Create the function to change the text to 'RESET ME'
function changeProductsText(){
    
    productsHomeNav.innerText = 'RESET ME';
}



/* ÄNDRA TEXT PÅ ETT ELEMENT SLUT*/




/* ÄNDRA FÄRG PÅ EN KNAPP START*/

//Event listener som byter färg på knappen finns på rad 27

function changeButtonColor(){
    buyButtonArticle2.style.background = 'yellow';
    buyButtonArticle2.style.color = 'black';
}


/* ÄNDRA FÄRG PÅ EN KNAPP SLUT*/






/* TA BORT ETT ELEMENT START */

// Klicka på home i footer för att ta bort Social Media

let menuFooter = document.querySelectorAll('section article a');

let homeFooter = menuFooter[0];

homeFooter.addEventListener('click',
    function(event){
        removeSocialMedia();
    }
)


function removeSocialMedia(){
    let articlesFooter = document.querySelectorAll('section article');

    /* Fick inte removeChild() att fungera
     articlesFooter.removeChild(articlesFooter.childNodes[2]); */


    let socialMedia = articlesFooter[2];

    socialMedia.style.display = 'none';
}


/* TA BORT ETT ELEMENT SLUT */






/* LÄGG TILL EN LISTA START */

  /*   let footerList = document.querySelector('footer section')
    let productListArticle = document.createElement('article');
    let productList = document.createElement('ul');
    let productListH3 = document.createElement('h3');
    let productsFooter = menuFooter[1];

 
    footerList.appendChild(productListArticle);
    productListArticle.appendChild(productList);
    productList.appendChild(productListH3); */


/* if (productList.hasChildNodes() === false){  Varför ville detta inte fungera*/

let productsFooter = menuFooter[1];

let thisIsTrue = true;

productsFooter.addEventListener('click',
    function(event){
        if (thisIsTrue){
            thisIsTrue = false;
            createList();
        }
        
    }
)


let myListItemsNames = ['Fire Hoodie', 'Forrest Hoodie', 'Water Hoodie', 'Ash Hoodie']

function createList(){
    
    let footer = document.querySelector('footer');
    let myList = document.createElement('ul');
    footer.appendChild(myList);
    let myListH3 = document.createElement('h3');
    myList.appendChild(myListH3);


    for(i = 0; i < myListItemsNames.length ; i++){
        myListH3.innerText = 'Products';
        let myListItem = document.createElement('li');
        myListItem.innerText = myListItemsNames[i];
        myList.appendChild(myListItem);
        myListItem.style.border = '2px solid blue';
    }
}



/* LÄGG TILL EN LISTA SLUT */




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


    //reset Social Media to show
    let articlesFooter = document.querySelectorAll('section article');
    let socialMedia = articlesFooter[2];
    socialMedia.style.display = 'flex';


    //reset UL
    let productList = document.querySelector('ul');
    productList.remove();
    thisIsTrue = true;
}

/* ÅTERSTÄLLNINGSKNAPPEN SLUT*/



