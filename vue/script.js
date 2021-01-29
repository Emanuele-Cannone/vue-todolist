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
        contatto: {nome, cognome, numero} = this.nuovoContatto
    },
    methods:{
        
        // in questo modo destrutturo le informazioni nell'oggetto
        
        // in questo modo cambio il valore delle key in nuovoContatto
        
        addContact(nome, cognome, numero) {
        this.nome.push(nuovoContatto.nome),
        this.cognome.push(nuovoContatto.cognome),
        this.numero.push(nuovoContatto.numero)
        }
    }
});