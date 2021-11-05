import './sass/main.scss';
import onSearch from './js/search'
import uploadImg from './js/uploadImg';
import { showLoader, hideLoader } from './js/loader'

const anchor = document.querySelector('#anchor');
const _ = require('lodash');

hideLoader();

const inputRef = document.querySelector('#search-form')

inputRef.addEventListener('input',
    _.debounce(onSearch, 1000));

// const observer = new IntersectionObserver(uploadImg, {
//         threshold: 0.5
//     })
// observer.observe(anchor);

// showLoader();