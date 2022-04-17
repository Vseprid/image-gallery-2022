import {input, getData, searchBtn} from './unsplash.js';

window.addEventListener('load', () => {
    input.focus();
    getData();
})

input.addEventListener('change', (event) => {
    getData();
    // console.log(this)
    if (event.target.value.length) {
        searchBtn.style.display = 'none';
    }
})

input.addEventListener('input', (event) => {
    if (event.target.value.length) {
        searchBtn.style.display = 'none';
    } else {
        searchBtn.style.display = 'block';
    }
})

