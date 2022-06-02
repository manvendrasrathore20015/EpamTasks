// new with apply 
function construct(Class) {
    const arr = Array.from(arguments).slice(1)
    return new Class(...arr)
  }