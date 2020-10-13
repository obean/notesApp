class noteListModelSpec {
  static checkArray() {
    var noteList = new noteListModel
    assert.isTrue("initiates with an array", Array.isArray(noteList.notes))
  }

  static addsNote() {
    var noteList = new noteListModel
    noteList.addNote("to do: smash it")
    assert.isTrue("stores notes in array", noteList.notes[0].text == "to do: smash it")
  }

  static showsNotes() {
    var noteList = new noteListModel
    noteList.addNote("smashed it")
    noteList.addNote("smashing it")
    noteList.addNote("gonna be smashing it")
    assert.isTrue("returns notes", noteList.showNotes() == noteList.notes)
  }

  static hasUniqueID() {
    var noteList = new noteListModel
    noteList.addNote("this is a note")
    noteList.addNote("this is another note")
    assert.isTrue('has ID 1', noteList.notes[0].id === 1)
    assert.isTrue('has ID 2', noteList.notes[1].id === 2)
  }

}

noteListModelSpec.checkArray()
noteListModelSpec.addsNote()
noteListModelSpec.showsNotes()
noteListModelSpec.hasUniqueID()

// noteListModelSpec.
// noteListModelSpec.