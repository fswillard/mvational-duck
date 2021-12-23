// Share module
var Share = {
  assign_share_buttons: function(code) {
    // Generate URL with share code
    var shr_href = window.location.origin + '/?/m/' + code

    Share.assign_facebook_href(shr_href);
    Share.assign_twitter_href(shr_href);
    Share.assign_copy_href(shr_href);
  },

  assign_facebook_href: function(href) {
    // Update Facebook link href
    $('#options-facebook').attr('href', 'https://www.facebook.com/sharer/sharer.php?u=' + href + '&t=Pato Motivacional');

    // Update Facebook action
    $('#options-facebook').click(function(e) {
      e.preventDefault();

      window.open($(this).attr('href'), '', 'menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=300,width=600');
    });
  },

  assign_twitter_href: function(href) {
    // Update Twitter link href
    $('#options-twitter').attr('href', 'https://twitter.com/share?url=' + href + '&text=Pato Motivacional');

    // Update Twitter action
    $('#options-twitter').click(function(e) {
      e.preventDefault();

      window.open($(this).attr('href'), '', 'menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=300,width=600');
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
