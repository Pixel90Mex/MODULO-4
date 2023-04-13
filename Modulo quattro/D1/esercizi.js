/**1. Crea una funziona che calcoli e ritorni la somma di due numeri interi. 
 * Se i due valori sono uguali, ritorna il triplo della somma. */
function numeriInt(numUno, numDue){
  
let somma;
    if(numUno === numDue) {
        somma = (numUno + numDue) * 3;
    } else {
        somma = numUno + numDue;
    }
    console.log(somma);
}

//numeriInt(4, 3);

/**2. Crea una funzione che controlli sue numeri interi. 
 * Ritorna `true` se uno dei due è 50 o se la somma dei due è 50. */
function controlInt(numUno, numDue){

    if((numUno === 50 || numDue === 50) || (numUno + numDue === 50)) {
        console.log(true);
    } 
}

//controlInt(2, 5);

/**3. Crea una funzione che rimuova il carattere ad una specifica posizione da una stringa. 
 * Passa la stringa e la posizione come parametri e ritorna la stringa modificata. */
function remove(str, pos){

  parola = str.slice(0, pos - 1) + str.slice(pos, str.length);
  console.log(parola);
}

//remove("ciao", 3);

/**4. Crea una funzione che ritorni il valore più alto tra tre numeri interi. */
function highValue(numUno, numDue, numTre){

   const max = Math.max(numUno, numDue, numTre);
    console.log(max);
}

//highValue(10, 5, 3);

/**5. Crea una funzione che controlli se due numeri siano compresi tra 40 e 60 o tra 70 e 100. 
 * Ritorna `true` se rispecchiano queste condizioni, altrimenti ritorna `false`. */
function between(numUno, numDue){

    if((numUno > 40 && numUno < 60 && numDue > 40 && numDue < 60) 
        || (numDue > 70 && numDue < 100 && numUno > 70 && numUno < 100) ) {
            console.log(true);
        } else {
            console.log(false);
        }
}

//between(50, 66);

/**6. Crea una funzione che crei e ritorni una nuova stringa formata ripetendo un numero dato di volte una stringa data. 
 * Sia la stringa che il numero devono essere passate come parametri.
 */
function repeat(str, volte){

    var x = 0;
    var newStr="";

    while (x < volte){
        newStr += str;
        x++;
    }
    console.log(newStr);
}
//repeat('ciao', 2);

/**7. Crea una funzione che accetti un nome di città come parametro e ritorni il nome stesso se inizia con “Los” o “New”,
 *  altrimenti ritorni `false`. */
function city(name){

   if(name.substring(0, 3).includes("Los") || name.substring(0, 3).includes("New")){
    
    return true;
   } else {
    
    return false;
   }
  
}

//console.log(city("Los Angeles"));

/**8. Crea una funzione che calcoli e ritorni la somma di tutti gli elementi di un array con tre elementi.
 * L’array deve essere passato come parametro. */
function sum(array){

    var sum = 0;
    for(let value of array){
        sum+=value;
    }
    return sum;
}
//console.log(sum([2, 3, 9]));

/**9. Crea una funzione che controlli se un array di due elementi contiene il numero 1 o il numero 3. 
 * Se li contiene, ritorna `true`, altrimenti ritorna `false`. */
function controlAr(array){

   if(array.includes(1) || array.includes(3)){
    return true;
   } 
    return false;

}
//console.log(controlAr([4, 4, 1]));

/**10. Crea una funzione che controlli che un array di due elementi NON contenga i numeri 1 o 3. 
 * Se NON li contiene, ritorna `true`, altrimenti ritorna `false`. */
function controlArTwo(array){

    for(let i = 0; i < array.length; i++){
        if((array[i] === 1) || (array[i] === 3)){
            return false;
        } 
    return true;
    }
}
//console.log(controlArTwo([4, 4, 4]));

/**11. Crea una funzione per trovare la stringa più lunga in un array di stringhe.
 * Passa l’array come parametro e ritorna la stringa più lunga.*/
function searchStr(array){

    var str = "";

    for(let value of array){
        if(str.length < value.length){
            str = value;
        }
    }
   return str;
}
//console.log(searchStr(["ciao", "ciao117", "ciao199"]));

/**12. Crea una funzione per trovare il tipo di un angolo i cui gradi sono passati come parametro.
Angolo acuto: meno di 90° ⇒ ritorna “acuto”
Angolo ottuso: tra i 90° e i 180° gradi ⇒ ritorna “ottuso”
Angolo retto: 90° ⇒ ritorna “retto”
Angolo piatto: 180° ⇒ ritorna “piatto” */
function angoli(gradi){

    if(gradi < 90){
        return "acuto";
    } else if (gradi > 90 && gradi < 180) {
        return "ottuso";
    } else if (gradi === 90){
        return "retto";
    } else {
        return "piatto";
    }
}
//console.log(angoli(45));

/**13. Crea una funzione che trovi e ritorni **l’indice** del numero più alto 
 * in un array passato come parametro. */
