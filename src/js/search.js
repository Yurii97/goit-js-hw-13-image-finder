import ImgApiService from './apiService';
import { showLoader, hideLoader } from './loader'
// import { imgApiService } from './imgAPI'
import createTemplate from './markup'

const imgApiService = new ImgApiService();

function onSearch(e) {
    e.preventDefault();
    imgApiService.query = e.target.value;
    if (e.target.value) {
        showLoader();
        
        imgApiService.fetchArticles().then(createTemplate);
        
        hideLoader();
    }    
}

function uploadImg() {        
    imgApiService.fetchArticles().then(createTemplate);
}
        
export default onSearch; uploadImg;

// CLASS

// class Search{
//     constructor() {
        
//     }
//     onSearch2() {
        
//     }
//     render2() {
//         render()
//     }
// }


// function render() {
//     imgApiService.fetchArticles().then(createTemplate);
// }