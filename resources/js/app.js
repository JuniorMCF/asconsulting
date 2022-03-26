require('./bootstrap')

window.Vue = require("vue").default;

//new instance for vue 3
import store from './store/index'
import router from './routes/index'



Vue.component('App', require('./components/App.vue').default)


import vuetify from './vuetify'

import x5GMaps from 'x5-gmaps';
// Option 1: Just your key
Vue.use(x5GMaps, 'AIzaSyD-eEDri6PibSJ0lYpe3jU0DWnMytFljpM');

//Vue.use(x5GMaps, { key: 'AIzaSyD-eEDri6PibSJ0lYpe3jU0DWnMytFljpM', libraries: ['places'] });
import VueToast from 'vue-toast-notification';
// Import one of the available themes
//import 'vue-toast-notification/dist/theme-default.css';
import 'vue-toast-notification/dist/theme-sugar.css';


import moment from 'moment-timezone'
moment.locale('es');
Vue.prototype.moment = moment


Vue.use(VueToast, {
    // One of the options
    position: 'top-right',
    duration: 3000
})

Vue.use(vuetify)

import Quill from 'quill'
import VueQuillEditor from 'vue-quill-editor'


const FontAttributor = Quill.import('formats/font');
FontAttributor.whitelist = [
    'Raleway', 'Roboto', 'sans-serif'
]
Quill.register(FontAttributor, true);


import { ImageDrop } from "quill-image-drop-module";
import ImageResize from '@taoqf/quill-image-resize-module';

Quill.register("modules/imageDrop", ImageDrop);
Quill.register('modules/imageResize', ImageResize);



import 'quill/dist/quill.core.css' // import styles
import 'quill/dist/quill.snow.css' // for snow theme
import 'quill/dist/quill.bubble.css' // for bubble theme

Vue.use(VueQuillEditor, {
    theme: 'snow',
    modules: {
        toolbar: [

            ['bold', 'italic', 'underline', 'strike'],
            ['blockquote', 'code-block'],
            //[{ 'header': 1 }, { 'header': 2 }],

            [{
                'color': [


                    "#000068",
                    "#000066",
                    "#009acf",
                    "#BADA55",
                    "#6fbf4f",
                    "#FF8400",
                    "#000000",
                    "#FFFFFF",

                ]
            }, {
                'background': [
                    "#000068",
                    "#000066",
                    "#009acf",
                    "#BADA55",
                    "#6fbf4f",
                    "#FF8400",
                    "#000000",
                    "#FFFFFF",
                ]
            }],
            [{ 'font': ['Raleway','Roboto'] }],
            [{ 'align': [] }],
            [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
            [{ 'size': ['small', false, 'large', 'huge'] }],

            [{ 'list': 'ordered' }, { 'list': 'bullet' }],
            [{ 'script': 'sub' }, { 'script': 'super' }],
            [{ 'indent': '-1' }, { 'indent': '+1' }],
            [{ 'direction': 'rtl' }],
            ['image'],

        ],
        imageDrop: true,
        imageResize: true,
    }
})

import VueSocialSharing from 'vue-social-sharing'

Vue.use(VueSocialSharing);


const app = new Vue({
    el: "#app",
    store: store,
    router,
    vuetify,

});



