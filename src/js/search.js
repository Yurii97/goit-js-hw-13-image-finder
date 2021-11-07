import ImgApiService from './apiService';
import { showLoader, hideLoader, isLoading} from './loader'
import createTemplate from './markup'

const anchor = document.querySelector('#anchor');
const imgApiService = new ImgApiService();

export default function onSearch(e) {
    e.preventDefault();
    imgApiService.query = e.target.value;
    imgApiService.resetPage();
    if (e.target.value) {
        const loadImg = ([entrie]) => {
            if (isLoading) return;
            if (entrie.isIntersecting) {
                showLoader();        
                imgApiService.fetchArticles().then(createTemplate);        
            }
        }  
        const observer = new IntersectionObserver(loadImg, {
            threshold: 0.5
        });
        observer.observe(anchor);
    }    
    hideLoader();
}