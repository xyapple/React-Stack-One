export default{
  getItem: function(key){
    let value
    try{
      value = localStorage.getItem(key)
    } catch(ex){
      //error in dev
      if(__DEV__) {
        console.log('localStorage.getItemError, ', ex.message)
      }
    } finally{
      return value
    }
  },
  setItem: function(key, value){
    try{
      //respond to error
      localStorage.setItem(key,value)
    } catch(ex){
      //error in dev
      if(__DEV__) {
        console.log('localStorage.getItemError, ', ex.message)
      }
    }
  }
}
