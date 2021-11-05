import template from '../templates/template.hbs';
import { showLoader, hideLoader } from './loader'

const resultTemplate = document.querySelector('.gallery')

function createTemplate(arrey) {
    showLoader();
    console.log(arrey.hits[0]);
    if (arrey.hits.length>=1) {
        resultTemplate.insertAdjacentHTML('beforeend', template(arrey.hits));
        hideLoader();
    } else {
        hideLoader();
        throw new Error('Eroor fetching data');
    }
}

export default createTemplate;