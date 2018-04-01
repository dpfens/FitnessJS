/**
 * extract.f extract a function from a string using dot
 * @param  {string} func A string representing a function accessible in dot notation
 * @return {function}      The function
 */
function f(instance, func) {
  if (!func) return

  if (typeof func === 'function') {
    return func
  } else if (!func.match(/\./)) return instance[func]
  var iteration

  var keys = func.split('.')
  for (var i = 0, l = keys.length; i < l; i++) {
    var key = keys[i]

    iteration = iteration || instance
    iteration = iteration[key]
  }

  return iteration
}

/**
 * extract.e extract a event and the context
 * @param  {[type]} str [description]
 * @return {[type]}     [description]
 */
function e(instance, ev) {
  if (!ev) return instance
  else if (!ev.match(/\./)) return instance[ev]
  var iteration
  var obj = {}
  var element

  var keys = ev.split('.')
  for (var i = 0, l = keys.length; i < l; i++) {
    var key = keys[i]

    iteration = iteration || instance
    iteration = iteration[key]

    if (i === keys.length - 2) {
      element = iteration
    }
  }

  obj.element = element
  obj.name = keys[keys.length - 1]
  return obj
}

export default { e, f }