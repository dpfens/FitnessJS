'use strict'

import create from './component/create'
import insert from './component/insert'

var defaults = {
  prefix: 'material',
  class: 'divider',
  tag: 'span'
}

/**
 * this class component represent an divider usually in a list
 *
 * @class
 * @extends {Component}
 * @return {Object} The class instance
 * @example new Item(object);
 */
class Divider {
  /**
   * init
   * @return {Object} The class options
   */
  constructor (options) {
    this.init(options)
    this.build()

    return this
  }

  /**
   * [init description]
   * @param  {?} options [description]
   * @return {?}         [description]
   */
  init (options) {
    this.options = Object.assign({}, defaults, options || {})

    Object.assign(this, insert)
  }

  /**
   * Build function for item
   * @return {Object} This class instance
   */
  build () {
    this.root = create(this.options)

    if (this.options.text) {
      this.root.textContent = this.options.text
    }

    if (this.options.container) {
      this.insert(this.options.container)
    }
  }
}

export default Divider
