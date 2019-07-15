'use strict'

import insert from './component/insert'
import css from './module/css'
import attach from './module/attach'

import emitter from './module/emitter'

const defaults = {
  prefix: 'material',
  class: 'tree',
  functions: ['render', 'select'],
  target: '.item-tree',
  events: [
    ['root.click', 'onSelect']
  ]
}

/**
 * Tree component
 * @class
 * @param {Object} options Default options for view
 * @extends {View}
 * @since 0.0.4
 * @author Jerome Vial
 *
 * @type {prime}
 */
class Tree {
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
  init () {
    // init this

    this.name = this.options.name
    this.filters = []
    this.data = []
    this.items = []

    // assign modules
    Object.assign(this, emitter, insert, bind)

    // init function
    this._initFunction(this.options.functions)

    return this
  }

  /**
   * [_initFunction description]
   * @param  {?} functions [description]
   * @return {}           [description]
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
  build () {
    // define main tag
    var tag = this.options.tag || 'div'

    this.root = document.createElement(tag)
    css.add(this.root, this.options.prefix + '-' + this.options.class)

    if (this.options.container) {
      this.insert(this.options.container)
    }

    if (this.options.data) {
      this.buildTree(this.options.data)
    }

    // this.root.addEventListener("click", function(e) {
    //   // console.log("list", this, e);
    //   // e.target was the clicked element
    // });

    return this
  }

  buildTree (data) {
    this.root.innerHTML = ''

    var tree = ''

    function checkChildren (parentObj) {
      var level = (parentObj.path.split('/').length - 1)

      if (level > 0) {
        tree += '<li class="item-tree" data-path="' + parentObj.path + '">' + parentObj.name
      }
      if (parentObj.children && parentObj.children.length > 0) {
        tree += '<ul>'
        for (var i = 0; i < parentObj.children.length; i++) {
          var children = parentObj.children[i]

          checkChildren(children)
        }
        tree += '</ul>'
      }

      if (level > 0) {
        tree += '</li>'
      }
    }

    checkChildren(data)

    this.root.innerHTML = tree

    return tree
  }

  getOptions () {
    console.log(this.options)
  }

  /**
   * This method handles onSelect
   * @param  {event} e [description]
   * @return {?}   [description]
   */
  onSelect (e) {
    console.log('click', e.target, this.options.target)
    if (e.target && e.target.matches(this.options.target)) {
      console.log('item clicked: ', e.target)

      css.remove(this.item, 'is-selected')
      css.add(e.target, 'is-selected')

      this.item = e.target

      if (this.select) {
        this.select(this.item, e)
      }
    }

    return this
  }

  /**
   * select
   * @param  {Element} item  [description]
   * @param  {event} event The caller event
   * @return        [description]
   */
  select (item, event) {
    console.log('select', item, event)
    this.item = item

    this.emit('selected', item[0])
  }

  /**
   * Setter
   * @param {string} prop
   * @param {string} value
   */
  set (prop, value, options) {
    switch (prop) {
      case 'tree':
        this.setTree(value, options)
        break
      default:
        this.setTree(value, options)
    }

    return this
  }

  /**
   * Set list
   * @param {Array} list List of info object
   * @return {Object} The class instance
   */
  setTree (data) {
    this.buildTree(data)
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
    this.insertElement(item.root, this.root, where)
    // item.insert(this.root, where);
    this.items.push(item)

    return item
  }

  empty () {
    console.log('empty')
    this.root.innerHTML = ''
    this.items = []
    this.item = null
  }
}

export default Tree
