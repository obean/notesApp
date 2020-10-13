class noteModelSpec {

 static itIsAnInstance(app) {
    var testApp = new app
    var text = "Is an instance of noteApp";
    assert.isTrue(text, testApp.constructor.name == 'noteApp')
  }

  static itHasIdZero() {
    var newNote = new noteApp("This is a note", 0)
    assert.isTrue('testing ID', newNote.id === 0)
  }

  static itTakesANoteAsAnArgumentAndStoresIt(app) {
    var app = new app("I have no idea what I'm doing")
    var text = "Take a note as an argument and stores it"

    assert.isTrue(text, app.text == "I have no idea what I'm doing")
  }

}

noteModelSpec.itIsAnInstance(noteApp)
noteModelSpec.itTakesANoteAsAnArgumentAndStoresIt(noteApp)
noteModelSpec.itHasIdZero()