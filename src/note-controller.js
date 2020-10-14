// var myDiv = document.getElementById("app")
// console.log(myDiv)
// myDiv.innerHTML = "howdy"
class noteController {
  constructor(listModel) {
    this.listmodel = listModel
    this.listmodel.addNote("Favourite drink: seltzer")
    this.noteview = new noteListView(this.listmodel)
  }

  getHtml() {
    return this.noteview.output();
  }

  insertHtml() {
    var noteHtml = document.getElementById('app')
    console.log(noteHtml)
    noteHtml.innerHTML = this.getHtml();
  }



}

var listModel = new noteListModel
var controller = new noteController(listModel)
controller.insertHtml();
