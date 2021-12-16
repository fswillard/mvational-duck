// Share module
var Share = {
  display_share_buttons: function() {
    // Generate encoded URL with share code
    var loc_href = window.location.href.split("?")[0]

    Share.assign_facebook_href(loc_href);
    Share.assign_twitter_href(loc_href);
    Share.assign_copy_href(loc_href);
    Share.assign_random_href();
  },

  assign_facebook_href: function(href) {
    // Update Facebook link href
    $('#options-facebook').attr('href', 'https://www.facebook.com/sharer/sharer.php?u=' + href + '&t=Pato Motivacional');

    // Update Facebook action
    $('#options-facebook').click(function(e) {
      e.preventDefault();
      Display.display_href($(this).attr('href'));
    });
  },

  assign_twitter_href: function(href) {
    // Update Twitter link href
    $('#options-twitter').attr('href', 'https://twitter.com/share?url=' + href + '&text=Pato Motivacional');

    // Update Twitter action
    $('#options-twitter').click(function(e) {
      e.preventDefault();
      Display.display_href($(this).attr('href'));
    });
  },

  assign_random_href: function(href) {
    // Generate random motivational line enc_index
    let index = Math.floor(Math.random() * 101),
        enc_index = CryptKey.encrypt_key(index);

    // Update random link href
    $('#options-random').attr('href', 'https://patomotivacional.com.br/m/' + enc_index);
  },

  assign_copy_href: function(href) {
    // Assign function to copy button
    $('#options-copy').click(function(e) {
      e.preventDefault();

      var textarea = $("<textarea>");
      $("body").append(textarea);
      textarea.val(href).select();
      document.execCommand("copy");
      textarea.remove();

      $('#options-copy-msg').css('opacity', 1);
      setTimeout(function() {
        $('#options-copy-msg').css('opacity', 0);
      }, 3000);
    });
  }
}
