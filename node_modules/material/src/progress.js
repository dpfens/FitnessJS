'use strict'

// import Component from './component';
import create from './element/create'
import classify from './component/classify'
import css from './module/css'
import insert from './element/insert'

var defaults = {
  prefix: 'material',
  class: 'progress',
  tag: 'div',
  progress: '0%',
  circular: `<svg class="progress" width="65px" height="65px" viewBox="0 0 66 66" xmlns="http://www.w3.org/2000/svg">
      <circle class="path" fill="none" stroke-width="6" stroke-linecap="round" cx="33" cy="33" r="30"></circle>
    </svg>`
}

/**
 * The class represents an item ie for list
 *
 * @class
 * @return {Object} The class instance
 * @example new Item(object);
 */
class Spinner {
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
  build (options) {
    this.root = create(this.options.tag)
    classify(this.root, this.options)

    if (this.options.type === 'circular') {
      this.root.innerHTML = this.options.circular
    } if (this.options.type === 'indeterminate') {
      this.bar = create('div', 'bar')
      insert(this.bar, this.root)
    } else {
      this.bar = create('div', 'bar')
      insert(this.bar, this.root)

      this.set(this.options.progress)
    }

    if (this.options.container) {
      insert(this.root, this.options.container)
    }

    return this
  }

  set (progress) {
    this.bar.setAttribute('style', 'width: ' + progress)
  }
};

export default Spinner
