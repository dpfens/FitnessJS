'use strict'

let instance = null

/**
 *
 */
class Controller {
  /**
   * Setting up block level variable to store class state
   * , set's to null by default.
   * credits: http://amanvirk.me/singleton-classes-in-es6/
   */
  constructor () {
    if (!instance) {
      instance = this
    }

    this.components = this.components || []
    this.component = this.component || {}

    this.init()

    return instance
  }

  init () {
    this.subscribe('settings', (message) => {
      // console.log('settings', message);
      // this.setSettings(message.key, message.value);
    })
  }

  // setSettings(key, value) {
  //   var text = Cookies.get(key);

  //   var current = {};

  //   if (text) {
  //     current = JSON.parse(text);
  //   }

  //   console.log('settings value', current, value);
  //   //settings = [settings, value].reduce(Object.assign, {});
  //   var settings = merge(current, value);

  //   console.log('settings ' + key, settings);

  //   Cookies.set(key, JSON.stringify(settings));

  // }

  // getSettings(key) {
  //   var json = Cookies.get(key);

  //   if (!json) {
  //     return null;
  //   }
  //   var value = JSON.parse(json);

  //   console.log('settings' + key, value);

  //   return value;

  // }

  /**
   * [register description]
   * @param  {component} component [description]
   * @return {Object} The class instance
   */
  register (component) {
    this.components.push(component)

    this.component[component.name] = this.component[component.name] || []

    this.component[component.name].push(component)

    return this
  }

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
  }

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
  }

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

var controller = new Controller()

export default controller
