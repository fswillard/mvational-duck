// Verify for valid motivational code
var code = Validator.valid_code();

if (Validator.is_valid_code(code)) {
  // Display motivational line layout
  Display.display_motivational(code);
} else {
  // Display categories layout
  Display.display_categories();
}

// Displays copyright year at footer
Display.display_year();
