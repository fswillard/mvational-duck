var code = Validator.valid_code(),
    rand = Math.floor(Math.random() * 101);

// Display motivationals
if (Validator.is_valid_code(code)) {
  Carousel.display_motivationals(code);
} else {
  Carousel.display_motivationals(CryptKey.encrypt_key(rand));
}

$('#carousel').on('slid.bs.carousel', function() {
  Share.assign_share_buttons($('.carousel-item.active').data('code'));
});
