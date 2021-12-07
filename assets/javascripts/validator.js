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
  }
}
