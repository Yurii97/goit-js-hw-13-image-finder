import { error, success } from '@pnotify/core';
import '@pnotify/core/dist/PNotify.css';
import '@pnotify/core/dist/BrightTheme.css';

export default class MesagePnotify{

    findEroor() {
        error({
            title: "Ops",
            text: 'Please enter a more specific query',
            shadow: true,
            stiker: false,
            delay: 2000,
        });        
    }
    findSucces() {            
        success({
            title: 'Success!',
            text: 'Request complited! Click on the picture for full view',
            shadow: true,
            stiker: false,
            delay: 2000,
        });
        }
    
}

