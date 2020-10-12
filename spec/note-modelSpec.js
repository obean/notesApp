class testingSuite {

 static itIsAnInstance(app) {
    var testApp = new app
    var text = "Is an instance of noteApp";
    assert.isTrue(text, testApp.constructor.name == 'noteApp')
  }

  static itTakesANoteAsAnArgumentAndStoresIt(app) {
    var app = new app("I have no idea what I'm doing")
    var text = "Take a note as an argument and stores it"

    assert.isTrue(text, app.text == "I have no idea what I'm doing")
  }
  
}


class assert {
  static isTrue(text, assertionToCheck) {
      if (!assertionToCheck) {
        throw new Error("Assertion failed: " + text + " is not truthy");
      } 
      else {
        console.log("%c Smashed it: " + text, 'background-color: floralwhite; color: green')
      }
    }
}


testingSuite.itIsAnInstance(noteApp)
testingSuite.itTakesANoteAsAnArgumentAndStoresIt(noteApp)