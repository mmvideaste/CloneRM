/* === MM Vidéaste minimal JS (one JS file) === */
document.addEventListener('DOMContentLoaded', function(){
  var toggle = document.querySelector('.nav-toggle');
  var nav = document.querySelector('nav.primary');
  if(toggle && nav){
    toggle.addEventListener('click', function(){ nav.classList.toggle('open'); });
  }
  var search = document.querySelector('form[role="search"]');
  if(search){
    search.addEventListener('submit', function(e){
      var q = search.querySelector('input[type="text"]');
      if(q && !q.value.trim()){ e.preventDefault(); }
    });
  }
});