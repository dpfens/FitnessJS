'use strict'

import extract from './extract'

/**
 * attach function to events
 * @module module/attach
 * @category module
 */

/**
 * [attach description]
 * @param  {object} component [description]
 * @param  {[type]} events    [description]
 * @return {[type]}           [description]
 */
export default {
  attach: function (events) {
    events = events || this.options.events
    if (!events) return

    // console.log('attach', events, this)
    var instance = this
    events.map((def) => {
      // console.log('map', def)

      var e = extract.e(instance, def[0])
      var f = extract.f(instance, def[1])

      e.element.addEventListener(e.name, f.bind(this))
    })

    return this
  }
}
