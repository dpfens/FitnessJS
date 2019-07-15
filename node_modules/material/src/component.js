'use strict'

import create from './component/create'
import events from './component/events'
import insert from './component/insert'

import emitter from './module/emitter'

const defaults = {
  prefix: 'material',
  class: 'component',
  tag: 'span'
}

/**
 * Base class for all ui components
 * @class
 * @param {Object} options - The component options
 * @return {Object} The class Instance
 */

/**
 * Class representing a UI Container. Can add components.
 *
 * @extends Component
 * @return {parent} The class instance
 * @example new Container({
 *   container: document.body
 * });
 */
class Component {
  /**
   * Constructor
   * @param  {Object} options - Component options
   * @return {Object} Class instance
   */
  constructor (options) {
    this.init(options)
    this.build()

    return this
  }

  /**
   * init method
   * @param  {Object} Options
   * @return {Object} Instance
   */
  init (options) {
    this.options = Object.assign({}, defaults, options || {})

    Object.assign(this, emitter, events, insert)

    return this
  }

  /**
   * Build Method
   * @return {Object} This class instance
   */
  build () {
    this.root = create(this.options)

    if (this.options.container) {
      this.insert(this.options.container)
    }

    return this
  }
}

export default Component
