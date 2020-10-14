class assert {

  static isTrue(text, assertionToCheck) {
      if (!assertionToCheck) {
        return (" Assertion failed: " + text + " is not truthy") // 'background-color: floralwhite; color: red');
      } 
      else {
        return (" Smashed it: " + text ) // 'background-color: floralwhite; color: green')
      }
    }
    
}
