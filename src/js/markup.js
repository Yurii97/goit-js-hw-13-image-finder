import template from '../templates/template.hbs';
import { showLoader, hideLoader } from './loader'
import openModal from './modal'
import lazyLoad from './lazyLoad.js';

const resultTemplate = document.querySelector('.gallery')

function createTemplate(arrey) {
    showLoader();    
    if (arrey.hits.length>=1) {
        resultTemplate.insertAdjacentHTML('beforeend', template(arrey.hits));
        
        const images = document.querySelectorAll('img');
        lazyLoad(images);
        hideLoader();
        
    } else {
        hideLoader();
        throw new Error('Eroor fetching data');
    }
}
resultTemplate.addEventListener('click', openModal)

export default createTemplate;
export { resultTemplate };