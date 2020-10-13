class assert {

  static isTrue(text, assertionToCheck) {
      if (!assertionToCheck) {
        y = "%c Assertion failed: " + text + " is not truthy" + 'background-color: floralwhite; color: red'
        return (y);
      } 
      else {
        return ("%c Smashed it: " + text + 'background-color: floralwhite; color: green')
      }
    }
    
}
