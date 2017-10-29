if (!global.requestAnimationFrame) {
  // eslint-disable-next-line immutable/no-mutation
  global.requestAnimationFrame = callback => setTimeout(callback, 0);
}
