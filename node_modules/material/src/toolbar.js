'use strict'

import create from './component/create'
import insert from './component/insert'

const defaults = {
  prefix: 'material',
  class: 'toolbar',
  tag: 'div'
}

class Toolbar {
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

  init (options) {
    this.options = Object.assign({}, defaults, options || {})
    Object.assign(this, insert)
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

export default Toolbar
