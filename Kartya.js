export default class Kartya{
   #elem = []
   
   constructor(elem,fokep,fokepBox){
      this.#elem= elem
      this.fokep = fokep
      this.fokepBox = fokepBox
      this.#fokepMegjelenit()
      this.#feliratokMegjelenit()
   }

   #fokepMegjelenit(){
      //console.log(this.fokep)
      this.fokep.attr("src","kepek/" + this.#elem.eleres)
      
   }

   #feliratokMegjelenit(){
      this.#feliratokTorlese()
      this.fokepBox.prepend(`<h4 class = "focim">${this.#elem.cim}</h4>
                           `)
      this.fokepBox.append(`<p class = "leiras">${this.#elem.leiras}</p>
                           `)

   }

   #feliratokTorlese() {
      this.fokepBox.find(".focim").remove()
      this.fokepBox.find(".leiras").remove()
   }

   foKepValtozik(){
      const kisKepId = this.#elem.id
      console.log(kisKepId)
   }

   setFokep(src){
      this.fokep.attr("src", src);
      console.log("Elérési útvonal" + src)
   }


}