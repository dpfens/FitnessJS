'use strict'

// dialog related modules
import events from './component/events'
import emitter from './module/emitter'
import controller from './component/controller'
import attach from './module/attach'
import insert from './component/insert'
import event from './element/event.js'
import css from './module/css'

import Layout from './layout'

let defaults = {
  prefix: 'material',
  class: 'dialog',
  events: [
    ['root.click', 'close']
  ]
}

class Dialog {
  /**
   * Constructor
   * @param  {Object} options - Component options
   * @return {Object} Class instance
   */
  constructor (options) {
    this.init(options)
    this.build()
    this.attach()

    this.root.style.display = 'none'

    return this
  }

  /**
   * Constructor
   * @param  {Object} options The class options
   * @return {Object} This class instance
   */
  init (options) {
    // init options
    this.options = Object.assign({}, defaults, options || {})

    // implement modules
    Object.assign(this, events, emitter, attach, insert)

    this.controller = controller

    return this
  }

  /**
   * build the component using the super method
   * @return {Object} The class instance
   */
  build () {
    // this.root = new Element(this.options.element);
    this.root = document.createElement(tag)

    css.add(this.root, 'material-dialog')
    if (this.options.css) {
      css.add(this.root, this.options.css)
    }

    this.surface = document.createElement(tag)

    css.add(this.surface, 'dialog-surface')

    this.insertElement(this.surface, this.root)

    this.options.layout.root = this.surface
    this.layout = new Layout(this.options.layout, this.surface)

    event.add(this.surface, 'click', function (ev) {
      ev.stopPropagation()
    })

    // this.root = element.createElement(tag);
  }

  close () {
    css.add(this.root, 'dialog-closing')

    var delayMillis = 200 // 1 second
    setTimeout(() => {
      this.root.style.display = 'none'
      css.remove(this.root, 'dialog-closing')
      css.remove(this.root, 'dialog-show')
    }, delayMillis)
  }

  show () {
    this.root.style.display = 'flex'
    // css.add(this.root, 'dialog-showing');

    var delayMillis = 100 // 1 second

    setTimeout(() => {
      css.add(this.root, 'dialog-show')
      // css.remove(this.root, 'dialog-showing');
    }, delayMillis)
  }
}

export default Dialog
