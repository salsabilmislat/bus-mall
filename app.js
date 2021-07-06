'use strict';


const sectionOne = document.getElementById('sec1-image');
const sectionTwo = document.getElementById('sec2-image');
const sectionThree = document.getElementById('sec3-image');

const maxAttempts = 25;
let counter = 0;


let arrayOfname = [];


function Product(Productname, source) {
    this.Productname = Productname;
    this.source = source;
    this.votes = 0;
    this.shown = 0;
    Product.globArray.push(this);
   

Product.globArray = [];

const globalArrKey = "JAkey";

function newObject() {
    if (localStorage.getItem(globalArrKey) == null) {

        new Product('bag', 'image/bag.jpg');
        new Product('banana', 'image/banana.jpg');
        new Product('bathroom', 'image/bathroom.jpg');
        new Product('boots', 'image/boots.jpg');
        new Product('breakfast', 'image/breakfast.jpg');
        new Product('bubblegum', 'image/bubblegum.jpg');
        new Product('chair', 'image/chair.jpg');
        new Product('cthulhu', 'image/cthulhu.jpg');
        new Product('dog-duck', 'image/dog-duck.jpg');
        new Product('dragon', 'image/dragon.jpg');
        new Product('pen', 'image/pen.jpg');
        new Product('pet-sweep', 'image/pet-sweep.jpg');
        new Product('scissors', 'image/scissors.jpg');
        new Product('shark', 'image/shark.jpg');
        new Product('sweep', 'image/sweep.png');
        new Product('tauntaun', 'image/tauntaun.jpg');
        new Product('unicorn', 'image/unicorn.jpg');
        new Product('water-can', 'image/water-can.jpg');
        new Product('wine-glass', 'image/wine-glass.jpg');
    } else {
        const getFrom =JSON.parse(localStorage.getItem(globalArrKey));
        Product.globArray=getFrom;
    }
   
}
newObject();
console.log(Product.globArray);


let firstIndex;
let secondIndex;
let thirdIndex;
let arrayImage = [];
function renderImages() {
    firstIndex = generateRandomIndex();
    secondIndex = generateRandomIndex();
    thirdIndex = generateRandomIndex();

    while (firstIndex === secondIndex || secondIndex === thirdIndex || firstIndex === thirdIndex || arrayImage.includes(firstIndex) || arrayImage.includes(secondIndex) || arrayImage.includes(thirdIndex)) {
        firstIndex = generateRandomIndex();
        secondIndex = generateRandomIndex();
        thirdIndex = generateRandomIndex();

    }
    arrayImage = [firstIndex, secondIndex, thirdIndex];
    // console.log('After', firstIndex);
    // console.log('After', secondIndex);
    // console.log('After', thirdIndex);
    // arrayImage.push(firstIndex);
    // arrayImage.push(secondIndex);
    // arrayImage.push(thirdIndex);
    // console.log(arrayImage);
    // arrayImage.includes(arrayImage.push(firstIndex));
    // arrayImage.includes(arrayImage.push(secondIndex));
    // arrayImage.includes(arrayImage.push(thirdIndex));
    console.log("after", arrayImage);


    sectionOne.src = Product.globArray[firstIndex].source;
    Product.globArray[firstIndex].shown++;
    sectionTwo.src = Product.globArray[secondIndex].source;
    Product.globArray[secondIndex].shown++;
    sectionThree.src = Product.globArray[thirdIndex].source;
    Product.globArray[thirdIndex].shown++;

    // console.log(Product.globArray[firstIndex].shown);
}
renderImages();
// arrayImage.push();
// for (let j = 0; j < arrayImage.length; j++) {
//    while (firstIndex ===firstIndex||secondIndex ===secondIndex||thirdIndex===thirdIndex){
//     firstIndex = generateRandomIndex();
//     secondIndex = generateRandomIndex();
//     thirdIndex = generateRandomIndex();
//    }
// }




// sectionOne.addEventListener('click', handleClick);
// sectionTwo.addEventListener('click', handleClick);
// sectionThree.addEventListener('click', handleClick);
const section = document.getElementById('sec-one');
section.addEventListener('click', handleClick);
let button;
function handleClick(event) {
    counter++;
    if (maxAttempts >= counter) {
        if (event.target.id === 'sec1-image') {
            Product.globArray[firstIndex].votes++;
        } else if (event.target.id === 'sec2-image') {
            Product.globArray[secondIndex].votes++;
        } else if (event.target.id === 'sec3-image') {
            Product.globArray[thirdIndex].votes++;
        } else {
            counter--;
            return
        }
        renderImages();
    } else {
        const setTols =JSON.stringify(Product.globArray);
        localStorage.setItem(globalArrKey,setTols);
        button = document.getElementById('button');
        button.addEventListener('click', renderShow);
        section.removeEventListener('click', handleClick)
    }

}
function renderShow() {
    renderList();
    partChart();
    button.removeEventListener('click', renderShow);
}


// sectionOne.removeEventListener('click', handleClick);
// sectionTwo.removeEventListener('click', handleClick);
// sectionThree.removeEventListener('click', handleClick);

let arrayOfvote = [];
let arrayOfshown = [];

function renderList(event) {
    // console.log("hello");
    const ul = document.getElementById('unList');
    for (let i = 0; i < Product.globArray.length; i++) {
        arrayOfname.push(Product.globArray[i].Productname);
        arrayOfvote.push(Product.globArray[i].votes);
        arrayOfshown.push(Product.globArray[i].shown);
       
    }
        let li = document.createElement('li');
        ul.appendChild(li);
        li.textContent = `${Product.globArray[i].Productname} had  ${Product.globArray[i].votes} votes, and was seen ${Product.globArray[i].shown} times.`
    }


}



function generateRandomIndex() {
    return Math.floor(Math.random() * Product.globArray.length);

}

function partChart() {
    let ctx = document.getElementById('myChart')
    let myChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: arrayOfname,
            datasets: [{
                label: '# of Votes',
                data: arrayOfvote,
                backgroundColor: [
                    'bisque',
                ],
                borderColor: [
                    'rgb(231, 179, 190)',
                ],
                borderWidth: 1

            }, {
                label: '# of Shown',
                data: arrayOfshown,
                backgroundColor: [
                    'rgb(223, 182, 182)'
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                ],
                borderWidth: 1

            }]
        },
    })
}