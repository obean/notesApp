class noteControllerSpec {
  constructor() {
    this.outputAray = new Array
  }
  static instantiatesWithnoteApp() {
    
    var listModel = new noteListModel
    var controller = new noteController(listModel)
    // console.log(listmodel.constructor.name)
    // console.log(controller.listmodel.constructor.name)
   return assert.isTrue("checking it instantiates with a list model", controller.listmodel.constructor.name === listModel.constructor.name)
  }

  static instantiatesWithnoteListView() {
    var noteView = new noteListView
    var listModel = new noteListModel
    var controller = new noteController(listModel)
   return assert.isTrue("it instantiates with note-list-view", controller.noteview.constructor.name === noteView.constructor.name)
  }

  static addsANote() {
    var listModel = new noteListModel
    var controller = new noteController(listModel)
    return  assert.isTrue("instantiates with a note ", controller.listmodel.showNotes()[0].text === "Favourite drink: seltzer")
  }

}




