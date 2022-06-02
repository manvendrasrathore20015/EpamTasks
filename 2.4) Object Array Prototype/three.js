// Function Cache
function cache(func) {
    var cached = {};  
    return function() {
      var key = JSON.stringify(arguments);
      var isComputed = cached.hasOwnProperty(key);
  
      if (isComputed) {
        return cached[key];
      } else {
        cached[key] = func.apply(null, arguments);
        return cached[key];
      }
    };
  }