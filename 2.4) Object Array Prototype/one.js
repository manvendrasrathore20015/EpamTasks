// Using closures to share class state ...
var Cat = (function () {
    var cats = {
      count: 0,
      totalWeight: 0,
      avgWeight: 0
    }
    
    function CatConstruc (name, weight) {
      if (!name || !weight) {
        throw new Error('Both `name` and `weight` should be provided');
      }
      cats.count++;
      this.name = name;
      
      Object.defineProperty(this, 'weight', {
        get: function () {
          return this._weight || 0;
        },
        set: function (val) {
          cats.totalWeight = cats.totalWeight - this.weight + val;
          cats.avgWeight =  cats.totalWeight / cats.count;
          return this._weight = val;
        }
      });
    this.weight = weight;
      
    }
    
    CatConstruc.averageWeight = function () {
      return cats.avgWeight;
    }
    return CatConstruc;
    
  }());