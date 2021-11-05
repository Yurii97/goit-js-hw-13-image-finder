import $ from 'jquery'; // for spiner
import uploadImg from './search'

// ---------Spiner
const loader = $('#loader');
const anchor = document.querySelector('#anchor');
const gallery = $('#gallery')
let isLoading = false;

const showLoader = () => {
  loader.show();
  isLoading = true;
};

const hideLoader = () => {
  loader.hide();
  isLoading = false;
};


const loadImg = ([entrie]) => {
  if (isLoading) return;
if (entrie.isIntersecting) uploadImg;
}
  
const observer = new IntersectionObserver(loadImg, {
  threshold: 0.5
})

observer.observe(anchor)


export { showLoader, hideLoader };
//================ end spiner
