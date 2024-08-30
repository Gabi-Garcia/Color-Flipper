import { COLOR_PALETTE } from "../data/COLOR_PALET";
import {elegisteColor, colorPickerSelect, colorName, colorTexto1, textarea, charCount, nav, aboutUsButton, productsButton, homeButton,main, texto1, texto2, texto3, textoPropio, footer } from '../constants/constants'

export const addEventListenerToColorPicker = () => {
    colorPickerSelect.addEventListener ('change', (e)=> {  
        elegisteColor.innerHTML = "";
        const newColor = e.target.value
        document.body.style.backgroundColor = 'white';
        const colorNameText = `${COLOR_PALETTE[newColor]} | ${newColor} `;
       // colorName.innerText = COLOR_PALETTE[newColor] ? colorNameText : '#fff'
        elegisteColor.innerHTML += `
        <h5> Elejiste el color: </h5>
        <h3 style="color: ${newColor}">${COLOR_PALETTE[newColor]}</h3>
        <div class="newColor" style="background-color: ${newColor}"> ${newColor}</div>
        `;  

        const addEventListenerToSelectDocument = ()=>{
            const selectDocument = document.querySelector('#select-document')
            selectDocument.addEventListener('change',(e)=>{
                const bodyDocument = e.target.value
                    if(bodyDocument === 'nav'){
                    nav.style.backgroundColor = newColor
                    }if(bodyDocument === 'main'){
                    main.style.backgroundColor = newColor
                    }if (bodyDocument === 'footer'){
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
                                if(bodyDocument === 'texto1'){
                                    texto1.style.backgroundColor = newColor
                                    }
                                    if(bodyDocument === 'texto2'){
                                        texto2.style.backgroundColor = newColor
                                        }
                                        if(bodyDocument === 'texto3'){
                                            texto3.style.backgroundColor = newColor
                                            }
                                            if(bodyDocument === 'textoPropio'){
                                                textoPropio.style.backgroundColor = newColor
                                                }
                })
            }
            addEventListenerToSelectDocument();  
})
}