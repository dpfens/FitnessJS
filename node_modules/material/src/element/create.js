import css from '../module/css'

function create (tag, className) {
  tag = tag || 'div'

  var element = document.createElement(tag)
  css.add(element, className)

  return element
}

export default create
