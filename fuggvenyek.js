/* Mennyi a kutyák átlagéletkora? */


export function atlagEletkor(lista){
    let ossz = 0
    for (let index = 0; index < lista.length; index++) {
        ossz += lista[index].kor
    }
    ossz=ossz/lista.length
    return ossz

}

export function kartyaOsszeallitas(lista){
    let szoveg =""
    for (let index = 0; index < lista.length; index++) {
        szoveg += `
        <div class= "kutya">
                <div id="kep"><img src='${lista[index].kep}' alt='${lista[index].nev}'></div>
                <h3>Név: ${lista[index].nev}</h3>
                <p>Kor: ${lista[index].kor}</p>
                <p>Lábak száma: ${lista[index].lab}</p>
                <p>Fajta: ${lista[index].fajta}</p>
                <button>Kiválaszt</button>
        </div>
        `
        
    } 
    return szoveg
}
