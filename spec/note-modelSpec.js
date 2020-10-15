class noteModelSpec {

 static itIsAnInstance() {
    var testApp = new noteApp
    var text = "Is an instance of noteApp";
  return  assert.isTrue(text, testApp.constructor.name == 'noteApp')
  }

  static itHasIdZero() {
    var newNote = new noteApp("This is a note", 0)
   return assert.isEqual('testing ID', 0, newNote.id)
  }

  static itTakesANoteAsAnArgumentAndStoresIt() {
    var app = new noteApp("I have no idea what I'm doing")
    var text = "Take a note as an argument and stores it"

  return  assert.isEqual(text, app.text, "no idea what I'm doing")
  }



}