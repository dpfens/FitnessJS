/**
 * Element style related methods
 * @module component/style
 */
import {
  _isIterable,
  _isLiteralObject,
  _isArray,
  _each
} from '../module/utils'

/**
 * Gets element's computed style
 * @param {string} prop
 * @returns {*}
 * @private
 */
function get (element, style) {
  // console.log('get', element, style);
  // get array of elements
  if (_isArray(style)) {
    var css = {}
    for (var i in list) {
      css[list[i]] = this.get(element, list[i])
    }
    return css
  } else {
    var computedStyle

    if (typeof window.getComputedStyle === 'function') { // normal browsers
      computedStyle = window.getComputedStyle(element)
    } else if (typeof document.currentStyle !== undefined) { // other browsers
      computedStyle = element.currentStyle
    } else {
      computedStyle = element.style
    }

    if (style) {
      return computedStyle[style]
    } else {
      return computedStyle
    }
  }
}

/**
 * set element style
 * @param { ? } element [description]
 * @param {?} style   [description]
 */
function set (element, style) {
  if (_isIterable(element) && _isLiteralObject(style)) {
    _each(element, function (e) {
      set(e, style)
    })
    return element
  }

  if (_isLiteralObject(style)) {
    // console.log('style', element, style);
    for (var i in style) {
      element.style[i] = style[i]
    }
    return style
  }

  return false
}

export default { get, set }
