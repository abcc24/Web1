var A;
var B;
A = 3;
B = "buongiorno a tutti";
console.log("Il tipo della var A è "+ typeof(A) + "\n");
console.log("Il tipo della var B è "+ typeof(B) + "\n");

var A;
A=2
console.log("Il tipo della var A è "+ typeof(A) + "\n");


///////////////////////////////


var iPosizione;
var sMiaStringa;
sMiaStringa = "farfalla"
iPosizione = sMiaStringa.indexOf("f");
if((iPosizione >= 0) || (iPosizione > 3)) ////le linee || vogliono dire "or"
	console.log("La f c'e' nei primi 4 caratteri")
else
	console.log("La f non c'e' nei primi 4 caratteri");


///////////////////////

function TerminaConLettera(sStringa, sTermine)
{
    //Prendi la lunghezza di sTermine

    //Usa indexOf partendo da lunghezza di sStringa - lunghezza di sTermine

    //ritorna 0 oppure 1, che vogliono dire False e True

    len = sStringa.length;
    len_termine = sTermine.length;
    if (len_termine > len)
        return 0;
    iPosizione = sStringa.indexOf(sTermine, len - len_termine)
    if (iPosizione >= 0)
        return 1
    else
        return 0
}

x = TerminaConLettera("paperino", "ino")
if(x == 1)
    console.log("paperino" + " termina con " + "ino")
else
    console.log("paperino" + " NON temina con " + "ino")
process.exit(0);

///////////////////////////////////////

///function Macchinetta (iSoldi, sCodiceProdotto)
///{
    ///if (sCodiceProdotto == "31")
        ///if (iSoldi < 1)
            ///return {null, iSoldi}; ///ritona nessun prodotto e i soldi inseriti
        ///if (iSoldi == 1)
            ///return {CocaCola, 0}; ///ritorna il prodotto selezionato e 0 come resto
        ///if (iSoldi >1)
            ///return {CocaCola, iSoldi - 1}; ///ritorna il prodotto e il resto

///}