import './sass/main.scss';
import onSearch from './js/search'

const _ = require('lodash');


const inputRef = document.querySelector('#search-form')

inputRef.addEventListener('input',
    _.debounce(onSearch, 1000));




// showLoader();
// hideLoader();