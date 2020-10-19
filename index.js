class Formatter {
  static capitalize(data){
    return data.charAt(0).toUpperCase() + data.slice(1);
  }

  static sanitize(data){
    return data.replace(/[^\w\s-']+/g, '');
  }

  static titleize(data){
    let dataArr = data.split(" ")
    const capitalizedArr = []
    capitalizedArr.push(Formatter.capitalize(dataArr[0]))
    dataArr = dataArr.slice(1)
    const exclusion = new Set(['the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from'])
    dataArr.forEach((element) => {
      if(exclusion.has(element)){
        capitalizedArr.push(element);
      }else{
        let cap = Formatter.capitalize(element)
        capitalizedArr.push(cap);
      }
    });
    return capitalizedArr.join(' ')
  }
}
