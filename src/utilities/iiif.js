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
      let split_string = this.#params.split(',')
      let split_parameters = []
      let current = this
      split_string.map(function(partial) {
        split_parameters.push(current.parseParameterValues(partial))
      })
      return split_parameters
    }
    else {
      return [this.parseParameterValues(this.#params)]
    }
  }

  parseParameterValues (value) {
    return {
      "label": value.split(":")[0],
      "value": value.split(":")[1]
    }
  }

}

module.exports = {
  getValue, Filter
};

