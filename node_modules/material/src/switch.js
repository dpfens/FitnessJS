'use strict'

// import control from '../control';
import control from './component/control'
import build from './element/build'
import emitter from './module/emitter'
import insert from './component/insert'
import attach from './module/attach'
import css from './module/css'
import classify from './component/classify'

let defaults = {
  prefix: 'material',
  class: 'switch',
  type: 'control',
  label: null,
  checked: false,
  error: false,
  value: false,
  disabled: false,
  build: ['$root.material-switch', {},
    ['input$input$switch-input', { type: 'checkbox' }],
    ['span$control.switch-control', {},
      ['span$track.switch-track', {},
        ['span$knob.switch-knob', {}]
      ]
    ],
    ['label$label.switch-label']
  ],
  events: [
    ['element.control.click', 'toggle'],
    ['element.label.click', 'toggle'],
    // for accessibility purpose
    ['element.input.click', 'toggle'],
    ['element.input.focus', 'focus'],
    ['element.input.blur', 'blur']
    // ['element.input.keydown', 'keydown']
  ]
}

/**
 * Switch class
 * @class
 * @extends Control
 */
class Switch {
  /**
   * Constructor
   * @param  {Object} options
  - Component options
   * @return {Object} Class instance
   */
  constructor (options) {
    this.init(options)
    this.build()
    this.attach()

    return this
  }

  /**
   * Constructor
   * @param  {Object} options The class options
   * @return {Object} This class instance
   */
  init (options) {
    this.options = Object.assign({}, defaults, options || {})
    Object.assign(this, emitter, control, attach, insert)

    this.value = this.options.value

    return this
  }

  /**
   * build method
   * @return {Object} The class instance
   */
  build () {
    this.element = build(this.options.build)
    this.root = this.element.root

    classify(this.root, this.options)

    if (this.options.disabled) {
      this.disable()
    }

    if (this.value) {
      this.element.input.setAttribute('checked', 'checked')
    }

    this.element.input.setAttribute('aria-label', this.options.name)

    let text = this.options.label || this.options.text || ''

    this.element.label.textContent = text
    this.element.label.setAttribute('for', this.options.name)
    if (this.value) {
      this.check()
    }

    if (this.options.container) {
      this.insert(this.options.container)
    }
  }

  /**
   * Setter
   * @param {string} prop
   * @param {string} value
   * @return {Object} The class instance
   */
  set (prop, value) {
    switch (prop) {
      case 'value':
        this.setValue(value)
        break
      case 'disabled':
        if (value === true) {
          this.disable()
        } else if (value === false) {
          this.enable()
        }
        break
      default:
        this.setValue(prop)
    }

    return this
  }

  get () {
    return this.value
  }

  /**
   * set switch value
   * @param {boolean} value [description]
   */
  getValue () {
    return this.value
  }

  /**
   * set switch value
   * @param {boolean} value [description]
   */
  setValue (value) {
    if (value) {
      this.check()
    } else {
      this.unCheck()
    }
  }
}

export default Switch
