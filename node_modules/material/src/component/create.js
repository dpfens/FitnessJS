import classify from './classify'

function create (options) {
  var element = document.createElement(options.tag || 'div')

  classify(element, options)

  return element
}

export default create
