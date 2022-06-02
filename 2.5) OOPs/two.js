// Extract Nested Object Reference ..
Object.prototype.hash = function(string) {
    var arr = string.split('.'); 
    return arr.reduce(function(pv, cv)
    { 
      return (pv) ? pv[cv] : pv;
    },this); 
    }