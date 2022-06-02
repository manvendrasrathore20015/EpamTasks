// SantaClausable Interface
function isSantaClausable(obj) {
    return ['sayHoHoHo', 'distributeGifts', 'goDownTheChimney']
      .every(val => typeof obj[val] === 'function'); 
  }