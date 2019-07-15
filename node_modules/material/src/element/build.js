import attribute from './attribute'
import create from './create'
import insert from './insert'

function isObject (object) {
  return object &&
    typeof object === 'object' &&
    Object.getPrototypeOf(object) === Object.getPrototypeOf({})
}

function process (string) {
  const tags = string.match(/^[\w-]+/)
  const ids = string.match(/#([\w-]+)/)
  const classes = string.match(/\.[\w-]+/g)
  const names = string.match(/\$([\w-]+)/)

  const properties = {
    tag: tags ? tags[0] : 'div'
  }

  if (ids) properties.id = ids[1]
  if (names) properties.name = names[1]

  if (classes) {
    properties.class = classes
      .join(' ')
      .replace(/\./g, '')
  }

  return properties
}

function build (schema, container, object, level) {
  let element
  object = object || {}

  for (var i = 0; i < schema.length; i++) {
    if (typeof schema[i] === 'string') {
      var property = process(schema[i])
      element = create(property.tag, property.class)
      insert(element, container)

      if (property.name) { object[property.name] = element }
    } else if (isObject(schema[i])) {
      attribute.init(element, schema[i])
    } else if (Array.isArray(schema[i])) {
      build(schema[i], element, object, level)
    }
  }

  return object
}

export default build
