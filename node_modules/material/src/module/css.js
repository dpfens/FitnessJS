/**
 * This function checks if the element className passed in parameters
 *
 * @since 0.0.6
 * @module css/has
 * @category Element
 * @param {...Array} [arrays] The arrays to process.
 * @param {Function} iteratee The function to combine
 *  grouped values.
 * @returns {Array} Returns the new array of grouped elements.
 * @see unzip, unzipWith, zip, zipObject, zipObjectDeep, zipWith
 * @example
 *
 * has(element, 'show');
 * // => [111, 222]
 */
function has(element, className) {
  if (!element || !className) {
    return false
  }

  return !!element.className.match(new RegExp('(\\s|^)' + className + '(\\s|$)'))
}

/**
 * This function adds className to the element's attribute class
 *
 * @since 0.0.6
 * @module css/add
 * @category css
 * @param {HTMLElement} element Related element
 * @param {String} className the className to add
 *  grouped values.
 * @returns {HTMLElement} The augmented element
 * @example
 *
 * add(element, 'hidden');
 * // => <div class="element hidden">...</div>
 */
function add(element, className) {
  if (!element || !className) {
    return
  }

  let classNames = className.split(' ')

  for (var i = 0; i < classNames.length; i++) {
    var cn = classNames[i]
    if (!has(element, cn)) {
      element.classList.add(cn)
    }
  }
  return element
}

/**
 * This function removes className to the element's attribute class
 *
 * @since 0.0.6
 * @module css/remove
 * @category css
 * @param {HTMLElement} element Related element
 * @param {String} className the className to add
 * @returns {HTMLElement} The element with the removed className
 * @example
 *
 * remove(element, 'hidden');
 * // => <div class="element">...</div>
 */
function remove(element, className) {
  if (!element || !className) {
    return
  }

  element.classList.remove(className)

  return element
}

/**
 * This function toggles className from the element's attribute class
 *
 * @since 0.0.6
 * @module css/toggle
 * @category Element
 * @param {HTMLElement} element Related element
 * @param {String} className the className to add
 *  grouped values.
 * @returns {HTMLElement} The modified element
 * @example
 *
 * toggle(element, 'hidden');
 * // => <div class="element">...</div>
 * toggle(element, 'hidden');
 * // => <div class="element hidden">...</div>
 */
function toggle(element, className) {
  if (has(element, className)) {
    remove(element, className)
  } else {
    add(element, className)
  }

  return element
}

export default { has, add, remove, toggle }