'use strict'

import create from './element/create'
import insert from './element/insert'
import css from './module/css'
import attach from './module/attach'
import emitter from './module/emitter'

import Button from './button'
import iconBack from './skin/material/icon/back.svg'
import iconForward from './skin/material/icon/forward.svg'

const defaults = {
  prefix: 'material',
  class: 'calendar',
  target: '.week-day',
  functions: ['newEvent'],
  rangedays: 7,
  months: ['January', 'February', 'Mars', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
  days: ['Sunday', 'Monday', 'Tuesday', 'wednesday', 'Thursday', 'Friday', 'Saturday'],
  mode: 'view',
  range: [8, 18],
  display: 'three',
  weekend: [0, 1],
  events: [
    ['root.dblclick', 'add']
  ]
}

/**
 * List view class
 * @class
 * @param {Object} options Default options for view
 * @extends {View}
 * @since 0.0.4
 * @author Jerome Vial
 *
 * @type {prime}
 */
class Calendar {
  /**
   * init
   * @return {Object} The class options
   */
  constructor (options) {
    this.options = Object.assign({}, defaults, options || {})

    this.init()
    this.build()
    this.attach()

    return this
  }

  /**
   * [_initView description]
   * @return  Class instance
   */
  init (options) {
    // assign modules
    Object.assign(this, emitter, attach)

    // init function
    this._initFunction(this.options.functions)

    this.date = this.options.date || new Date()

    this.firstDay = this.getFirstDayOfWeek(this.date)

    this.firstDay.setHours(0)
    this.firstDay.setMinutes(0)
    this.firstDay.setSeconds(0)

    return this
  }

  /**
   * getMonday
   * @param  {Date} d
   * @return {Date}
   */
  getFirstDayOfWeek (d) {
    d = new Date(d)
    var day = d.getDay()
    var diff = d.getDate() - day + (day === 0 ? -6 : 1) // adjust when day is sunday

    return new Date(d.setDate(diff))
  }

  /**
   * [_initFunction description]
   * @param  {?} functions [description]
   * @return {?}           [description]
   */
  _initFunction (functions) {
    functions = functions || []

    for (var i = 0; i < functions.length; i++) {
      var name = functions[i]
      if (this.options[name]) {
        this[name] = this.options[name]
      }
    }
  }

  /**
   * [_initList description]
   * @param  {Object} options this class options
   * @return {Object} The class instance
   */
  build () {
    // define main tag
    var tag = this.options.tag || 'div'

    this.root = create(tag, this.options.prefix + '-' + this.options.class)

    this.buildWeek()

    if (this.options.container) {
      insert(this.root, this.options.container)
    }

    return this
  }

  /**
   * [buildWeek description]
   * @return {[type]} [description]
   */
  buildWeek () {
    this.buildHeader()
    this.buildAllDay()
    this.buildBody()

    this.body.scrollTop = 480

    return this
  }

  /**
   * [buildHeader description]
   * @return {[type]} [description]
   */
  buildHeader () {
    this.header = create('header')
    insert(this.header, this.root)

    this.buildHeadline()

    var element = create('div')
    insert(element, this.header)
    css.add(element, 'header-days')

    var date = new Date(this.firstDay)
    var days = this.options.rangedays

    var margin = create('div')
    css.add(margin, 'margin')
    insert(margin, element)

    for (var i = 0; i < days; i++) {
      var dow = this.options.days[date.getDay()]
      var dom = (date.getMonth() + 1) + '/' + date.getDate()

      var cell = create('div')
      cell.innerHTML = '<div class="first">' + dow + '</div><div class="second">' + dom + '</div>'
      css.add(cell, 'date')
      insert(cell, element)

      date.setDate(date.getDate() + 1)
    }
  }

  /**
   * [buildHeadline description]
   * @return {?} [description]
   */
  buildHeadline () {
    this.headline = create('div', this.options.class + '-headline')

    insert(this.headline, this.header)

    var year = this.firstDay.getFullYear()

    var month = this.options.months[this.firstDay.getMonth()]

    var monthIndex = create('div', 'month-year')
    monthIndex.innerHTML = '<b>' + month + '</b> ' + year
    insert(monthIndex, this.headline)

    this.buildNavigation()
  }

  /**
   * [buildNavigation description]
   * @return {?} [description]
   */
  buildNavigation () {
    var navigation = create('div', this.options.prefix + '-toolbar')
    insert(navigation, this.headline)

    var back = new Button({
      icon: iconBack,
      style: 'dense'
    }).on('click', () => {
      this.back()
    }).insert(navigation)

    css.add(back.root, 'compact')

    var today = new Button({
      style: 'dense',
      label: 'today'
    }).on('click', () => {
      this.goto()
    }).insert(navigation)

    css.add(today.root, 'compact')

    var next = new Button({
      icon: iconForward,
      style: 'dense'
    }).on('click', () => {
      this.next()
    }).insert(navigation)

    css.add(next.root, 'compact')
  }

  /**
   * [_initAllDay description]
   * @param  {?} head [description]
   * @return {?}      [description]
   */
  buildAllDay () {
    var allday = create('div', 'allday')
    insert(allday, this.header)

    var dow = new Date(this.firstDay)
    var days = this.options.rangedays

    var label = create('label', 'label')
    label.innerHTML = 'all-day'
    insert(label, allday)

    for (var i = 0; i < days; i++) {
      var day = create('div', 'date')
      day.setAttribute('data-date', this.dateToString(dow))
      insert(day, allday)

      dow.setDate(dow.getDate() + 1)
    }
  }

  /**
   * [_initBody description]
   * @param  {?} content [description]
   * @return {?}         [description]
   */
  buildBody () {
    var cells = []

    var firstDay = this.firstDay

    var days = this.options.rangedays

    this.body = create('div')
    css.add(this.body, this.options.class + '-body')
    insert(this.body, this.root)

    var hours = create('div')
    css.add(hours, 'hours')
    insert(hours, this.body)

    this.initCanvas()

    for (var i = 0; i < 24; i++) {
      var hour = create('div')
      css.add(hour, 'hour')
      insert(hour, hours)

      hour.innerHTML = i + ':00'
    }

    var sday = new Date(firstDay)
    for (var k = 0; k < days; k++) {
      var day = create('div')
      css.add(day, 'week-day')
      day.setAttribute('data-date', this.dateToString(sday))
      insert(day, this.body)

      sday.setDate(sday.getDate() + 1)
    }

    this.cells = cells

    // content.scrollTop = 460;
  }

  /**
   * _dateToString
   * @param  {Date} d
   * @return {Date}
   */
  dateToString (d) {
    var day = d.getDate()
    var month = d.getMonth() + 1
    var year = d.getFullYear()

    if (day < 10) {
      day = '0' + day
    }
    if (month < 10) {
      month = '0' + month
    }

    var date = year + '-' + month + '-' + day

    return date
  }

  /**
   * [_initCanvas description]
   * @param  {?} content [description]
   * @return {?}         [description]
   */
  initCanvas () {
    var canvas = create('canvas')
    css.add(canvas, 'canvas')
    canvas.width = '2000'
    canvas.height = '1440'
    insert(canvas, this.body)

    var ctx = canvas.getContext('2d')
    ctx.lineWidth = 0.5
    ctx.strokeStyle = '#dedbdb'

    var offset = 6

    for (var j = 0; j <= 24; j++) {
      ctx.beginPath()

      if (j < this.options.range[0] - 1 || j > this.options.range[1] - 1) {
        ctx.strokeStyle = '#F2F2F2'
      } else {
        ctx.strokeStyle = '#D9D9D9'
      }

      var y = j * 60 + 0.5

      ctx.moveTo(0, y + 60 + offset)
      ctx.lineTo(2000, y + 60 + offset)
      ctx.stroke()
    }
  }

  /**
   * [onSelect description]
   * @param  {?} e [description]
   * @return {?}   [description]
   */
  add (e) {
    if (e.target && e.target.matches(this.options.target)) {
      var data = e.target.getAttribute('data-date')

      var d = data.split(/-/)

      var time = this.roundTime(e.offsetY / 60)

      var h = parseInt(time)
      var m = (time - h) * 60

      var date = new Date(d[0], d[1], d[2], h, m)

      this.emit('add', date)
    }
  }

  /**
   * [roundTime description]
   * @param  {?} value [description]
   * @return {?}       [description]
   */
  roundTime (value) {
    var step = 0.5
    var inv = 1.0 / step
    return Math.round(value * inv) / inv
  }

  /**
   * Setter
   * @param {string} prop
   * @param {string} value
   */
  set (prop, value, options) {
    console.log('set calendart', prop, value)
    switch (prop) {
      case 'week':
        this.setWeek(value, options)
        break
      default:
        this.setWeek(value, options)
    }

    return this
  }

  /**
   * Set list
   * @param {Array} list List of info object
   * @return {Object} The class instance
   */
  setWeek (data) {
    this.buildWeek(data)
    return this
  }

  /**
   * next
   * @return {void}
   */
  next () {
    this.firstDay.setDate(this.firstDay.getDate() + this.options.rangedays)

    this.root.innerHTML = ''

    this.buildWeek()
  }

  /**
   * back
   * @return {void}
   */
  back () {
    this.firstDay.setDate(this.firstDay.getDate() - this.options.rangedays)

    this.root.innerHTML = ''

    this.buildWeek()
  }

  /**
   * [goto description]
   * @param  {?} date [description]
   * @return {?}      [description]
   */
  goto (date) {
    date = date || new Date()

    this.firstDay = this.getFirstDayOfWeek(this.date)
    this.root.innerHTML = ''

    this.buildWeek()
  }

  newEvent (date) {
    // console.log('new Event', date);
  }

  empty () {
    console.log('empty')
    this.root.innerHTML = ''
  }
}

export default Calendar
