import './sass/main.scss';
import onSearch from './js/search'
import { showLoader, hideLoader } from './js/loader'

const _ = require('lodash');

hideLoader();

const inputRef = document.querySelector('#search-form')

inputRef.addEventListener('input',
    _.debounce(onSearch, 1000));




// showLoader();