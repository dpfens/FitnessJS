import create from '../element/create'
import insert from '../element/insert'

/**
 * [_initIcon description]
 * @param  {string} type
 * @return {string}
 */
function icon (root, svg, options) {
  if (!svg || !root) {
    return
  }

  var position = 'top'
  if (options && options.type === 'text-icon') {
    position = 'bottom'
  }

  var element = create('i', options.class + '-icon')
  insert(element, root, position)

  element.innerHTML = svg
}

export default icon
