class Formatter {
  static capitalize(string) {
    let length = string.length
    return string[0].toUpperCase() + string.slice(1, length)
  }

  static sanitize(string) {
    return string.replace(/[^A-Za-z0-9-' ]+/g, '');
  }

  static titleize(string) {
    let words = string.split(' ')
    let newWords = []
    let nonos = ['the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from']
    let arrayOfWords = string.split( " " )
        for ( let n = 0; n < words.length; n++ ) {
          if ( n == 0 ) {
            newWords.push( this.capitalize( words[ n ] ) )
          } else {
            if ( nonos.includes( words[ n ] ) ) {
              newWords.push( words[ n ] )
            } else {
              newWords.push( this.capitalize( words[ n ] ) )
            }
          }

        }
        return newWords.join( " " );
      }
}
