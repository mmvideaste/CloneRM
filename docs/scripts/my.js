jQuery( document ).ready(function() {
  // See https://inorganik.github.io/countUp.js/
  // See https://remysharp.com/2009/01/26/element-in-view-event-plugin/?utm_source=cdnjs&utm_medium=cdnjs_link&utm_campaign=cdnjs_library
  jQuery('.my-counter-group').bind('inview', function (event, visible) {
    if (visible == true) {
      countUp();
      jQuery('.my-counter-group').unbind('inview');
    }
  });

  jQuery('.my-year').html(new Date().getFullYear());
});

function countUpBy1(elem, max) {
  const currentNumber = Math.floor(elem.html());
  if (currentNumber >= max) {
    return;
  }
  nextNumber = currentNumber + 1;
  elem.html(nextNumber);

  setTimeout(function () {
    countUpBy1(elem, max);
  }, 5);
}

function countUp() {
  jQuery('.my-counter').each(function () {
    var $this = jQuery(this);
    var countTo = $this.html();
    $this.html('0');
    setTimeout(function() {
      countUpBy1($this, countTo);
    }, 5);
  });
}
