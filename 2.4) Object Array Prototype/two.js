// A Chain adding function

function add(n){
    var fn = function(x) {
    return add(n + x);
  }; 
  fn.valueOf = function() {
    return n;
  };
  return fn;
}