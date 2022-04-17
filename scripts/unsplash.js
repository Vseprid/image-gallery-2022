export const input = document.querySelector('.search__input');

let url = 'https://api.unsplash.com/search/photos?query=spring&per_page=30&orientation=landscape&client_id=TgVDje4n2EI9QgEC5NZXWmKe9T8SXx6jFlh0ZDbNt68';

export async function getData() {
    if (event?.target instanceof HTMLInputElement) {
        url = `https://api.unsplash.com/search/photos?query=${event.target.value}&per_page=30&orientation=landscape&client_id=TgVDje4n2EI9QgEC5NZXWmKe9T8SXx6jFlh0ZDbNt68`;
    }
    const res = await fetch(url);
    const data = await res.json();
    const images = data.results.map(img => img.urls.small);
    showData(images);
}

const mainContainer = document.querySelector('.main__container');

function showData(data) {
    data.forEach((url, index) => {
        if (!showData.flag) {
            const img = document.createElement('div');
            img.classList.add('image');
            img.style.backgroundImage = `url(${url})`;
            mainContainer.append(img)
        } else {
            const img = mainContainer.children[index]
            img.style.backgroundImage = `url(${url})`;
        }
    });
    showData.flag = true
}

export const searchBtn = document.querySelector('.search__btn');


