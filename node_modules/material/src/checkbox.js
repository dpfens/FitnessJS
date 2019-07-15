'use strict'

import events from './component/events'
import control from './component/control'
import label from './component/label'

import insert from './element/insert'
import build from './element/build'

import emitter from './module/emitter'
import attach from './module/attach'
import css from './module/css'

import icon from './skin/material/icon/checkbox.svg'
// element related modules

let defaults = {
  prefix: 'material',
  class: 'checkbox',
  type: 'control',
  // modules: [events, control, emitter, attach],
  build: ['$root.material-checkbox', {},
    ['input$input', {}],
    ['span$control.checkbox-control']
  ],
  events: [
    ['element.control.click', 'click', {}],
    ['element.label.click', 'toggle', {}],
    // for accessibility purpose
    // ['element.input.click', 'toggle', {}],
    ['element.input.focus', 'focus'],
    ['element.input.blur', 'blur'],
    ['element.input.keydown', 'keydown', {}]
  ]
}
/**
 * Checkbox control class
 * @class
 * @extends Control
 * @since 0.0.1
 * @example
 * var chkbox = checkbox({
 *   label: 'Primary raised button',
 *   type: 'raised',
 *   primary: true
 * }).on('click', function(e) {
 *   console.log('button click', e);
 * }).insert(document.body);
 */
class Checkbox {
  /**
   * Constructor
   * @param  {Object} options - Component options
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
    Object.assign(this, events, control, emitter, attach)

    return this
  }

  /**
   * build the component using the super method
   * @return {Object} The class instance
   */
  build () {
    this.element = build(this.options.build)
    this.root = this.element.root

    this.element.control.innerHTML = icon

    var text = this.options.text || this.options.label

    this.element.label = label(this.root, text, this.options)

    this.element.input.setAttribute('type', 'checkbox')
    this.element.input.setAttribute('name', this.options.name)
    this.element.input.setAttribute('aria-label', this.options.name)

    if (this.options.value) {
      this.element.label.setAttribute('value', this.options.value)
    }

    if (this.options.disabled) {
      this.disabled = this.options.disabled
      this.element.input.setAttribute('disabled', 'disabled')
      css.add(this.root, 'is-disabled')
    }

    if (this.options.checked) {
      this.check(true)
    }

    if (this.options.value) {
      this.set('value', this.value)
    }

    // insert if container options is given
    if (this.options.container) {
      insert(this.root, this.options.container)
    }

    return this
  }

  /**
   * Setter
   * @param {string} prop
   * @param {string} value
   * @return {Object} The class instance
   */
  set (prop, value) {
    switch (prop) {
      case 'checked':
        this.check(value)
        break
      case 'value':
        this.setValue(value)
        break
      case 'label':
        this.setLabel(value)
        break
      default:
        this.check(prop)
    }

    return this
  }

  /**
   * [insert description]
   * @param  {?} container [description]
   * @param  {?} context   [description]
   * @return {?}           [description]
   */
  insert (container, context) {
    insert(this.root, container, context)

    return this
  }

  /**
   * [click description]
   * @param  {event} e [description]
   * @return {?}   [description]
   */
  click (e) {
    this.toggle(e)
    this.element.input.focus()

    return this
  }

  /**
   * Set checkbox value
   * @param {boolean} value [description]
   */
  setValue (value) {
    console.log('setValue', value)
    this.value = value
    this.element.input.setAttribute('value', value)

    return this
  }
}

export default Checkbox