function high(array){

    var max = 0;
    for(let i = 0; i < array.length; i++){
        max = Math.max(max, array[i]);
    }
    return max;
}
//console.log(high([10, 20, 30, 4, 5]));

/**14. Crea una funzione per trovare e ritornare il numero PARI più alto 
 * in un array di numeri passato come parametro. */
function pari(array){
    
    var max = 0;
    for(let value of array){
        if(value % 2 === 0){
            max = Math.max(max, value);
        } 
    }
    return max;
}
//console.log(pari([1, 13, 7, 4]));

/**15. Crea una funzione per controllare che due numeri (passati come parametri) siano uno positivo e uno negativo. 
 * Ritorna `true` se la condizione è applicata, `false` se non lo è. */
function numeri(numUno, numDue){

    if(numUno < 0 && numDue > 0){
        return true;
    } else if (numUno > 0 && numDue < 0){
        return true;
    }

    return false;
}
//console.log(numeri(1, -2));

/**16. Crea una funzione per creare e ritornare una nuova stringa che abbia i primi tre caratteri in minuscolo e gli altri in maiuscolo.
 * Se la stringa è più corta di tre caratteri, tutta la stringa deve essere in maiuscolo. La stringa originale deve essere passata come parametro. */
function upperString(string){

    if(string.length < 3){
        return string.toUpperCase();
    } else {
       return string.substring(0, 3).toUpperCase() + string.substring(3);
    }
}
//console.log(upperString("ci"));

/**17. Crea una funzione che calcoli la somma di due numeri passati come parametri. 
 * Se la loro somma è compresa tra 50 e 80, ritorna `65`, altrimenti ritorna `80`. */
function sumNumbers(numUno, numDue){

    if(numUno + numDue > 50 && numUno + numDue < 80){
        
        return '65';
    } 
    return '80';
}
//console.log(sumNumbers(30, 30));

/**18. Crea una funzione per convertire un numero (passato come parametro) in una stringa basandoti su questi criteri:
Il numero è divisibile per 3 ⇒ ritorna “Diego”
Il numero è divisibile per 5 ⇒ ritorna “Riccardo”
Il numero è divisibile per 7 ⇒ ritorna “Stefano”
Se il numero non ha 3, 5 o 7 come divisore, ritorna il numero originale.
⚠️ Se il numero è divisibile per più di una di queste opzioni, ritorna l’unione delle due stringhe. 
Es. 15 è divisibile per 3 e per 5, quindi il valore ritornato sarebbe “DiegoRiccardo”. */

function converti(num){
  
    let risultato = "";
  
    if (num % 3 === 0) {
      risultato += "Diego";
    }
  
    if (num % 5 === 0) {
      risultato += "Riccardo";
    }
  
    if (num % 7 === 0) {
      risultato += "Stefano";
    }

    if (risultato === "") { 
        return num.toString(); 
      } else { 
        return risultato;
      }
    
}
//console.log(converti(45));


/**19. Crea una funzione che crei un acronimo a partire da una frase. 
 * Es. “Fabbrica Italiana Automobili Torino” deve ritornare “FIAT”.*/

function isUpperCase(str) { 
    
    return (str == str.toUpperCase()); } 
    
//function isLowerCase(myString) { return (myString == myString.toLowerCase()); } 


function acronimo(str){

    var acronimo="";
   
   for(let i = 0; i < str.length; i++){
    if(isUpperCase(str[i]))
    acronimo += str[i];
   }

    return acronimo;
}
//console.log(acronimo("Fabbrica Italiana Automobili Torino"));

//EXTRA

//**1. Partendo da una stringa (passata come parametro), ritorna il carattere più usato nella stringa stessa. */
function caratterePiuUsato(str){
    const ar = {a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w, x, y, z };

    let char = null;

    let i = 0;
    while(i < ar.length){
        if(str.charAt(i) )
    }

}

/**2. Controlla che due stringhe passate come parametri siano gli anagrammi l’una dell’altra. 
 * Ignora punteggiatura e spazi e ricordate di rendere la stringa tutta in minuscolo.
 *  Se le due parole sono anagrammi, ritorna `true`, altrimenti ritorna `false`. */

function anagrammi(){
    /**

    //controllo lunghezza
    if(ar.length !== ar2.length){
        return false;
    }

    //controllo anagrammi
    for(let i = 0; i < ar.length; i++){

        for(let j = 0; j < ar2.length; j++){

            if (ar[i] !== ar2[j]){
                
            }
        } 
    }
    
    let def = ar.join('');
    let def2 = ar2.join('');*/

    //return def + ", " + def2;

    let arr = ["andrea", "aerdna"];

    let map = new Map();

    for(let word of arr){
        let sorted = word.toLowerCase().split('').sort().join('');
        map.set(sorted, word);
    }

    return Array.from(map.values());
}

console.log(anagrammi("andrea", "aerdna"));