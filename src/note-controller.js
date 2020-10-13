// var myDiv = document.getElementById("app")
// console.log(myDiv)
// myDiv.innerHTML = "howdy"
class noteController {
  constructor(listModel) {
    this.listmodel = listModel
    this.listmodel.addNote("Favourite drink: seltzer")
  }
}