export default {

  /**
   * cross browser addEvent
   * @param {string}   event The event to add
   * @param {Function} fn    [description]
   */
  add (element, event, fn) {
    // check if element is a compoenent
    element = element.root || element

    // avoid memory overhead of new anonymous functions for every event handler that's installed
    // by using local functions
    function listenHandler (e) {
      var ret = fn.apply(this, arguments)
      if (ret === false) {
        e.stopPropagation()
        e.preventDefault()
      }
      return (ret)
    }

    function attachHandler () {
      // set the this pointer same as addEventListener when fn is called
      // and make sure the event is passed to the fn also so that works the same too
      var ret = fn.call(element, window.event)
      if (ret === false) {
        window.event.returnValue = false
        window.event.cancelBubble = true
      }
      return (ret)
    }

    if (element.addEventListener) {
      element.addEventListener(event, listenHandler, false)
    } else {
      element.attachEvent('on' + event, attachHandler)
    }

    return this
  },

  /**
   * cross browser removeEvent
   * @param  {string}   event The event to remove
   * @param  {Function} fn    [description]
   * @return {Object}         [description]
   */
  remove (element, event, fn) {
    element = element.root || element

    if (element.removeEventListener) {
      element.removeEventListener(event, fn, false)
    } else if (element.detachEvent) {
      element.detachEvent('on' + event, element[fn.toString() + event])
      element[fn.toString() + event] = null
    } else {
      element['on' + event] = function () {}
    }

    return this
  }
}
