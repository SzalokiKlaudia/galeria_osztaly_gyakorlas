import Kartya from "./Kartya.js"

export default class Jatekter{

constructor(lista,kepekkontener){
    this.lista = lista
    this.kepekkontener = kepekkontener
    this.kartya = new Kartya(this.lista[0], $("#fokep"), $("#fokepbox"));
    this.#kisKepeketLetrehozzuk()
    this.#kisKepKlikkEsemeny()
    this.#torolAktivOsztaly()
  
   
}

#kisKepeketLetrehozzuk(){
    //console.log(this.kepekkontener)
    this.lista.forEach(elem => {
       
        const {id,leiras,eleres} = elem
        //console.log(elem.id)
       
        this.kepekkontener.append(`<img class = "kiskep" id="${id}" src= "kepek/${eleres}" alt= "${leiras}"></img>
                                `)
                               
        
    });
}

#kisKepKlikkEsemeny(){
   
    console.log(this.kepekkontener)
    const kisKepek = $("img.kiskep") //kiválasztom az img-ket
    
    console.log(kisKepek)

    $(kisKepek).each((index,elem) => { //végig iterálok a képeken
        $(elem).on("click",(event) => { //klikk eseményt teszek mindegyikre
            const kepId = $(elem).attr("id") //kinyerem az id-ját a kattintott elemre
            console.log(kepId)
            const szulo = event.target.parentNode
            //console.log(szulo)
            this.#torolAktivOsztaly(kisKepek,elem)
            const megjelenitendoKepIndexe = kepId

            const src = $(elem).attr("src"); // az img tagnek az src-je (Kisképnek)
            this.kartya.setFokep(src);
            //new Kartya(this.lista[megjelenitendoKepIndexe],elem,szulo)

        })
     
    })


}

#torolAktivOsztaly(kisKepek,elem){
    //console.log("beléptem")
    //console.log(kisKepek)

    $(kisKepek).each((index,kep) => { //végig iterálok a képeken
        $(kep).removeClass("active")
        $(elem).addClass("active")//csak a rákattintott elemünk lesz aktiv minden mást aktiv osztályt törlök először
       
        
        })





}

    
}