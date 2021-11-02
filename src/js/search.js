
import { showLoader, hideLoader } from './loader'
import { getImg } from './apiService';
import createTemplate from './markup'

export default function onSearch(e) {
    e.preventDefault();
    if (e.target.value) {
        showLoader();
        const searchQuery = e.target.value;
        console.log("searchQuery:", searchQuery);
        getImg(searchQuery).then(createTemplate);
        // hideLoader();
    }    
}
