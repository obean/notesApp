class testingSuite {
// beforeEach() {
//   var app = new noteApp
// }
 static itIsAnInstance() {
    var app = new noteApp
    if(2 != 2){
      console.log("did not smash it")
      throw new Error("how did you screw this one up")

    }else {console.log("smashed it")}
  }

  static itTakesANoteAsAnArgumentAndStoresIt(app) {
    var app = new app("I have no idea what I'm doing")
    if(app.text != "I have no idea what I'm doing"){
      console.log("did not smash it")
      throw new Error("how did you screw this one up")
    } else {
      console.log("clearly you do know what you're doing, smashing it")
    }
  }
}
testingSuite.itIsAnInstance()
testingSuite.itTakesANoteAsAnArgumentAndStoresIt(noteApp)