import template from '../templates/template.hbs';
import { showLoader, hideLoader } from './loader'
import openModal from './modal'
import lazyLoad from './lazyload';

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
resultTemplate.addEventListener('click', openModal);


//===================

// function lazyLoad(targets) {
//     const options = {
//         rootMargin: '100px',
//     };
//     const onEntry = (entries, observer) => {
//         entries.forEach(entry => {
//             if (entry.isIntersecting) {
//                 const img = entry.target;
//                 const src = img.dataset.lazy;
//                 img.src = src;
//                 observer.unobserve(img);
//             };
//         });
//     };

//     const io = new IntersectionObserver(onEntry, options);

//     targets.forEach(target => io.observe(target));
// }

export default createTemplate;
export { resultTemplate };

