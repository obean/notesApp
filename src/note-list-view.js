class noteListView {
  
  constructor(noteList) {
    this.noteList = noteList
  }

  returnNoteList() {
    for(var i = 0; i <= this.noteList.notes.length-1; i ++) {
      return this.noteList.notes[i]
    }
    
    
    //this.noteList.notes
  }

  output() {
    var htmlString = "<ul>";
    var notes = this.noteList.notes//returnNoteList()

    var htmlString = "<ul>";
    for(var index = 0; index <= notes.length-1; index++) {
      
      var noteTwenty = notes[index].split('')
      while(noteTwenty.length > 20){
        noteTwenty.pop()
      }
    htmlString += "<li><div>" + noteTwenty.join('') + "</div></li>"
    if(index == notes.length-1) 
      { htmlString += "</ul>" }
    }

    return htmlString
  }

}