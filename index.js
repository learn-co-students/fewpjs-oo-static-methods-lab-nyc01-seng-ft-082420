class Formatter {
  static capitalize(string){
    return string.charAt(0).toUpperCase() + string.slice(1)
  }

  static sanitize(string){
    return string.replace(/[^A-Za-z0-9 '-]/g, '')
  }

  static titleize(string){
    let words = string.split(" ")
    let result = []
    result.push(this.capitalize(words[0]))
    let exceptions = ["the", "a", "an", "but", "of", "and", "for", "at", "by", "from"]
    for (const word of words.slice(1)) {
      if (exceptions.includes(word)){
       result.push(word)
      } else {
        result.push(this.capitalize(word))
      }
    }
    return result.join(" ")
  }
}