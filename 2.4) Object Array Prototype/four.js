// Function Composition
function compose(f,g) {
    return (...args) => f(g(...args));
  }