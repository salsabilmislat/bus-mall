'use strict';


const sectionOne = document.getElementById('sec1-image');
const sectionTwo = document.getElementById('sec2-image');
const sectionThree = document.getElementById('sec3-image');

const maxAttempts = 25;
let counter = 0;





function Product(name, source) {
    this.name = name;
    this.source = source;
    this.votes = 0;
    this.shown = 0;
    Product.globArray.push(this);
}

Product.globArray = [];

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


console.log(Product.globArray);


let firstIndex;
let secondIndex;
let thirdIndex;

function renderImages() {
    firstIndex = generateRandomIndex();
    secondIndex = generateRandomIndex();
    thirdIndex = generateRandomIndex();

    while (firstIndex === secondIndex || secondIndex === thirdIndex || firstIndex === thirdIndex) {
        firstIndex = generateRandomIndex();
        secondIndex = generateRandomIndex();
        thirdIndex = generateRandomIndex();
    }
    
    // console.log('After', firstIndex);
    // console.log('After', secondIndex);
    // console.log('After', thirdIndex);
    sectionOne.src = Product.globArray[firstIndex].source;
    sectionTwo.src = Product.globArray[secondIndex].source;
    sectionThree.src = Product.globArray[thirdIndex].source;
    Product.globArray[firstIndex].shown++;
    Product.globArray[secondIndex].shown++;
    Product.globArray[thirdIndex].shown++;
    // console.log(Product.globArray[firstIndex].shown);
}

renderImages();




sectionOne.addEventListener('click', handleClick);
sectionTwo.addEventListener('click', handleClick);
sectionThree.addEventListener('click', handleClick);

function handleClick(event) {
    counter++;
    if (maxAttempts >= counter) {
        if (event.target.id === 'sec1-image') {
            Product.globArray[firstIndex].votes++;
        } else if (event.target.id === 'sec2-image') {
            Product.globArray[secondIndex].votes++;
        } else if (event.target.id === 'sec3-image') {
            Product.globArray[thirdIndex].votes++;
        }
        renderImages();
    }

}

let button = document.getElementById('button');
button.addEventListener('click', renderList);

function renderList(event) {
    console.log("hello");
    const ul = document.getElementById('unList');
    for (let i = 0; i < Product.globArray.length; i++) {
        let li = document.createElement('li');
        ul.appendChild(li);
        li.textContent = `${Product.globArray[i].name} had  ${Product.globArray[i].votes} votes, and was seen ${Product.globArray[i].shown} times.`
    }
    sectionOne.removeEventListener('click', handleClick);
    sectionTwo.removeEventListener('click', handleClick);
    sectionThree.removeEventListener('click', handleClick);

}



function generateRandomIndex() {
    return Math.floor(Math.random() * Product.globArray.length);

}