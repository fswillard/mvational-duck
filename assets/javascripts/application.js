// Update window location
window.history.pushState({ page: 1 }, "Pato Motivacional", window.location.href.replace(/\?\//g, ''));
console.log(window.history)

// Verify for valid motivational code
var code = Validator.valid_code();
console.log(code)

if (window.location.pathname == '/' || window.location.pathname == '') {
  // Display categories layout
  Display.display_categories();
} else if (Validator.is_valid_code(code)) {
  // Display motivational line layout
  Display.display_motivational(code);
}
 else {
   // Display 404 layout
  Display.display_not_found();
}

// Displays copyright year at footer
Display.display_year();
