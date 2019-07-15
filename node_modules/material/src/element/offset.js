'use strict'

/**
 * Element style related methods
 * @module component/style
 */
import style from './style'

function offset (element, prop) {
  var rect = element.getBoundingClientRect()

  var offset = {
    top: Math.round(rect.top),
    right: Math.round(rect.right),
    bottom: Math.round(rect.bottom),
    left: Math.round(rect.left),
    width: rect.width ? Math.round(rect.width) : Math.round(element.offsetWidth),
    height: rect.height ? Math.round(rect.height) : Math.round(element.offsetHeight)
  }

  // css width and height
  if (offset.width <= 0) {
    offset.width = parseFloat(style.get(element, 'width'))
  }
  if (offset.height <= 0) {
    offset.height = parseFloat(style.get(element, 'height'))
  }

  if (prop) {
    return offset[prop]
  } else {
    return offset
  }
}

export default offset
