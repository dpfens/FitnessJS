'use strict'

import dom from '../module/dom'

/**
 * Inject method insert element to the domtree using Dom methods
 * @param {HTMLElement} container [description]
 * @param  {string} context - Injection context
 * @return {Object} This class intance
 */
export default {

  /**
   * [insert description]
   * @param  {?} container [description]
   * @param  {?} context   [description]
   * @param  {?} debug     [description]
   * @return {?}           [description]
   */
  insert (container, context) {
    var element = this.root

    this.insertElement(element, container, context)

    return this
  },

  /**
   * [insertElement description]

   * @param  {?} element   [description]
   * @param  {?} container [description]
   * @param  {?} context   [description]
   * @param  {?} debug     [description]
   * @return {?}           [description]
   */
  insertElement (element, container, context) {
    if (container && container.root) {
      container = container.root
    }

    this.container = container

    // if (debug) {
    // console.log('insert', container);
    // }

    // this.emit('insert');

    context = context || 'bottom'

    var contexts = ['top', 'bottom', 'after', 'before']
    var methods = ['prepend', 'append', 'after', 'before']

    var index = contexts.indexOf(context)
    if (index === -1) {
      return
    }

    var method = methods[index]

    // this.emit('insert');

    // insert component element to the dom tree using Dom
    // console.log('dom', method, element);
    dom[method](container, element)
    // this.emit('injected');
    //
    return element
  }
}
