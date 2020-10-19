class Formatter {
  static capitalize(data){
    return data.capitalize()
  }

  static sanitize(data){
    return data.replace(/[^A-Za-z0-9-']+/g, '');
  }

  static titleize(data){
    const dataArr = data.split(" ")
    dataArr.forEach((element) => {
      element.capitalize()
    });

  }
}
