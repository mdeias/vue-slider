

const app = new Vue({

    el: '#app',

    data: {
        immagini: [

            'img/01.jpg', 'img/02.jpg', 'img/03.jpg', 'img/04.jpg', 'img/05.jpg'
        ],

        titles: [
            'Svezia', 'Svizzera', 'Gran Bretagna', 'Germania', 'Paradise'
        ],

        // creo la proprietà contatore per ciclare l'array
        contatore: 0,

        attiva: "",

    },


    mounted(){
        setInterval(() => {
            this.slideUp();
        }, 1000)
    },

    methods: {
        slideUp(){
            this.contatore++;
            if (this.contatore > this.immagini.length -1){
                this.contatore = 0;
            }
        },

        slideDown(){
            this.contatore--;
            if (this.contatore < 0){
                this.contatore = this.immagini.length -1;
            }
        },

    },

});