import { KUTYALISTA } from "./adat.js";
import { atlagEletkor, kartyaOsszeallitas } from "./fuggvenyek.js";

let atlag = atlagEletkor(KUTYALISTA)
console.log(atlag)


/* HTML-be az adatok p tagek közé*/
/* megfogjuk a div-et*/
const adatokELEM = document.getElementById("adatok")
// beleírjuk az értéket
adatokELEM.innerHTML=`<p>A kutyák átlagéletkora ${atlag} év</p>`

// jelenítsd meg egy kutya div-be az adatokat! 
const kartyakADAT = document.querySelector("#kutyak")
kartyakADAT.innerHTML+=kartyaOsszeallitas(KUTYALISTA)

// class névvel megadott elemek elérése
console.log(adatokELEM)
const kutyaELEMEK=document.getElementsByClassName("kutya")
console.log(kutyaELEMEK)//HTMLCollection (lista)
const elsoKutyaKartya = kutyaELEMEK[0]
console.log(elsoKutyaKartya)

//querySelectorAll
const kutyaELEMEK2=document.querySelectorAll(".kutya")
console.log(kutyaELEMEK2)//NodeList (lista)
const elsoKutyaKartya2 = kutyaELEMEK[0]
console.log(elsoKutyaKartya2)


//hogy érem el a második kártya képét?
const kepELEMEK=document.querySelectorAll(".kutya img")
console.log(kepELEMEK[1])

// eseménykezelés 
// megfogjuk a gombot
const gombELEM = document.querySelector(".kutya button")
//rátesszük az eseménykezelőt
for (let index = 0; index < KUTYALISTA.length; index++) {
    gombELEM[index].addEventListener("click", gombKattintas)
    
}

// meghatározzuk mit csináljon

function gombKattintas(){
    alert("Kiválasztottál egy kutyát")
}

//hogyan fogunk meg id-val egy elemet?
//hogyan fogunk meg egy class névvel megadott elemet? (listát ad vissza, konkrét elemre []-tudunk hivatkozni)
