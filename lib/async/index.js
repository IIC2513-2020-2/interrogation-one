function simulateAsyncPromise(data) {
  return new Promise((resolve) => {
    setTimeout(
    () => resolve(data),
    0,
  )
  });
}

module.exports = {
  simulateAsyncPromise,
};
