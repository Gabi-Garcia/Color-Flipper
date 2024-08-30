import './style.css';
import {textarea, charCount} from './constants/constants'
import { setupTextarea } from './functions/textarea';
import { addOptionsToColorPicker } from './functions/colorPicker';
import { addEventListenerToColorPicker } from './functions/addEvenListenerToColorPicker';



setupTextarea(textarea, charCount);

addOptionsToColorPicker();

addEventListenerToColorPicker();

addOptionsToColorPicker();

addEventListenerToColorPicker();

