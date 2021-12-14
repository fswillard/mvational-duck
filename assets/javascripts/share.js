// Share module
var Share = {
  display_shr_code: function(shr_code) {
    // Generate encoded URL with share code
    var loc_href = window.location.href.split("?")[0],
        enc_href = loc_href + '?q=' + shr_code;

    Share.assign_facebook_href(enc_href);
    Share.assign_twitter_href(enc_href);
    Share.assign_copy_href(enc_href);
    Share.assign_reload_href(loc_href);
  },

  assign_facebook_href: function(href) {
    // Update links href attribute
    $('#options-facebook').attr('href', 'https://www.facebook.com/sharer/sharer.php?u=' + href + '&t=Pato Motivacional');

    // Update Facebook action
    $('#options-facebook').click(function(e) {
      e.preventDefault();
      Display.display_href($(this).attr('href'));
    });
  },

  assign_twitter_href: function(href) {
    // Update links href attribute
    $('#options-twitter').attr('href', 'https://twitter.com/share?url=' + href + '&text=Pato Motivacional');

    // Update Twitter action
    $('#options-twitter').click(function(e) {
      e.preventDefault();
      Display.display_href($(this).attr('href'));
    });
  },

  assign_reload_href: function(href) {
    // Assign function to reload button
    $('#options-reload').click(function(e) {
      e.preventDefault();

      window.history.pushState('', '', href);
      location.reload();
    });
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
