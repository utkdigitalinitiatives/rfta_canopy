function isArray(object) {
  return Object.prototype.toString.call(object) === '[object Array]';
}

function getValue(json, lang, value = null) {

  if (json.hasOwnProperty(lang)) {
    if (isArray(json[lang])) {
      value = json[lang].join(", ")
    }
  }

  return value

}

module.exports = {
  getValue,
};

