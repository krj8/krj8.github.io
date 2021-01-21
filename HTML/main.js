/* comment */
// for one-line comments

/* const myHeading = document.querySelector('h1');
myHeading.textContent = 'Hello World!'; */

/* let myVariable = 'Bob';
myVariable; */

/* let iceCream = 'chocolate';
if(iceCream === 'chocolate') {
    alert('Yay, I love chocolate!');
} else {
    alert('Aww, but chocolate is my favorite...');
} */

/* function multiply(num1,num2) {
    let result = num1 * num2;
    return result;
} */

/* // event handler below
document.querySelector('html').onclick = function() {
    alert('Ouch! Stop poking me!');
}
// same as below
let myHTML = document.querySelector('html');
myHTML.onclick = function() {}; */


// Image changer
let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'firefox-icon.png') {
        myImage.setAttribute('src', 'firefox2.png');
    } else {
        myImage.setAttribute('src', 'firefox-icon.png');
    }
}






// Personalized welcome message
let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
    let myName = prompt('Please enter your name.');
    if(!myName) {
        setUserName();
    } else {
        localStorage.setItem('name', myName);
        myHeading.textContent = 'Mozilla is cool, ' + myName;
    }
}

if (!localStorage.getItem('name')) {
    setUserName();
} else {
    let storedName = localStorage.getItem('name');
    myHeading.textContent = 'Mozilla is cool, ' + storedName;
}

myButton.onclick = function() {
    setUserName();
}