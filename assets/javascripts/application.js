// Verify for valid code or display a random line
var code = Validator.valid_code();

Display.display_year();

if (Validator.is_valid_code(code)) {
  Display.search_display(code);
} else {
  Display.random_display();
}
