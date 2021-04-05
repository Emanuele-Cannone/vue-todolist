// inserire il nuovo todo
// modificare un todo FATTO DA ILARIA
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
                nome: 'simone',
                cognome: 'piacentini',
                numero: '123456789',
                mostraDettagli: false
            },
            {
                nome: 'danilo',
                cognome: 'appolloni',
                numero: '123456789',
                mostraDettagli: false
            },
            {
                nome: 'priscilla',
                cognome: 'lilli',
                numero: '123456789',
                mostraDettagli: false
            },
            {
                nome: 'davide',
                cognome: 'corsini',
                numero: '123456789',
                mostraDettagli: false
            },
            {
                nome: 'cristiano',
                cognome: 'tarconi',
                numero: '123456789',
                mostraDettagli: false
            },
            {
                nome: 'cristina',
                cognome: 'boolean',
                numero: '123456789',
                mostraDettagli: false
            },
        ],
        nuovoContatto: {
            nome: '',
            cognome: '',
            numero: '',
            mostraDettagli: false
        },

        contattiEliminati: [],
        visibilita: false,
        aggiungi: false
        

    },
    methods:{
        addContatto(){
            if (this.nuovoContatto.nome.length > 0 &&
                this.nuovoContatto.cognome.length > 0 &&
                this.nuovoContatto.numero.length > 0){

                    this.contatti.push({
                        nome: this.nuovoContatto.nome,
                        cognome: this.nuovoContatto.cognome,
                        numero: this.nuovoContatto.numero,
                    });
                    // in questo modo svuoto i campi
                    this.nuovoContatto.nome = '';
                    this.nuovoContatto.cognome = '';
                    this.nuovoContatto.numero = '';
                    

                // in questo modo aggiungo un contatto
            } else {
                alert('completa tutti i campi')
            }
        },
        deleteContatto(index){
            // per eliminare il contatto scelto devo prendere l'index
            // lo faccio entrare nel cestino
            this.contattiEliminati.push(this.contatti[index]);
            // in questo elimino un contatto
            this.contatti.splice(index,1);
        },

        deleteDefinitivo(index){
            // in questo elimino un contatto definitivamente
            this.contattiEliminati.splice(index, 1);
        },

        ripristinoEliminato(index){
            // lo faccio rientrare nella lista contatti
            this.contatti.push(this.contattiEliminati[index]);
            // lo elimino dalla lista contattiEliminati
            this.contattiEliminati.splice(index, 1);
        },
        
        eliminaTutto(){
            if(this.contatti.length > 0){
            this.contatti.forEach(element => {
                this.contattiEliminati.push(element);
            });
            this.contatti.splice(0);
            };
        },

        eliminaTuttoDefinitivo(n){
            this.contattiEliminati.splice(n);
        },

        modifica(index){
            this.contatti[index].nome = prompt('modifica nome');
            this.contatti[index].cognome = prompt('modifica cognome');
            this.contatti[index].numero = prompt('modifica numero');
        },

        mostraNascondiLista(){
            if (this.visibilita == false){
                this.visibilita = true; 
            } else {
                this.visibilita = false;
            }
        },

        mostraNascondiDettagli(index){
            if (this.contatti[index].mostraDettagli == false) {
                this.contatti[index].mostraDettagli = true;
            } else {
                this.contatti[index].mostraDettagli = false;
            }

            console.log(index);
            console.log(this.contatti[index].mostraDettagli);
        },

        mostraNascondiAdd(){
            if (this.aggiungi == false) {
                this.aggiungi = true;
            } else {
                this.aggiungi = false;
            }
        },
    }
});