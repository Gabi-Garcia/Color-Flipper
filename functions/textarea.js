import { textarea, charCount } from "../constants/constants";

// functions/textarea.js

export const setupTextarea = (textarea, charCount) => {
    textarea.addEventListener("input", function () {
        this.style.height = "auto";
        this.style.height = (this.scrollHeight) + "px";
        const remainingChars = 600 - this.value.length;
        charCount.textContent = `Caracteres restantes: ${remainingChars}`;
    });
};
