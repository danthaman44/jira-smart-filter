$(function() {
  var selector = $( ".js-quickfilter-button" );
  selector.click(function(e) {
    var clicked = $(this);
    if (clicked.hasClass("ghx-active")) {
      if (e.originalEvent !== undefined) {
        selector.each(function(index, element) {
          if ($(this).hasClass("ghx-active")) {
            selector.get(index).click();
          }  
        });
        clicked.get(0).click();
      }
    }
  });
});