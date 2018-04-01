'use strict'

/**
 * Utility functions
 * @module module/utils
 */

/**
 * Checks if given value is an array
 * @param {*} object
 * @returns {boolean}
 * @private
 */
function _isArray (object) {
  return Object.prototype.toString.call(object) === '[object Array]'
}

/**
 * Checks if javascript object is plain object
 * @param {Object} object
 * @returns {*|boolean}
 * @private
 */
function _isLiteralObject (object) {
  return object && typeof object === 'object' && Object.getPrototypeOf(object) === Object.getPrototypeOf({})
}

/**
 * Checks if object is iterable
 * @param {Object} object
 * @returns {boolean}
 * @private
 */
function _isIterable (object) {
  var r = _isLiteralObject(object) ||
    _isArray(object) ||
    (typeof object === 'object' &&
      object !== null &&
      object.length !== undefined)

  return r
}

/**
 *
 * @param {Object} object
 * @param {Function} callback
 * @private
 */
function _each (object, callback) {
  if (_isArray(object) || (typeof object === 'object' && object.length !== undefined)) {
    for (var i = 0, l = object.length; i < l; i++) {
      callback.apply(object[i], [object[i], i])
    }
    return
  }

  if (_isLiteralObject(object)) {
    for (var key in object) {
      callback.apply(object[key], [object[key], key])
    }
  }
}

/**
 * Array.indexOf support
 * @param {Array} array
 * @param {*} obj
 * @returns {number}
 * @private
 */
function _indexOf (array, obj) {
  if (Array.prototype.indexOf) {
    return Array.prototype.indexOf.call(array, obj)
  }
  for (var i = 0, j = array.length; i < j; i++) {
    if (array[i] === obj) {
      return i
    }
  }
  return -1
}

export { _isArray, _isIterable, _isLiteralObject, _each, _indexOf }
