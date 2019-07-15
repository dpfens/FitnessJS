import css from '../module/css'

/**
 * Classify component related functions
 * @module component/classify
 * @category component
 */

/**
 * Init component class
 * @param  {element} element The component root element
 * @param  {object} options component class options
 * @return {Instance} The Class instance
 *
 */
function classify (element, options) {
  css.add(element, options.prefix + '-' + options.class)

  if (options.name) {
    css.add(element, options.class + '-' + options.name)
  }

  if (options.type) {
    css.add(element, options.class + '-' + options.type)
    css.add(element, 'type-' + options.type)
  }

  if (options.color) {
    css.add(element, options.color + '-color')
  }

  if (options.css) {
    css.add(element, options.css)
  }

  if (options.name) {
    // console.log('name', options.name)
    element.dataset.name = options.name
  }

  if (options.label) {
    element.title = options.label
  }

  if (options.style) {
    var styles = options.style.split(' ')
    for (var i = 0; i < styles.length; i++) {
      css.add(element, 'style-' + styles[i])
    }
  }

  if (options.theme) {
    element.classList.add(options.theme + '-theme')
  }
}

export default classify
