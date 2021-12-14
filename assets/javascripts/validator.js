// Validation module
var Validator = {
  is_valid_code: function(code) {
    if (code == undefined || code == '') {
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
    var search = window.location.search;

    if (search == undefined || search == '') {
      return ''
    } else {
      var regex = new RegExp(/q\=(.+?)\&/gi);

      return(regex.exec(search + '&')[1]);
    }
  }
}
