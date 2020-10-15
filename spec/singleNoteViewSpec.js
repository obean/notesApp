

class singleNoteViewSpec {

 static TakesNoteStoresIt() {
    var note = new noteApp("I miss ruby")
    
    var snv = new singleNoteView(note)
  return  assert.isTrue(" smnv stores a note with constructor", snv.note instanceof noteApp)
  }

  static HTMLifysThings() {
    var note = new noteApp("I miss ruby")
    var snv = new singleNoteView(note)
  return  assert.isTrue("it htmlifies things", snv.htmlify() === "<div>I miss ruby</div>")
  }
}