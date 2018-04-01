'use strict'

function init (element, attribute) {
  for (var key in attribute) {
    if (attribute.hasOwnProperty(key)) {
      element.setAttribute(key, attribute[key])
    }
  }

  return element
}

function set (element, name, value) {
  return element.setAttribute(name, '' + value)
}

function get (element, name) {
  return element.getAttribute(name) || null
}

function remove (element, name) {
  return element.removeAttribute(name)
}

export default { init, set, get, remove }
