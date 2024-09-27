import Kartya from "./Kartya.js"

export default class Jatekter{

    constructor(lista,kepekkontener){
        this.lista = lista
        this.kepekkontener = kepekkontener
        this.megjelenitendoKepIndex = 0
        this.kartya = new Kartya(this.lista[this.megjelenitendoKepIndex], $("#fokep"), $("#fokepbox"));
        this.#kisKepeketLetrehozzuk()
        this.kisKepek = $(".kiskep")
        this.gombok = $(".gomb")
        this.#kisKepKlikkEsemeny()
        this.#torolAktivOsztaly()
        this.#gombKlikkEsemeny()
    }

    #kisKepeketLetrehozzuk(){
        //console.log(this.kepekkontener)
        this.lista.forEach(elem => {
            const {id,leiras,eleres} = elem
            //console.log(elem.id)
            this.kepekkontener.append(`<img class = "kiskep" id="${id}" src= "kepek/${eleres}" alt= "${leiras}"></img>`)
        });
    }

    #kisKepKlikkEsemeny(){
    
        console.log(this.kepekkontener)
        //const kisKepek = $("img.kiskep") //kiválasztom az img-ket
        
        console.log(this.kisKepek)

        $(this.kisKepek).each((index,elem) => { //végig iterálok a képeken
        
            if (index === 0) {
                $(elem).addClass("active");
            }
            $(elem).on("click",(event) => { //klikk eseményt teszek mindegyikre
                const kepId = $(elem).attr("id") //kinyerem az id-ját a kattintott elemre
                this.setMegjelenitendokepIndex(kepId)
                console.log(this.megjelenitendoKepIndex,"ez a kép indexe")
                this.kartya.setAktElem(this.megjelenitendoKepIndex)
                //console.log(szulo)
                this.#torolAktivOsztaly(this.kisKepek,elem)

                const src = $(elem).attr("src"); // az img tagnek az src-je (Kisképnek)
    
                this.kartya.setFokep(src);
                this.kartya.setCim(kepId)
                this.kartya.setLeiras(kepId)

                //new Kartya(this.lista[megjelenitendoKepIndexe],elem,szulo)

            })
        
        })


    }

    setMegjelenitendokepIndex(kepId){
        this.megjelenitendoKepIndex = kepId

    }

    #torolAktivOsztaly(kisKepek,elem){
        //console.log("beléptem")
        //console.log(kisKepek)

        $(kisKepek).each((index,kep) => { //végig iterálok a képeken
            $(kep).removeClass("active")
            $(elem).addClass("active")//csak a rákattintott elemünk lesz aktiv minden mást aktiv osztályt törlök először    
        })
    }

    #gombKlikkEsemeny() {
        
        $(this.gombok).each((index,gomb) => {
            $(gomb).on("click",(event) => {
                const gombId = $(gomb).attr("id")
                console.log(this.megjelenitendoKepIndex)    //itt még nulla

                if(gombId === "left" && this.megjelenitendoKepIndex >= 0){
                    if(this.megjelenitendoKepIndex === 0){  //ha nulla és left
                        this.megjelenitendoKepIndex = this.lista.length -1  //ugorjon a végére a képeknek
                    }
                    else{
                        this.megjelenitendoKepIndex--   //ha nullánál nagyobb akkor 1-el csökkenjen
                    }
                
                } 
                else if(gombId === "right" && this.megjelenitendoKepIndex >= 0) {
                    if(this.megjelenitendoKepIndex === this.lista.length-1){   
                        this.megjelenitendoKepIndex = 0
                    }
                    else{
                        this.megjelenitendoKepIndex++
                    }
                    
                }

                this.kartya.setAktElem(this.megjelenitendoKepIndex)
                this.#torolAktivOsztaly(this.kisKepek, this.kisKepek[this.megjelenitendoKepIndex])

                const src = 'kepek/' + this.lista[this.megjelenitendoKepIndex].eleres

                this.kartya.setFokep(src);
                this.kartya.setCim(this.megjelenitendoKepIndex)
                this.kartya.setLeiras(this.megjelenitendoKepIndex)
            })
        })
    }
}