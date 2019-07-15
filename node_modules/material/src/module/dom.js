'use strict'

/**
 * Element insertion related methods
 * @module module/dom
 */

/**
 * Inserts content specified by the container argument at the end of HTMLElement
 *
 * @param {HTMLElement} container
 * @param {String|HTMLElement} html
 * @return {HTMLElement} inserted element
 */
function append (container, element) {
  container.appendChild(element)
  return element
}

/**
 * Inserts content specified by the html argument at the beginning of HTMLElement
 *
 * @param {HTMLElement} container
 * @param {string|HTMLElement} html
 * @returns {HTMLElement} inserted container
 */
function prepend (container, element) {
  return container.insertBefore(element, container.firstChild)
}

/**
 * Inserts content specified by the html argument after the HTMLElement
 *
 * @param {HTMLElement} container
 * @returns {HTMLElement} inserted container
 */
function after (container, element) {
  return container.parentNode.insertBefore(element, container.nextSibling)
}

/**
 * Inserts content specified by the html argument before the HTMLElement
 *
 * @param {HTMLElement} container
 * @returns {HTMLElement} inserted container
 */
function before (container, element) {
  return container.insertBefore(element, container)
}

/**
 * Replaces given html container with content specified in html parameter
 *
 * @param {HTMLElement} container
 * @param {string|HTMLElement} html
 * @returns {HTMLElement} inserted container
 */
function replace (container, element) {
  return container.parentNode.replaceChild(element, container)
}

/**
 * Removes HTMLElement from dom tree
 *
 * @param {HTMLElement} container
 * @returns {HTMLElement} removed container
 */
function remove (element) {
  var parent = element.parentNode
  return parent.removeChild(element)
}

/**
 * [dispose description]
 * @return {Object} The class instance
 */
function dispose (element) {
  var el = element
  return (el.parentNode) ? el.parentNode.removeChild(el) : el
}

/**
 * empty
 * @return {void}
 */
function empty (element) {
  while (element.firstChild) {
    element.removeChild(element.firstChild)
  }
}

/**
 * [destroy description]
 * @return {Object} this class
 */
function destroy (element) {
  return element.parentNode.removeChild(element)
}

export default { append, prepend, after, before, replace, remove, destroy, empty, dispose }
