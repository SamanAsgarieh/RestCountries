function ready(fn) {
    if(document.readyState != 'loading') {
      fn();
    } else {
      document.addEventListener('DOMContentLoaded', fn);
    }
  }
  
  var selectedRating = 0;
  
  ready(function(){
  
    function addClass(el, className) {
      if(typeof el.length == "number") {
        Array.prototype.forEach.call(el, function(e,i){ addClass(e, className) });
        return;
      }
        el.classList.add(className);
    }
    function removeClass(el, className) {
      if(typeof el.length == "number") {
        Array.prototype.forEach.call(el, function(e,i){ removeClass(e, className) });
        return;
      }
      if (el.classList)
        el.classList.remove(className);
      else if(el.className)
        el.className = el.className.replace(new RegExp('(^|\\b)' + className.split(' ').join('|') + '(\\b|$)', 'gi'), ' ');
    }
  
    var stars = document.querySelectorAll(".rating-stars a");
    Array.prototype.forEach.call(stars, function(el, i){
      el.addEventListener("mouseover", function(evt){
        removeClass(stars, "selected");
        // For each star up to the highlighted one, add "hover" and for the one that the mouse is hovering on, add "waiting"
        var to = parseInt(evt.target.getAttribute("data-rating"));
        Array.prototype.forEach.call(stars, function(star, i) {
          if(parseInt(star.getAttribute("data-rating")) < to) {
            addClass(star, "hover");
          }
          if(parseInt(star.getAttribute("data-rating")) == to){
            addClass(star, "waiting")
          }
        
        });
      });
    //   If the mouse stops hovering the stars, the classes previously applied to the stars will be removed
      el.addEventListener("mouseout", function(evt){
        removeClass(evt.target, "hover");
        removeClass(evt.target,'waiting');
      });
      el.addEventListener("click", function(evt){
        selectedRating = parseInt(evt.target.getAttribute("data-rating"));
        removeClass(stars, "hover");
        removeClass(stars,'waiting');
        Array.prototype.forEach.call(stars, function(star, i) {
          if(parseInt(star.getAttribute("data-rating")) <= selectedRating) {
            addClass(star, "selected");
          }
        });      
        evt.preventDefault();
      });
    });
    document.querySelector(".rating-stars").addEventListener("mouseout", function(evt){
    //   If The user selects a star, the previous classes will be removed and "selected" is added
      removeClass(stars, "hover");
      removeClass(stars,'waiting');
      if(selectedRating) {
        Array.prototype.forEach.call(stars, function(star, i) {
          if(parseInt(star.getAttribute("data-rating")) <= selectedRating) {
            addClass(star, "selected");
          }
       
        //   The next section is an example of how sending the rating through API would look like
        //   var settings = {
        //     "url": "https://example.com/UUDI/rating/"+selectedRating,
        //     "method": "POST",
        //     "timeout": 0,
        // };
        // $.ajax(settings).done(function (response) {
        //     console.log(response)
        document.getElementById('output').innerHTML="Your Rating has been submitted successfully: " + selectedRating+'stars.';
          // }
        // )
        });      
      }
    });
    
  });