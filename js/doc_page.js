var $j = jQuery.noConflict();

$j(document).ready(function () {
  $j('.top_link[data-toggle-selector]').on('click', function (event) {
    var toToggle = $j(event.target).data('toggle-selector');
    var originallyVisible = $j(toToggle).hasClass('visible');
    $j('.toc').removeClass('visible');
    $j(toToggle).toggleClass('visible', !originallyVisible);
    return false;
  });
});
