var storage;
(function(s) {
    function Preferences() {

  }

  Preferences.get = function(key) {
    /*
      Get user preferences for specified value
    */
    if(key===undefined) {
      throw Error("key must be set to get preferences");
    }
    if(window.localStorage!==undefined){
      return JSON.parse( localStorage.getItem(key) );
    }else{
      return undefined;
    }
  }

  Preferences.set = function(key, value) {
    if(key===undefined || value===undefined) {
      throw Error("both key and value must be set to set preference");
    }
    if(window.localStorage!==undefined){
      return localStorage.setItem(key, JSON.stringify(value));
    }else{
      return false;
    }
  }

  s.preferences = Preferences;
})(storage || (storage = {}) );