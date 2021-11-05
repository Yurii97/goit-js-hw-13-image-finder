

export default class ImgApiService {
    constructor() {
        this.searchQuery = '';
        this.pageNum = 1;
    }
    fetchArticles(){
        const KEY = 'key=24124599-81915d8fff3f3b2b5bfb5c22e';
        const url = `https://pixabay.com/api/?image_type=photo&orientation=horizontal&${KEY}&q=${this.searchQuery}&page=${this.pageNun}&per_page=12`;
        
        return fetch(url)
            .then(response => {
                if (response.ok) {
                    this.pageNum += 1;
                    return response.json()
                };
                throw new Error('Eroor fetching data');
            });
    }
    get query() {
        return this.searchQuery;
    }
    set query (newQuery){
        this.searchQuery = newQuery;
    }
    get page() {
        return this.pageNun;
    }
    set page(newPage) {
        this.pageNun = newPage;
    }
}



// export const getImg = (searchQuery, pageNun) => {
//     const KEY = 'key=24124599-81915d8fff3f3b2b5bfb5c22e';
//     const url = `https://pixabay.com/api/?${KEY}&q=${searchQuery}&page=${pageNun}&per_page=12`;
//     return fetch(url)
//         .then(response => {
//             if (response.ok) return response.json();
//             throw new Error('Eroor fetching data');
//         });
// }
