class noteModelSpec {
  
  constructor() {
    this.statementsArray = []
  }
 static statement() {
    return this.constructor()
  }
 static itIsAnInstance(app) {
    var testApp = new app
    var text = "Is an instance of noteApp";

   return assert.isTrue("hello", testApp.constructor.name == 'noteApp')
  }

  static itTakesANoteAsAnArgumentAndStoresIt(app) {
    var app = new app("I have no idea what I'm doing")
    var text = "Take a note as an argument and stores it"

   return assert.isTrue(text, app.text == "I have no idea what I'm doing")
  }
  static specRunner() {
    var y = new noteModelSpec;
    y.statementsArray.push(noteModelSpec.itIsAnInstance(noteApp))
    y.statementsArray.push(noteModelSpec.itTakesANoteAsAnArgumentAndStoresIt(noteApp))
    return y.statementsArray
  }
}
// specRunner() {
// y = new noteModelSpec;
// noteModelSpec.itIsAnInstance(noteApp)
// noteModelSpec.itTakesANoteAsAnArgumentAndStoresIt(noteApp)
// return y.statementsArray
// }
// specRunner()