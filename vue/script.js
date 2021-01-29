// inserire il nuovo todo
// modificare un todo 
// spostare il todo nel cestino
// pulsante per spostare tutti i todo nel cestino 
// ripristinare dal cestino un todo 
// eliminare definitivamente un todo dal cestino
// pulsante per eliminare tutti i todo del cestino

var app = new Vue ({
    el: '#app',
    data: {
        contatti: [
            {
                nome: 'papa',
                cognome: 'francesco',
                numero: '123456789'
            },
            {
                nome: 'lady',
                cognome: 'gaga',
                numero: '123456789'
            },
            {
                nome: 'fiorella',
                cognome: 'milano',
                numero: '123456789'
            },
            {
                nome: 'pippo',
                cognome: 'boolean',
                numero: '123456789'
            },
            {
                nome: 'produzione',
                cognome: 'orticola',
                numero: '123456789'
            },
            {
                nome: 'paola',
                cognome: 'zia',
                numero: '123456789'
            },
        ],
        nuovoContatto: {
            nome: '',
            cognome: '',
            numero: ''
        },
    },
    methods:{

        // in questo modo cambio il valore delle key in nuovoContatto
        addContatto(){
            this.contatti.push({
                nome: this.nuovoContatto.nome,
                cognome: this.nuovoContatto.cognome,
                numero: this.nuovoContatto.numero,
            });
            // in questo modo svuoto i campi
            this.nuovoContatto.nome = '';
            this.nuovoContatto.cognome = '';
            this.nuovoContatto.numero = '';
        }
    },
});