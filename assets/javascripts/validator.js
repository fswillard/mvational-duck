// Validation module
var Validator = {
  is_valid_code: function(code) {
    if (code == undefined || code == '' || code == false) {
      return false
    } else {
      try {
        let index = CryptKey.decrypt_key(code);

        if (parseInt(index) == NaN) {
          return false
        } else if (LINES[index] == undefined) {
          return false
        }
      } catch (e) {
        return false
      }
    }

    return true
  },

  valid_code: function() {
    var loc_href = window.location.pathname,
        regex = new RegExp(/\/m\/(.+?)[\~\&]/g);

    try {
      console.log(loc_href)
      return(regex.exec(loc_href + '~')[1]);
    } catch (e) {
      return false
    }
  }
}
