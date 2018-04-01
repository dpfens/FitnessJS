'use strict'

import create from './element/create'
import css from './module/css'
import insert from './element/insert'
import emitter from './module/emitter'

const defaults = {
  prefix: 'material',
  class: 'view',
  type: null,
  element: {
    tag: 'span',
    type: null
  }
}

/**
 * Class representing a UI Container. Can add components.
 *
 * @extends Component
 * @return {parent} The class instance
 * @example new Container({
 *   container: document.body
 * });
 */
class View {
  /**
   * Constructor
   * @param  {Object} options - Component options
   * @return {Object} Class instance
   */
  constructor (options) {
    this.options = Object.assign({}, defaults, options || {})
    // init and build
    this.init(options)
    this.build()

    return this
  }

  /**
   * Init class
   * @params {Object} options The instance options
   * @return {Object} This class instance
   */
  init (options) {
    this.options.name = this.options.name

    // implement modules
    Object.assign(this, emitter)

    // this.controller = controller;

    return this
  }

  /**
   * [build description]
   * @return {Object} This class  instance
   */
  build (props) {
    var tag = this.options.tag || 'div'

    this.root = create(tag, this.options.prefix + '-' + this.options.class)

    if (this.options.name) {
      css.add(this.root, this.options.class + '-' + this.options.name)
    }

    if (this.options.css) {
      css.add(this.root, this.options.css)
    }

    if (this.options.container) {
      // console.log(this.options.name, opts.container);
      insert(this.root, this.options.container)
    }

    return this
  }

  insert (container, context) {
    insert(this.root, container, context)
    return this
  }
}

export default View
