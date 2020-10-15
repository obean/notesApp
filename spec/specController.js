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
  const classId = quineda(className)
  newDiv.setAttribute("id", classId)
  document.body.appendChild(newDiv)
  document.getElementById(classId).innerHTML  = ("<h2>" + classId + "</h2>")
 }
// kinda like a quine, not really, but i like the name
 quineda = function(className) {
   var instance = new className
   return instance.constructor.name
 }
 getFunctions = function(className) {
  var uncutFunctions = (className.toString().match(/static\s[a-zA-Z]+(\(\))/g))
  var evaluatedFunctions = []
  for(let i = 0; i <= uncutFunctions.length-1; i ++){
    uncutFunctions[i] = eval(quineda(className) + "." + uncutFunctions[i].replace("static ", ""))
    evaluatedFunctions.push(uncutFunctions[i])
     console.log(uncutFunctions[i])
   }
  return evaluatedFunctions
}
runSpec = function(className) {
  classParentDiv(className)
  var classInstance = new className
  console.log(classInstance.constructor.name)
  addHTML(formatHTML(getFunctions(className)), classInstance.constructor.name)
}



runSpec(noteListViewSpec)
runSpec(noteControllerSpec)
runSpec(noteListModelSpec)
runSpec(noteModelSpec)
runSpec(singleNoteViewSpec)


