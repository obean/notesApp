// var myDiv = document.getElementById("app")
// console.log(myDiv)
// myDiv.innerHTML = "howdy"
class noteController {
  constructor(listModel) {
    this.listmodel = listModel
    this.listmodel.addNote("Favourite drink: seltzer")
    this.noteview = new noteListView(this.listmodel)
    this.lastHash = null
  }

  getHtml() {
    return this.noteview.output();
  }

  insertHtml() {
    var noteHtml = document.getElementById('app')
    console.log(noteHtml)
    noteHtml.innerHTML = this.getHtml();
  }
  noteFinder(id) {
    console.log(this.notelistModel.noteList.reduce(function(note){return note.id == id}))
      return this.notelistModel.noteList.reduce(function(note){return note.id == id}).text //.filter(a => a.id != 1).text
      //this.notelistView.noteList.noteList.filter(a => a.id == id).text
   } 

   noteFinder(id) {
     return this.listmodel.showNotes().reduce(function (note) {return note.id == i}).text
   }
   getNoteID() {
     return window.location.hash.split('#notes/')[1]
   }
   resetNotes() {}
   addNoteHtml() {
     const myDiv = document.getElementById(Number(this.getNoteID()))
     myDiv.innerHTML = this.noteFinder(Number(this.getNoteID()))
   }

}


var listModel = new noteListModel
var controller = new noteController(listModel)
controller.insertHtml();
window.addEventListener("hashchange", function(){controller.addNoteHtml()})
