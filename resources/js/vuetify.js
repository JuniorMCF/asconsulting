import Vue from 'vue'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'

import es from 'vuetify/src/locale/es.ts'
Vue.use(Vuetify)

export default new Vuetify({
    theme: {
        themes: {
            light: {
                primary: '#000068',//color as
                secondary: '#BADA55',
                accent: '#FF8400',
                alternative:'#000066',
                sky:"#009acf",
                secondary_light:"#6fbf4f",
                error: '#B70505',
                grey:'#919090',
                gray:'#42677C',
                success:"#7fcd5e",
                linkedin:"#0077b5",
                facebook:"#4464a3",
                twitter:"#55acee"
            },
        },
    },
    lang: {
        locales: { es },
        current: 'es',
      },
})
