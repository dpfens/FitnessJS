'use strict'

import { Item, Divider } from '../index'

import init from './component/init'
import emitter from './module/emitter'
import insert from './element/insert'
import css from './module/css'
import attach from './module/attach'

const defaults = {
  prefix: 'material',
  class: 'list',
  functions: ['render', 'select'],
  target: '.material-item',
  events: [
    ['root.click', 'handleSelect']
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
class List {
  /**
   * init
   * @return {Object} The class options
   */
  constructor (options) {
    this.options = Object.assign({}, defaults, options || {})

    this.init(this.options)
    this.build(this.options)
    this.attach(this.options.events)

    return this
  }

  /**
   * [_initView description]
   * @return  Class instance
   */
  init () {
    this.filters = []
    this.data = []
    this.items = []

    // assign modules
    Object.assign(this, emitter, attach)

    // init function
    this._initFunction(this.options.functions)

    return this
  }

  /**
   * [_initFunction description]
   * @param  {?} functions [description]
   * @return {?}           [description]
   */
  _initFunction (functions) {
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
  build (options) {
    // define main tag
    var tag = this.options.tag || 'div'

    this.root = document.createElement(tag)
    css.add(this.root, 'material-' + this.options.class)

    if (options.name) {
      css.add(this.root, options.class + '-' + options.name)
    }

    if (this.options.list) {
      this.set('list', this.options.list)
    }

    if (this.options.container) {
      insert(this.root, this.options.container)
    }

    // this.root.addEventListener("click", function(e) {
    //   // console.log("list", this, e);
    //   // e.target was the clicked element
    // });

    return this
  }

  /**
   * [onSelect description]
   * @param  {?} e [description]
   * @return {?}   [description]
   */
  handleSelect (e) {
    // console.log('onSelect', e.target, this.options.target);
    if (e.target && e.target.matches(this.options.target)) {
      // console.log("item clicked: ", e.target);
      css.remove(this.item, 'is-selected')
      css.add(e.target, 'is-selected')

      this.select(e.target, e, this.item)
      this.item = e.target
    }
  }

  /**
   * select
   * @param  {Element} item  [description]
   * @param  {event} event The caller event
   * @return        [description]
   */
  select (item, e, selected) {
    this.emit('select', item)
  }

  /**
   * [render description]
   * @param  {?} info [description]
   * @return {?}      [description]
   */
  render (info) {
    var item

    if (info.type === 'divider') {
      item = new Divider()
    } else {
      item = new Item({
        name: info.name,
        text: info.name
      })
    }

    return item
  }

  /**
   * Setter
   * @param {string} prop
   * @param {string} value
   */
  set (prop, value, options) {
    switch (prop) {
      case 'list':
        this.setList(value, options)
        break
      default:
        this.setList(prop, options)
    }

    return this
  }

  /**
   * Set list
   * @param {Array} list List of info object
   * @return {Object} The class instance
   */
  setList (list) {
    for (var i = 0; i < list.length; i++) {
      this.addItem(this.render(list[i]), i)
    }

    return this
  }

  /**
   * [add description]
   * @param {Object} item [description]
   */
  addItem (item /*, index */) {
    if (!item) {
      return
    }

    var where = 'bottom'
    insert(item.root, this.root, where)

    this.items.push(item)

    return item
  }

  insert (container, context) {
    insert(this.root, container, context)
  }

  empty () {
    this.root.innerHTML = ''
    this.items = []
    this.item = null
  }

  /**
   * Reverse the list order
   * @return {Object} The class instance
   */
  reverse () {
    this.list.reverse()
    this.update(this.list)

    return this
  }
}

export default List
