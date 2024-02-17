//1
document.getElementById('container');

//2
document.querySelector('#container');

//3
document.getElementsByClassName("second");

//4
document.querySelector('ol .third');

//5
const container = document.querySelector('#container');
container.innerText = "HELLO!";

//6
let footer = document.querySelector(".footer");
footer.classList.add("main");

//7
footer.classList.remove("main");

//8
let newLi = document.createElement('li');

//9
newLi.innerText = "four";

//10
let list = document.querySelector('ul');
list.appendChild(newLi);

//11
let liAndOl = document.querySelectorAll('ol li');

for (let i = 0; i < liAndOl.length; i++){
    liAndOl[i].style.backgroundColor = "green";
}

//12
let footer = document.querySelector(".footer");
footer.remove();