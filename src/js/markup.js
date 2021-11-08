import template from '../templates/template.hbs';
import { showLoader, hideLoader } from './loader'
import openModal from './modal'

const resultTemplate = document.querySelector('.gallery')
const imgRef = document.querySelectorAll('.photo-card');

function createTemplate(arrey) {
    showLoader();
    console.log(arrey.hits);
    if (arrey.hits.length>=1) {
        resultTemplate.insertAdjacentHTML('beforeend', template(arrey.hits));
        hideLoader();
    } else {
        hideLoader();
        throw new Error('Eroor fetching data');
    }
}
resultTemplate.addEventListener('click', openModal)

export default createTemplate;
export { resultTemplate };