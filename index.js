class Formatter {
  static capitalize(str){
    return str.charAt(0).toUpperCase() + str.slice(1)
  }
  static sanitize(str){
    return str.replace( /[^A-Za-z0-9 '-]/g, '')
  }

  static titleize( sen) {
     let exceptions = [ 'the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from' ]
     let result = [];
     let arr = sen.split( " " )
     for ( let n = 0; n < arr.length; n++ ) {
       if ( n == 0 ) {
         result.push( this.capitalize( arr[ n ] ) )
       } else {
         if ( exceptions.includes( arr[ n ] ) ) {
           result.push( arr[ n ] )
         } else {
           result.push( this.capitalize( arr[ n ] ) )
         }
       }
     }
     return result.join( " " );
   }
}
