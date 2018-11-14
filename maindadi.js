//Utente 1 lancia  i dadi

//primo dado
var numeroLancioUno = Math.floor(Math.random() * 6 + 1);
console.log(numeroLancioUno);

//secondo dado
var numeroLancioUno = Math.floor(Math.random() * 6 + 1);
console.log(numeroLancioUno);

//////////////////////////////////////////

//Utente 2 lancia i dadi

//primo dado
var numeroLancioDue = Math.floor(Math.random() * 6 + 1);
console.log(numeroLancioDue);

//secondo dado
var numeroLancioDue = Math.floor(Math.random() * 6 + 1);
console.log(numeroLancioDue);



// Morale :
// il lancio più alto vince altrimenti pareggio

if (numeroLancioUno > numeroLancioDue){
  console.log('Utente 1 : Hai vinto');

}
else if (numeroLancioUno < numeroLancioDue){
  console.log('Utente 2 : Hai vinto');

}

else {
  console.log('Pareggio');

}
