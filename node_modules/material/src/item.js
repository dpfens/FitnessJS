'use strict'

// import Component from './component';
import create from './component/create'
import insert from './component/insert'
import css from './module/css'

var defaults = {
  prefix: 'material',
  class: 'item',
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
 * The class represents an item ie for list
 *
 * @class
 * @return {Object} The class instance
 * @example new Item(object);
 */
class Item {
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
    // merge options
    this.options = Object.assign({}, defaults, options || {})

    // define class

    // assign modules
    Object.assign(this, insert)
  }

  /**
   * Build function for item
   * @return {Object} This class instance
   */
  build () {
    // define main tag
    this.options.tag = this.options.types[this.options.type]

    this.root = create(this.options)

    if (this.options.text) {
      this.set(this.options.text)
    }

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
};

export default Item
