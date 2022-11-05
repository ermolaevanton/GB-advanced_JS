'use strict';

const text = document.querySelector('.txt');

document.querySelector('.btn-1').addEventListener('click', () => {
    text.innerText = text.innerText.replace(/'/g, '"');
});

document.querySelector('.btn-2').addEventListener('click', () => {
    text.innerText = text.innerText.replace(/'/g, '"');
    text.innerText = text.innerText.replace(/\b"/g, "'");
});

document.querySelector('.btn-3').addEventListener('click', () => {
    text.innerText = text.innerText.replace(/"/g, "'");
});



