class Formatter {

  static capitalize(str){
    return str.charAt(0).toUpperCase() + str.slice(1)
  }

  static sanitize(str){
    return str.replace( /[^A-Za-z0-9 '-]/g, '' )
  }

  static titleize(str){
    //capitalizes first word
      // except for the exceptions
    let exceptions = ["the", "a", "an", "but", "of", "and", "for", "at", "by", "from"]
    let finalResult = [];
    let titles = str.split(" ")

    for (let i = 0; i < titles.length; i++){
      if (i === 0){
        finalResult.push(this.capitalize(titles[i]))
      } else if (exceptions.includes(titles[i])){
        finalResult.push(titles[i])
      } else {
        finalResult.push(this.capitalize(titles[i]))
      }
    }

    return finalResult.join(" ")
  }
}