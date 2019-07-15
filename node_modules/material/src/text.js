'use strict'

import create from './component/create'
import insert from './component/insert'

var defaults = {
  prefix: 'material',
  class: 'text',
  type: 'default',
  types: {
    default: 'span',
    display4: 'h1',
    display3: 'h1',
    display2: 'h1',
    display1: 'h1',
    headline: 'h1',
    title: 'h2',
    subheading2: 'h3',
    subheading1: 'h4',
    body: 'p',
    body2: 'aside',
    caption: 'span'
  }
}

/**
 * this class creates a text component
 *
 * @since 0.0.6
 * @category Element
 * @param {HTMLElement} element Related element
 * @param {String} className the className to add
 *  grouped values.
 * @returns {HTMLElement} The modified element
 * @example
 *
 * var text = new Text({
 *   text: 'hello',
 *   type: 'title'
 * }).insert(document.body);
 *
 * // => Hello
 */
class Text {
  /**
   * init
   * @return {Object} The class options
   */
  constructor (options) {
    this.init(options)
    this.build()

    return this
  }

  init (options) {
    this.options = Object.assign({}, defaults, options || {})

    Object.assign(this, insert)
  }

  /**
   * Build function for item
   * @return {Object} This class instance
   */
  build () {
    this.options.tag = this.options.types[this.options.type]

    this.root = create(this.options)

    if (this.options.text) {
      this.set(this.options.text)
    }

    if (this.options.container) {
      this.insert(this.options.container)
    }
    return this
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

export default Text
