'use strict'

import insert from './component/insert'
import css from './module/css'

var defaults = {
  prefix: 'material',
  class: 'image',
  tag: 'div'
}

/**
 * The item class is used for example as item list
 *
 * @class
 * @extends {Component}
 * @return {Object} The class instance
 * @example new Item(object);
 */
class Image {
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
  build (options) {
    options = options || this.options

    var tag = options.tag || 'img'

    this.root = document.createElement(tag)

    if (options.src) {
      this.root.setAttribute('style', 'background-image: url(' + options.src + ')')
    }

    css.add(this.root, this.options.prefix + '-' + this.options.class)

    if (options.css) { css.add(this.root, options.css) }
    // css.add(this.root, this.options.class + '-adjust');

    if (this.options.container) {
      this.insert(this.options.container)
    }
  }

  /**
   * Get or set text value of the element
   * @param {string} value The text to set
   * @returns {*}
   */
  set (value) {
    if (value) {
      if (this.root.innerText) {
        this.root.innerText = value
      } else {
        this.root.textContent = value
      }

      return this
    }

    return this
  }
}

export default Image
