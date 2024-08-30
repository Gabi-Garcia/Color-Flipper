import './style.css';
import {textarea, charCount} from './constants/constants'
import { setupTextarea } from './functions/textarea';
import { addOptionsToColorPicker } from './functions/colorPicker';
import { addEventListenerToColorPicker } from './functions/addEvenListenerToColorPicker';


//     '#353531' : 'Black Olive',
//     '#EC4E20' : 'Flama',
//     '#FF9505' : 'Princeton Orange',
//     '#016FB9' : 'Azul',
//     '#D1FAFF' : 'Light cyan',
//     '#9BD1E5' : 'Light blue',
//     '#6A8EAE' : 'Air Force blue',
//     '#57A773' : 'Jade',
//     '#157145' : 'Dark spring green',
//     '#291570' : 'Persian indigo',
// };

// const elegisteColor = document.getElementById('texto')/**Hola, ya elegiste el color...*/
// const colorPickerSelect = document.querySelector('#color-picker');
// const colorName = document.querySelector('#color-name');
// const colorTexto1 = document.querySelector('.texto1');
// const textarea = document.getElementById("miTexto");
// const charCount = document.getElementById("charCount");


// const nav = document.body.lastChild.parentElement.children[0].children[1];
// const aboutUsButton = document.body.lastChild.parentElement.children[0].children[1].children[2].children[0]
// const productsButton = document.body.lastChild.parentElement.children[0].children[1].children[2].children[1]
// const homeButton = document.body.lastChild.parentElement.children[0].children[1].children[2].children[2]
// const main = document.body.lastChild.parentElement.children[1];
// const texto1 = document.body.lastChild.parentElement.children[1].children[1];
// const texto2 = document.body.lastChild.parentElement.children[1].children[2];
// const texto3 = document.body.lastChild.parentElement.children[1].children[3];
// const textoPropio =  document.body.lastChild.parentElement.children[1].children[5].children[0];
// const footer = document.body.lastChild.parentElement.children[2]


  
//   textarea.addEventListener("input", function () {
//     this.style.height = "auto";
//     this.style.height = (this.scrollHeight) + "px";
//     const remainingChars = 600 - this.value.length;
//     charCount.textContent = `Caracteres restantes: ${remainingChars}`;
//   });



setupTextarea(textarea, charCount);

addOptionsToColorPicker();

addEventListenerToColorPicker();

addOptionsToColorPicker();

addEventListenerToColorPicker();

