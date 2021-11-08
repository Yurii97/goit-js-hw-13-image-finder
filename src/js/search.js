import ImgApiService from './apiService';
import { showLoader, hideLoader, isLoading} from './loader'
import createTemplate from './markup'
import { resultTemplate } from './markup'

const anchor = document.querySelector('#anchor');
const imgApiService = new ImgApiService();

// export default function onSearch(e) {
//     e.preventDefault();
//     imgApiService.query = e.target.value;
//     imgApiService.resetPage();
//     resultTemplate.innerHTML=''
//     if (e.target.value) {
//         const loadImg = ([entrie]) => {
//             if (isLoading) return;
//             if (entrie.isIntersecting) {
//                 showLoader();        
//                 imgApiService.fetchArticles().then(createTemplate);        
//             }
//         }  
//         const observer = new IntersectionObserver(loadImg, {
//             threshold: 0.5
//         });
//         observer.observe(anchor);
//     }    
//     hideLoader();
// }

export default function onSearch(e) {
    e.preventDefault();
    const curentValue = e.target.value;
    if (curentValue.trim() === '') {
        // error
        return;
    }    
    resultTemplate.innerHTML = ''
    imgApiService.query = e.target.value;
    imgApiService.resetPage();
    const loadImg = ([entrie]) => {
        if (isLoading) return;
        if (entrie.isIntersecting) {
            showLoader();
            imgApiService.fetchArticles().then(createTemplate);
        }
    };
    const observer = new IntersectionObserver(loadImg, {
        rootMargin: '200px',
    });
    observer.observe(anchor);   
    hideLoader();
}
