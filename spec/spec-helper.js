class assert {

  static isTrue(text, assertionToCheck) {
      if (!assertionToCheck) {
        throw new Error("%c Assertion failed: " + text + " is not truthy", 'background-color: floralwhite; color: red');
      } 
      else {
        console.log("%c Smashed it: " + text, 'background-color: floralwhite; color: green')
      }
    }
    
}
