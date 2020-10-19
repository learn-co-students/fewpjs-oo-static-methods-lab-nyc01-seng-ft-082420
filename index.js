class Formatter {
  //add static methods here
  static capitalize(str) {
    return str[0].toUpperCase() + str.slice(1)
  }

  static sanitize(str) {
    return  str.replace(/[^A-Za-z0-9- ']+/g, '');
  }

  static titleize(str) {
    const words = str.split(" ")
    const res = []
    for (let i = 0; i < words.length; i++) {
      if (i !== 0 && ["the", "a", "an", "but", "of", "and", "for", "at", "by", "from"].includes(words[i])) {
        res.push(words[i]);
      } else {
        res.push(words[i][0].toUpperCase() + words[i].slice(1))
      }
    }
    return res.join(" ")
  }
}