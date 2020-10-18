class Formatter {
  //add static methods here
  static capitalize(string){
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
  static sanitize(string){
    return string.replace( /[^A-Za-z0-9 '-]/g, '' )
  }
  static titlize(string){
    let exceptions = ['the', 'a', 'an', 'but', 'of', 'and', 'for', 'by', 'at'];
    let words = string.split(' ');
    let result = [];
    for(let w = 0; w < words.length; w++){
      if (w === 0){
        result.push(this.capitalize(words[w]))
      }
      else if(exceptions.includes(words[w])){
        result.push(words[w])
      }
      else {
        result.push(this.capitalize(words[w]))
      }
    }
    return result.join(" ");
  }

}