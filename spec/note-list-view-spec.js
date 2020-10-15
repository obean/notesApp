class noteListViewSpec {
    constructor() {
      this.returnArray = []
    }

  static takesANoteListToInstantiate() {
    var noteListModelVar= new noteListModel
    var noteListViewVar = new noteListView(noteListModelVar)
    
   return assert.isTrue("Initiates with a noteListModel", noteListViewVar.noteList == noteListModelVar)
  }

  static outputsHTML() {
    var noteListModelVar= new noteListModel
    noteListModelVar.addNote("This is a note")
    noteListModelVar.addNote("This is a second note")
    var noteListViewVar = new noteListView(noteListModelVar)
  return  assert.isTrue("Outputs formatted HTML", noteListViewVar.output() == "<ul><li><div>This is a note</div></li><li><div>This is a second not</div></li></ul>")
  }



}


