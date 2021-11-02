import { showLoader, hideLoader } from './loader'


export const getImg = (searchQuery) => {
    const KEY = 'key=24124599-81915d8fff3f3b2b5bfb5c22e';
    const url = `https://pixabay.com/api/?${KEY}&q=${searchQuery}&per_page=12`;
    return fetch(url)
        .then(response => {
            if (response.ok) return response.json();
            throw new Error('Eroor fetching data');
        });
}


