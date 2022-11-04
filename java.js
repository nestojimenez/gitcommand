alert("Hello World");
const myHeader = document.getElementById('my_header');
const myButton = document.getElementById('my_button');
myHeader.textContent ="My Text";

myButton.addEventListener('click', myFunction);


function myFunction(){
    alert("You Clicked Me!");
} 
    
