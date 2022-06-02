function createSecretHolder(secret) {
    return {
    getSecret:function(){
      return secret
      },
    setSecret:function(value){
      secret=value}
    }
  }