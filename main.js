import './style.css';

const COLOR_PALETTE = {
    '#353531' : 'Black Olive',
    '#EC4E20' : 'Flama',
    '#FF9505' : 'Princeton Orange',
    '#016FB9' : 'Azul',
    '#D1FAFF' : 'Light cyan',
    '#9BD1E5' : 'Light blue',
    '#6A8EAE' : 'Air Force blue',
    '#57A773' : 'Jade',
    '#157145' : 'Dark spring green',
    '#291570' : 'Persian indigo',
};

const elegisteColor = document.getElementById('texto')/**Hola, ya elegiste el color...*/
const colorPickerSelect = document.querySelector('#color-picker');
const colorName = document.querySelector('#color-name');
const nav = document.body.lastChild.parentElement.children[0].children[1];
const aboutUsButton = document.body.lastChild.parentElement.children[0].children[1].children[1].children[0]
const productsButton = document.body.lastChild.parentElement.children[0].children[1].children[1].children[1]
const homeButton = document.body.lastChild.parentElement.children[0].children[1].children[1].children[2]
const main = document.body.lastChild.parentElement.children[1];
const footer = document.body.lastChild.parentElement.children[2]
const addOptionsToColorPicker = () => {
    const colorPickerSelect = document.querySelector('#color-picker')
    Object.keys(COLOR_PALETTE).forEach((color)=> {
        const option = document.createElement('option');
        option.value = color;
        option.innerText = COLOR_PALETTE[color] 
        colorPickerSelect.append(option)
    });
}
const addEventListenerToColorPicker = () => {
    colorPickerSelect.addEventListener ('change', (e)=> {  
        elegisteColor.innerHTML = "";
        const newColor = e.target.value
        document.body.style.backgroundColor = 'white';
        const colorNameText = `${COLOR_PALETTE[newColor]} | ${newColor} `;
       // colorName.innerText = COLOR_PALETTE[newColor] ? colorNameText : '#fff'
        elegisteColor.innerHTML += `<h5>Elejiste el color: </h5><h3>-${COLOR_PALETTE[newColor]}- </h3><div class="newColor"> ${newColor} </div>`;  
        const addEventListenerToSelectDocument = ()=>{
            const selectDocument = document.querySelector('#select-document')
            selectDocument.addEventListener('change',(e)=>{
                const bodyDocument = e.target.value
                    if(bodyDocument === 'nav'){
                    nav.style.backgroundColor = newColor
                    }else if(bodyDocument === 'main'){
                    main.style.backgroundColor = newColor
                    }else if (bodyDocument === 'footer'){
                    footer.style.backgroundColor = newColor
                    }
                    if(bodyDocument === 'aboutUsButton'){
                        aboutUsButton.style.backgroundColor = newColor
                        }
                        if(bodyDocument === 'productsButton'){
                            productsButton.style.backgroundColor = newColor
                            }
                            if(bodyDocument === 'homeButton'){
                                homeButton.style.backgroundColor = newColor
                                }
                })
            }
            addEventListenerToSelectDocument();  
})
}
addOptionsToColorPicker();
addEventListenerToColorPicker();
