'use strict'

import init from './component/init'
import build from './element/build'
import control from './component/control'

import events from './component/events'
import insert from './element/insert'
import offset from './element/offset'
import classify from './component/classify'
// import control from './control';
import attach from './module/attach'
import css from './module/css'
import emitter from './module/emitter'

import icon from './skin/material/icon/pin.svg'

let defaults = {
  prefix: 'material',
  class: 'slider',
  type: 'control',
  label: null,
  checked: false,
  error: false,
  value: false,
  range: [0, 100],
  step: 5,
  modules: [events, control, emitter, attach],
  mixins: [],
  build: ['$root.material-slider', {},
    ['label$label.slider-label', {}],
    ['input$input'],
    ['$control.slider-control', {},
      ['$track.slider-track', {},
        ['canvas$canvas.slider-canvas', {}],
        ['$trackvalue.slider-track-value', {}],
        ['$knob.slider-knob', {}],
        ['$marker.slider-marker', {},
          ['$value.slider-value', {}]
        ]
      ]
    ]
  ],
  events: [
    ['element.input.focus', 'focus'],
    ['element.input.blur', 'blur']
  ]
}

/**
 * Switch class
 * @class
 * @extends Control
 */
class Slider {
  /**
   * init
   * @return {Object} The class options
   */
  constructor (options) {
    this.options = Object.assign({}, defaults, options || {})

    this.init(this.options)
    this.build(this.options)
    this.attach()

    return this
  }

  /**
   * Constructor
   * @param  {Object} options The class options
   * @return {Object} This class instance
   */
  init (options) {
    init(this)

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

    if (this.options.container) {
      insert(this.root, this.options.container)
    }

    var value = this.element.marker.innerHTML
    this.element.marker.innerHTML = icon + value

    if (this.options.type) {
      css.add(this.root, 'type-' + this.options.type)
    }

    // init input
    if (this.options.disabled) {
      this.disable(true)
    }

    // if (this.options.name) {
    //   this.root.dataset.name = name
    //   this.element.input.name = name
    // }

    // init text
    let text = this.options.label || this.options.text
    this.element.label.textContent = text

    this.options.label = this.options.label || this.options.text

    this.initTrack()

    var delay = 50

    setTimeout(() => {
      this.initCanvas()
    }, delay)
  }

  initCanvas () {
    window.addEventListener('resize', () => {
      console.log('resize')
      this.drawCanvas()
    }, false)
    this.drawCanvas()
  }

  drawCanvas () {
    var width = offset(this.element.track, 'width')
    var height = offset(this.element.track, 'height')

    this.element.canvas.width = width
    this.element.canvas.height = height

    var context = this.element.canvas.getContext('2d')
    context.lineWidth = 2
    context.beginPath()

    context.moveTo(0, (height / 2) + 1)
    context.lineTo(width, (height / 2) + 1)
    context.strokeStyle = 'rgba(34, 31, 31, .26)'
    context.stroke()
  }

  /**
   * [buildControl description]
   * @return {?} [description]
   */
  initTrack () {
    this.element.track.addEventListener('mousedown', (ev) => {
      if (this.disabled === true) return
      this.initTrackSize()
      var position = ev.layerX
      this.update(position)
    })

    this.element.knob.addEventListener('click', (ev) => {
      ev.stopPropagation()
    })

    this.initDragging()

    var delay = 100

    setTimeout(() => {
      this.setValue(this.options.value)
    }, delay)
  }

  initTrackSize () {
    this._tracksize = offset(this.element.track, 'width')
    this._knobsize = offset(this.element.knob, 'width')
    this._markersize = 32 /* offset(this.element.marker, 'width') */
    this._trackleft = offset(this.element.track, 'left')
    return this
  }

  /**
   * [initDragging description]
   * @return {?} [description]
   */
  initDragging () {
    this.element.knob.onmousedown = (e) => {
      if (this.disabled === true) return

      e.stopPropagation()
      e = e || window.event

      css.add(this.element.control, 'dragging')

      var start = 0
      var position = 0

      if (e.pageX) start = e.pageX
      else if (e.clientX) start = e.clientX

      start = this._trackleft
      document.body.onmousemove = (e) => {
        if (this.disabled === true) return
        console.log('mousedown', this.disabled)

        e = e || window.event
        var end = 0
        if (e.pageX) end = e.pageX
        else if (e.clientX) end = e.clientX

        position = end - start
        this.update(position)
      }
      document.body.onmouseup = (e) => {
        document.body.onmousemove = document.body.onmouseup = null

        e = e || window.event
        var end = 0
        if (e.pageX) end = e.pageX
        else if (e.clientX) end = e.clientX

        position = end - start
        this.update(position)
        css.remove(this.element.control, 'dragging')
      }
    }
  }

  update (position) {
    var size = this._tracksize
    var range = this.options.range[1] - this.options.range[0]

    if (position > size) {
      position = size
    }

    if (position < 0) {
      position = 0
    }

    var ratio = (size / position)
    var value = Math.round((range / ratio)) + this.options.range[0]

    if (position === 0) {
      css.remove(this.element.knob, 'notnull')
    }

    this.element.knob.style.left = position - this._knobsize / 2 + 'px'
    this.element.trackvalue.style.width = (position) + 'px'
    this.element.marker.style.left = position - this._markersize / 2 + 'px'

    this.element.value.textContent = value

    this.element.input.value = value
    if (value > this.options.range[0]) {
      css.add(this.element.knob, 'notnull')
    } else {
      css.remove(this.element.knob, 'notnull')
    }
  }

  updateValue (value) {
    this.initTrackSize()

    var size = offset(this.element.track, 'width')
    size = parseInt(size)

    var range = this.options.range[1] - this.options.range[0]
    var ratio = value * 100 / range
    var position = Math.round(size * ratio / 100)

    this.update(position)

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
  }

  /**
   * Setter
   * @param {string} prop
   * @param {string} value
   */
  set (prop, value) {
    switch (prop) {
      case 'value':
        this.setValue(value)
        break
      case 'label':
        this.setLabel(value)
        break
      default:
        this.setValue(prop)
    }

    return this
  }

  /**
   * Getter
   * @param {string} prop
   * @param {string} value
   */
  get (prop) {
    var value

    switch (prop) {
      case 'value':
        value = this.getValue()
        break
      case 'name':
        value = this.name
        break
      default:
        return this.getValue()
    }

    return value
  }

  /**
   * [getValue description]
   * @return {Object} The class instance
   */
  getValue () {
    return this.element.input.value
  }

  /**
   * [setValue description]
   * @param {string} value [description]
   */
  setValue (value) {
    value = value || this.options.range[0]
    this.element.input.value = value
    this.updateValue(value)
  }

  /**
   * [setLabel description]
   * @param {?} text [description]
   */
  setLabel (text) {
    text = text || this.options.label || this.options.text

    if (text !== null && this.label) {
      this.label.textContent = text
    }
  }
}

export default Slider
