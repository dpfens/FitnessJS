export default {
  on (event, cb) {
    this.event = this.event || {}
    this.event[event] = this.event[event] || []
    this.event[event].push(cb)
    return this
  },
  off (event, cb) {
    this.event = this.event || {}
    if (event in this.event === false) return
    this.event[event].splice(this.event[event].indexOf(cb), 1)
    return this
  },
  emit (event /* , args... */) {
    this.event = this.event || {}
    if (event in this.event === false) return
    for (var i = 0; i < this.event[event].length; i++) {
      this.event[event][i].apply(this, Array.prototype.slice.call(arguments, 1))
    }
    return this
  }
}
