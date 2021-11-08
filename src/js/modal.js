import 'basiclightbox/dist/basicLightbox.min.css';
import * as basicLightbox from 'basiclightbox'


export default function openModal(e) {
    const targ = e.target;    
    const instance = basicLightbox.create(`
        <img id="modal-js" src=${targ.dataset.source} width="800" height="600">
    `)
    if (targ.nodeName !== 'IMG') return;
    
    instance.show();
}

