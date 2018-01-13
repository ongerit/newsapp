module.exports = {
  textTruncate : (str, length = 75, ending = '...') => {
    const strippedHTMLString = str.replace(/(<([^>]+)>)/ig,"");
    return strippedHTMLString.length > length
      ? strippedHTMLString.substring(0, length - ending.length) + ending
      : strippedHTMLString
  }
}
