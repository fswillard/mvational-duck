// Verify for valid code to display or render NotFound (404)
var code = Validator.valid_code();

if (Validator.is_valid_code(code)) {
  // Single Page Apps for GitHub Pages
  // https://github.com/rafgraph/spa-github-pages
  var pathSegmentsToKeep = 0,
      l = window.location,
      href = l.href

  l.replace(
    l.protocol + '//' + l.hostname + (l.port ? ':' + l.port : '') +
    l.pathname.split('/').slice(0, 1 + pathSegmentsToKeep).join('/') + '/?/' +
    l.pathname.slice(1).split('/').slice(pathSegmentsToKeep).join('/').replace(/&/g, '~and~') +
    (l.search ? '&' + l.search.slice(1).replace(/&/g, '~and~') : '') +
    l.hash
  );
  window.history.pushState({ page: 1 }, "Pato Motivacional - Motivacional", href);

  Display.display_motivational(code);
} else {
  Display.display_not_found();
}

// Displays copyright year at footer
Display.display_year();
