class singleNoteView {
  constructor(note) {
    this.note = note
  }

  htmlify() {
    return ("<div>" + this.note.text + "</div>")
  }

  quine() {
    console.log(this.constructor.name.toString())
  }
   

}