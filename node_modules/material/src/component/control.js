import create from '../element/create'
import css from '../module/css'
import insert from '../element/insert'

const KEYCODE = {
  ENTER: 13,
  SPACE: 32
}

var control = {
  /**
   * [toggle description]
   * @return {Object} The class instance
   */
  toggle () {
    if (this.disabled) return

    this.focus()

    if (this.checked) {
      this.check(false)
    } else {
      this.check(true)
    }

    return this
  },

  /**
   * Set checkbox value
   * @param {boolean} value [description]
   */
  check (checked) {
    if (checked) {
      css.add(this.root, 'is-checked')
      this.element.input.checked = true
      this.checked = true
      this.emit('change', this.checked)
    } else {
      css.remove(this.root, 'is-checked')
      this.element.input.checked = false
      this.checked = false
      this.emit('change', this.checked)
    }
    return this
  },

  /**
   * [initLabel description]
   * @return {?} [description]
   */
  label (label) {
    if (!label) return

    this.element = this.element || {}

    if (!this.element.label) {
      this.element.label = create('label', this.options.class + '-label')
    }

    this.element.label.textContent = label

    insert(this.element.label, this.root)
  },

  /**
   * [_initIcon description]
   * @param  {string} type
   * @return {string}
   */
  icon (icon) {
    if (!icon) return

    var position = 'top'
    if (this.options.type === 'text-icon') {
      position = 'bottom'
    }

    this.element = this.element || {}

    this.element.icon = create('i', this.options.class + '-icon')
    insert(this.element.icon, this.root, position)

    this.element.icon.innerHTML = icon
  },

  /**
   * [initLabel description]
   * @return {?} [description]
   */
  error (error) {
    error = error || this.options.error
    if (this.options.error === null) return

    let text = this.options.error || this.options.text

    if (!this.element.error) { this.element.error = create('error', this.options.class + '-error') }

    if (text) {
      this.element.error.textContent = text
    }

    insert(this.element.error, this.root, 'bottom')
  },

  disable () {
    this.disabled = true

    this.element.input.setAttribute('disabled', 'disabled')
    css.add(this.root, 'is-disabled')
    return this
  },

  enable () {
    this.disabled = false

    this.element.input.removeAttribute('disabled')
    css.remove(this.root, 'is-disabled')
    return this
  },

  keydown (e) {
    if (e.altKey) return

    switch (e.keyCode) {
      case KEYCODE.ENTER:
      case KEYCODE.SPACE:
        e.preventDefault()
        this.toggle(e)
    }
  },

  /**
   * [_onInputFocus description]
   * @return {?} [description]
   */
  focus () {
    if (this.disabled === true) return this

    css.add(this.root, 'is-focused')
    if (this.element.input !== document.activeElement) { this.element.input.focus() }
    return this
  },

  /**
   * [_onInputBlur description]
   * @return {?} [description]
   */
  blur () {
    css.remove(this.root, 'is-focused')
    return this
  }
}

export default control
