import { COLOR_PALETTE } from "../data/COLOR_PALET";

export const addOptionsToColorPicker = () => {
        const colorPickerSelect = document.querySelector('#color-picker')
        Object.keys(COLOR_PALETTE).forEach((color)=> {
            const option = document.createElement('option');
            option.value = color;
            option.innerText = COLOR_PALETTE[color] 
            colorPickerSelect.append(option)
        });
    }