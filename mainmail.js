//lista di email che possono accedere
var listaMail = ['diego@gmail.com', 'filippo@gmail.com', 'ziggy@gmail.com'];
console.log(listaMail);

//form richiesta mail
var mailUtente = prompt('Inserisci la tua email');
console.log(mailUtente);



var boolean = false;

//Array email + ciclo for

for (i = 0; i < listaMail.length; i++){
  if (mailUtente == listaMail[i]) {
    console.log(mailUtente + '=' + listaMail[i]);
    boolean = true;
  }
}

if (boolean){ // se è vero esiste la mail e fai accedere
  console.log('Puoi accedere');
}
else{ // se è falso la mail non è esiste e non puoi accedere
  console.log('Non puoi accedere');
}
