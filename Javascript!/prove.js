function capitalizeFirstLetter(string)
{
    return string.charAt(0).toUpperCase() + string.slice(1);
}

function Verificanumero(sNum)
{
    for(i=0; i<sNum.length; i++)
        {
            if ((sNum.charAt(i) < '0') || (sNum.charAt(i) > '9'))
                return false;
        }
        return true;
}

function parseIntMy(sNum)
{
    bEsito = Verificanumero(sNum);
    if (bEsito == true)
        return parseInt(sNum);
    var sNum1 = '0';
    for (i=0; i<3; i++)
    {
        sNum1 = prompt("Attenzione, numero errato, riprova ");
        bEsito = Verificanumero(sNum1);
        if (bEsito == true)
            return parseInt(sNum1);
    }
}


var bEsito = Verificanumero("38");
if (bEsito == true)
    console.log("Mi hai passato un numero")
else
    console.log("Non mi hai passato un numero");
process.exit(0);


console.log ("ciao");

const prompt = require('prompt-sync')();

//str = prompt('Enter a string: '); //str è la variabile, prompt è come input
//console.log ("Hai inserito prima " + str); //console.log("") è come print
//str = capitalizeFirstLetter(str);
//console.log("Hai inserito dopo " + str);
//process.exit(0); questo è per eseguire soltanto le funzioni prima di questa riga!


var int1 = prompt("Inserisci primo numero: ");
var int10 = parseInt(int1)
var int2 = prompt("Inserisci secondo numero: ");
var int20 = parseInt(int2)
var somma = int10 + int20
console.log ("La somma è: " + somma)
