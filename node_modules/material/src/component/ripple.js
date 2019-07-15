import create from '../element/create'
import insert from '../element/insert'
import offset from '../element/offset'

const defaults = {
  transition: '.5s cubic-bezier(0.4, 0.0, 0.2, 1)',
  opacity: ['1', '.3']
}

/**
 * init ripple
 * @param  {?} container [description]
 * @return {?}           [description]
 */
function init (instance) {
  instance.on('built', (container) => {
    set(container)
  })
}

function set (container) {
  container.addEventListener('mousedown', (e) => {
    show(e)
  })
}
/**
 * show method
 * @param  {event} e The event related to the the touch
 * @param  {Object} coord
 * @return {void}
 */
function show (e) {
  // console.log('show', e);
  var container = e.target
  var offs = offset(container)

  let ripple = create('div', 'material-ripple')
  let end = coordinate(offs)
  let initial = {
    left: (e.offsetX || offs.width / 2) + 'px',
    top: (e.offsetY || offs.height / 2) + 'px'
  }

  ripple.style.left = initial.left
  ripple.style.top = initial.top
  ripple.style.opacity = defaults.opacity[1]
  ripple.style.transition = defaults.transition

  insert(ripple, container, 'top')

  setTimeout(() => {
    // console.log('style coord', end);
    ripple.style.left = end.left
    ripple.style.top = end.top
    ripple.style.width = end.size
    ripple.style.height = end.size
    ripple.style.opacity = defaults.opacity[1]
  }, 1)

  document.body.onmouseup = () => {
    destroy(ripple)
  }
}

/**
 * this method hides the given ripple
 * @return {Object} Size and position
 */
function destroy (ripple) {
  if (ripple.parentNode) { ripple.style.opacity = '0' }

  document.body.onmouseup = null

  setTimeout(() => {
    if (ripple.parentNode) { ripple.parentNode.removeChild(ripple) }
  }, 1000)
}

/**
 * Get ripple final coordinates
 * @return {Object} Size and position
 */
function coordinate (offset) {
  var size = offset.width
  var top = -offset.height / 2

  if (offset.width > offset.height) {
    size = offset.width
    top = -(offset.width - offset.height / 2)
  } else if (offset.width < offset.height) {
    size = offset.height
    top = (offset.width - offset.height) / 2
  }

  return {
    size: (size * 2) + 'px',
    top: top + 'px',
    left: (size / -2) + 'px'
  }
}

export default init
