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
        } else if (MOTIVATIONALS[code] == undefined) {
          return false
        }
      } catch (e) {
        return false
      }
    }

    return true
  },

  valid_code: function() {
    var url_search = new URLSearchParams(window.location.search);

    try {
      return(url_search.get('m'));
    } catch (e) {
      return false
    }
  }
}
