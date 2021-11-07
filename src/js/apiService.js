export default class ImgApiService {
    constructor() {
        this.searchQuery = '';
        this.pageNum = 1;
    }
    fetchArticles(){
        const KEY = 'key=24124599-81915d8fff3f3b2b5bfb5c22e';
        const url = `https://pixabay.com/api/?image_type=photo&orientation=horizontal&${KEY}&q=${this.searchQuery}&page=${this.pageNum}&per_page=5`;
        
        return fetch(url)
            .then(response => {
                if (response.ok) {                    
                    this.incrementPage();                    
                    return response.json()
                };
                throw new Error('Eroor fetching data');
            });
    }
    incrementPage() {
        this.pageNum += 1;
    }
    resetPage() {
        this.pageNum = 1;
    }
    get query() {
        return this.searchQuery;
    }
    set query (newQuery){
        this.searchQuery = newQuery;
    }
}
