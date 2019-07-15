function is (object) {
  return object &&
    typeof object === 'object' &&
    Object.getPrototypeOf(object) === Object.getPrototypeOf({})
}

export { is }
