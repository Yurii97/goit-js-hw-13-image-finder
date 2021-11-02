
import { showLoader, hideLoader } from './loader'
import { getImg } from './apiService';

export default function onSearch(e) {
    e.preventDefault();
    if (e.target.value) {
        showLoader();
        const searchQuery = e.target.value;
        console.log("searchQuery:", searchQuery);
        getImg(searchQuery).then(console.log);
        hideLoader();
    }    
}
