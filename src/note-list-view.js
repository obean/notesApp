class noteListView {
  
  constructor(noteList) {
    this.noteList = noteList
  }

  returnNoteList() {
    return this.noteList.notes
  }

  output() {
    var htmlString = "<ul>";
    var notes = this.returnNoteList()

    var htmlString = "<ul>";
    for(var index = 0; index <= notes.length-1; index++) {
    htmlString += "<li><div>" + notes[index] + "</div></li>"
    if(index == notes.length-1) 
      { htmlString += "</ul>" }
    }

    return htmlString
  }

}