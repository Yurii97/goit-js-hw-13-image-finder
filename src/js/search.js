import ImgApiService from './apiService';
import { showLoader, hideLoader, isLoading} from './loader'
import createTemplate from './markup'
import { resultTemplate } from './markup'
import MesagePnotify from './pnotify';

const anchor = document.querySelector('#anchor');
const imgApiService = new ImgApiService();
const mesagePnotify = new MesagePnotify();

export default function onSearch(e) {
    e.preventDefault();
    const curentValue = e.target.value;
    if (curentValue.trim() === '') {
        mesagePnotify.findEroor();
        return;
    }    
    resultTemplate.innerHTML = ''
    imgApiService.query = e.target.value;
    imgApiService.resetPage();
    mesagePnotify.findSucces();
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
