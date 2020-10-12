class noteListModelSpec {
  static checkArray() {
    var noteList = new noteListModel
    assert.isTrue("initiates with an array", Array.isArray(noteList.notes))
  }
  static addsNote() {
    var noteList = new noteListModel
    noteList.addNote("to do: smash it")
    assert.isTrue("stores notes in array", noteList.notes[0] == "to do: smash it")
  }

  static showsNotes() {
    var noteList = new noteListModel
    noteList.addNote("smashed it")
    noteList.addNote("smashing it")
    noteList.addNote("gonna be smashing it")
    assert.isTrue("returns notes", noteList.showNotes() == noteList.notes)
  }


}
noteListModelSpec.checkArray()
noteListModelSpec.addsNote()
noteListModelSpec.showsNotes()
// noteListModelSpec.
// noteListModelSpec.