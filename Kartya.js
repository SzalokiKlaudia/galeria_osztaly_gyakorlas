import { kepek } from "./adatok.js"
import Jatekter from "./Jatekter.js"

export default class Kartya{
   #aktElem = {}
   
   constructor(aktElem,fokep,fokepBox){
      this.#aktElem= aktElem //lsta valahanyadik eleme
      console.log(aktElem)
     
      this.fokep = fokep
      this.fokepBox = fokepBox
      console.log(this.fokep)
      this.#fokepMegjelenit()
      this.#feliratokMegjelenit()
      this.foCim = $(".focim")
      this.leiras = $(".leiras")
      this.gombok = $(".gomb")
      //console.log(this.gombok) meghívtam a gombokat
     
  
   }

   #fokepMegjelenit(){
      console.log(this.#aktElem.eleres)
      
      this.fokep.attr("src","kepek/" + this.#aktElem.eleres)
      
   }

   #feliratokMegjelenit(){
      this.#feliratokTorlese()
      this.fokepBox.prepend(`<h4 class = "focim">${this.#aktElem.cim}</h4>
                           `)
      this.fokepBox.append(`<p class = "leiras">${this.#aktElem.leiras}</p>
                           `)

   }

   #feliratokTorlese() {
      this.fokepBox.find(".focim").remove()
      this.fokepBox.find(".leiras").remove()
   }

  

   setFokep(src){
      this.fokep.attr("src", src);
      console.log("Elérési útvonal" + src)
   }

   setCim(index){
      //console.log(this.foCim)
     const kepCim = kepek[index].cim
      $(this.foCim).text(kepCim);


   }

   setLeiras(index){
     
      const kepLeiras = kepek[index].leiras
      $(this.leiras).text(kepLeiras)

   }

   setAktElem(indexedik){
      //console.log(kepek[indexedik])
      this.#aktElem = kepek[indexedik]
    
   }


}