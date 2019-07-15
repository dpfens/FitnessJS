'use strict'

import create from './component/create'
import insert from './element/insert'
import emitter from './module/emitter'

const defaults = {
  prefix: 'material',
  class: 'container',
  tag: 'div'
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
class Container {
  /**
   * Constructor
   * @param  {Object} options - Component options
   * @return {Object} Class instance
   */
  constructor (options) {
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
    this.options = Object.assign({}, defaults, options || {})
    Object.assign(this, emitter)

    return this
  }

  /**
   * [build description]
   * @return {Object} This class  instance
   */
  build () {
    this.root = create(this.options)

    if (this.options.container) {
      insert(this.root, this.options.container)
    }

    return this
  }

  insert (container, context) {
    insert(this.root, container, context)
    return this
  }
}

export default Container
