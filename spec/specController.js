

 addHTML = function(html) {
var placeHolder = document.getElementById("placeholder")
placeholder.insertBefore(html, placeHolder)
 }
 formatHTML = function(array) {
   var stem = ''
  for(var i = 0; i <= array.length -1; i ++){
    stem += ("<li>" + array[i] + "</li>")
  }
  return ("<div>" + stem + "<div>")
 }

 y = new noteListViewSpec
 addHTML()
 y.addArray()
