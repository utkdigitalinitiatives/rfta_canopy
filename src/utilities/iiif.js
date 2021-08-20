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

class Filter {
  #params;

  constructor(params) {
    this.#params = params;
  }

  get parameters() {
    return this.parseParameters()
  }

  parseParameters() {
    if (this.#params.includes(',')) {
      let current = this
      return this.#params.split(',').map(function(partial) {
        return current.getLabelsAndValues(partial)
      })
    }
    else {
      return [this.getLabelsAndValues(this.#params)]
    }
  }

  getLabelsAndValues (value) {
    return {
      "label": value.split(":")[0],
      "value": value.split(":")[1]
    }
  }

}

module.exports = {
  getValue, Filter
};

