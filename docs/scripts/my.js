jQuery( document ).ready(function() {

  respondToVisibility = function(element, callback) {
    var observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        callback(entry.intersectionRatio > 0);
      });
    });

    observer.observe(element);
  }

  respondToVisibility(document.getElementById("my-counter-group"), visible => {
    if(visible) {
      countUp();
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
  jQuery('.my-counter')
    .removeClass('my-counter')
    .each(function () {
      var $this = jQuery(this);
      var countTo = $this.html();
      $this.html('0');
      setTimeout(function() {
        countUpBy1($this, countTo);
      }, 5);
    });
}
