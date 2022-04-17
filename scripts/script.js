import {input, getData, searchBtn} from './unsplash.js';

window.addEventListener('load', () => {
    input.focus();
    getData();
})

input.addEventListener('change', getData);

input.addEventListener('input', (event) => {
    if (event.target.value.length) {
        searchBtn.style.display = 'none';
    } else {
        searchBtn.style.display = 'block';
    }
});

