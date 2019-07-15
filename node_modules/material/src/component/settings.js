import cookies from '../module/cookies'
import merge from '../module/merge'

function set (key, value) {
  var text = cookies.get(key)

  var current = {}

  if (text) {
    current = JSON.parse(text)
  }

  console.log('settings value', current, value)
  // settings = [settings, value].reduce(Object.assign, {});
  var settings = merge(current, value)

  console.log('settings ' + key, settings)

  cookies.set(key, JSON.stringify(settings))
}

function get (key) {
  var json = cookies.get(key)

  if (!json) {
    return null
  }
  var value = JSON.parse(json)

  console.log('settings' + key, value)

  return value
}

export default { set, get }
