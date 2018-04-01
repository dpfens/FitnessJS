'use strict'

/**
 *
 */
var controller = {

  /**
   * [register description]
   * @param  {component} component [description]
   * @return {Object} The class instance
   */
  register (instance, group) {
    group = group || 'component'
    this[group + 's'] = this[group + 's'] || []
    this[group] = this[group] || {}
    // console.log('register', component.class);
    this[group + 's'].push(instance)

    this[group][instance.name] = this[group][instance.name] || []

    this[group][instance.name].push(instance)

    return this
  },

  /**
   * This method subscribes to a specific topic
   * @param  {string}   topic
   * @param  {Function} callback
   * @return {boolean} true
   */
  subscribe (topic, callback) {
    this._topics = this._topics || {}

    // _log.debug('subscribe', topic);
    if (!this._topics.hasOwnProperty(topic)) {
      this._topics[topic] = []
    }

    this._topics[topic].push(callback)
    return true
  },

  /**
   * This method unsubscribes to a specific topic
   * @param  {string}   topic
   * @param  {Function} callback
   * @return {boolean} true
   */
  unsunscribe (topic, callback) {
    this._topics = this._topics || {}
    // _log.debug('unsubscribe', topic);
    if (!this._topics.hasOwnProperty(topic)) {
      return false
    }

    for (var i = 0, len = this._topics[topic].length; i < len; i++) {
      if (this._topics[topic][i] === callback) {
        this._topics[topic].splice(i, 1)
        return true
      }
    }

    return false
  },

  /**
   * [publish description]
   * @return {?} [description]
   */
  publish () {
    this._topics = this._topics || {}

    var args = Array.prototype.slice.call(arguments)
    var topic = args.shift()
    // _log.debug('publish', topic);
    if (!this._topics.hasOwnProperty(topic)) {
      return false
    }

    for (var i = 0, len = this._topics[topic].length; i < len; i++) {
      this._topics[topic][i].apply(undefined, args)
    }
    return true
  }
}

export default controller
