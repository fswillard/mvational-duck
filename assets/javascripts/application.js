// Verify for valid code or display a random line
var code = window.location.search.substring(3);

if (Validator.is_valid_code(code)) {
  Display.search_display(code);
} else {
  Display.random_display();
}
