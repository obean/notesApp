

class singleNoteViewSpec {

 static TakesNoteStoresIt() {
    var note = new noteApp("I miss ruby")
    
    var snv = new singleNoteView(note)
    assert.isTrue(" smnv stores a note with constructor", snv.note instanceof noteApp)
  }

  static HTMLifysThings() {
    var note = new noteApp("I miss ruby")
    var snv = new singleNoteView(note)
    assert.isTrue("it htmlifies things", snv.htmlify() === "<div>I miss ruby</div>")
  }
   

}

singleNoteViewSpec.TakesNoteStoresIt()
singleNoteViewSpec.HTMLifysThings()