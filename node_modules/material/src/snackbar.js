'use strict'

// import modules
import init from './component/init'
import create from './element/create'
import insert from './component/insert'
import classify from './component/classify'
// import components
import Layout from './layout'

let defaults = {
  prefix: 'material',
  class: 'snackbar',
  delay: 2000,
  theme: 'dark'
}

class Snackbar {
  /**
   * Constructor
   * @param  {Object} options - Component options
   * @return {Object} Class instance
   */
  constructor (options) {
    this.options = Object.assign({}, defaults, options || {})

    this.init()
    this.build()
    this.show()
  }

  init () {
    Object.assign(this, insert)
  }

  /**
   * build the component using the super method
   * @return {Object} The class instance
   */
  build () {
    var tag = this.options.tag || 'div'

    this.root = create(tag)
    classify(this.root, this.options)

    this.layout = new Layout(this.options.layout, this.root)
  }

  /**
   *
   * @return {[type]} [description]
   */
  show () {
    setTimeout(() => {
      this.root.classList.add('show')
    }, 10)

    if (this.options.delay) {
      setTimeout(() => {
        this.hide()
      }, this.options.delay)
    }
  }

  hide () {
    this.root.classList.remove('show')
  }
}

export default Snackbar
