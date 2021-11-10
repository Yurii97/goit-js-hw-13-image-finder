import './sass/main.scss';
import onSearch from './js/search'
import { showLoader, hideLoader } from './js/loader'


const anchor = document.querySelector('#anchor');
const _ = require('lodash');

hideLoader();

// слухач
const inputRef = document.querySelector('#search-form')
inputRef.addEventListener('input',
    _.debounce(onSearch, 1000));


