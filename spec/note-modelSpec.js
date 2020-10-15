class noteModelSpec {

 static itIsAnInstance(app) {
    var testApp = new app
    var text = "Is an instance of noteApp";
  return  assert.isTrue(text, testApp.constructor.name == 'noteApp')
  }

  static itHasIdZero() {
    var newNote = new noteApp("This is a note", 0)
   return assert.isEqual('testing ID', 0, newNote.id)
  }

  static itTakesANoteAsAnArgumentAndStoresIt(app) {
    var app = new app("I have no idea what I'm doing")
    var text = "Take a note as an argument and stores it"

  return  assert.isEqual(text, app.text, "no idea what I'm doing")
  }



}