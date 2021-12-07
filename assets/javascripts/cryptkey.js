// Encrypt/Decrypt module
var CryptKey = {
  encrypt_key: function(key) {
    return btoa(key).replace(/\=/g, '9');
  },

  decrypt_key: function(key) {
    return atob(key.replace(/9/g, '='));
  }
}
