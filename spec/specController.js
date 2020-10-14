addHTML = function(html,id) {
  const placeHolder = document.getElementById(id)
  const newDiv = document.createElement("div")
  placeHolder.appendChild(newDiv)
  newDiv.innerHTML  = html
}

getColour = function(statementOutput) {
  if(statementOutput.match(/failed/) != null){
    return "red"
  
  }else if (statementOutput.match(/Smashed/)!= null){
    return "green"
  }
}
formatHTML = function(array) {
   var stem = ''
  for(var i = 0; i <= array.length -1; i ++){
    stem += ('<li style="color:' + getColour(array[i]) +';">' + array[i] + "</li> ")
  }
  return ( stem )
 }
 classParentDiv = function(className) {
  const newDiv = document.createElement("div")
  y = new className
  const classId = quineda(className)
  newDiv.setAttribute("id", classId)
  document.body.appendChild(newDiv)
  document.getElementById(classId).innerHTML  = ("<h1>" + classId + "</h1>")
 }
 quineda = function(className) {
   var instance = new className
   return y.constructor.name
 }
runSpec = function(className) {
  classParentDiv(className)
  var classInstance = new className
  console.log(classInstance.constructor.name)
  addHTML(formatHTML(classInstance.addArray()), classInstance.constructor.name)
}
runSpec(noteListViewSpec)
runSpec(noteControllerSpec)
runSpec(noteListModelSpec)
runSpec(noteModelSpec)
runSpec(singleNoteViewSpec)