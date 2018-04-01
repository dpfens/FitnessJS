// event related functions and listeners
/**
 * on element click
 * @param  {event} e click event
 * @return {void}
 */
function click(e) {
  e.preventDefault()

  // console.log('click caller', arguments.callee.caller)

  if (e && e.target && e.target.disabled === 'disabled') return
  // if (options.upload) return
  // api.emit('click', e)
}

export default click