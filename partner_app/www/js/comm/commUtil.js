var COMM_UTIL = {
  //Deplicated
  convertArrayToMap : function(array, key) {
    var retval = [];
    var keys = key.split(".");
    array.forEach(function(value) {
      var cur = value;
      for(var index = 0; index < keys.length; index++) {
        cur = cur[keys[index]];
      }
      retval[cur] = value;
    });
    return retval;
  }
};
