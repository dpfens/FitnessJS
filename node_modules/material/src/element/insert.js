'use strict'

import dom from '../module/dom'

/**
 * insert element into dom
 * @param  {HTMLElement} element   [description]
 * @param  {HTMLElement} container [description]
 * @param  {string} context   [description]
 * @return {?}           [description]
 */
function insert (element, container, context) {
  if (!element || !container) return

  element = element.root || element
  container = container.root || container

  context = context || 'bottom'

  var contexts = ['top', 'bottom', 'after', 'before']
  var methods = ['prepend', 'append', 'after', 'before']

  var index = contexts.indexOf(context)
  if (index === -1) {
    return
  }

  var method = methods[index]

  // insert component element to the dom tree using dom
  dom[method](container, element)

  return element
}

export default insert
