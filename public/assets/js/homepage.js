    document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.carousel');
    var instances = M.Carousel.init(elems, options);
  });

  // Or with jQuery

  $(document).ready(function(){
    $('.carousel').carousel();
  });

  
  var instance = M.Carousel.getInstance(elem);

  /* jQuery Method Calls
    You can still use the old jQuery plugin method calls.
    But you won't be able to access instance properties.

    $('.carousel').carousel('methodName');
    $('.carousel').carousel('methodName', paramName);
  */

  
instance.next();
instance.next(3); // Move next n times.

instance.prev();
instance.prev(3); // Move previous n times.


instance.set();
instance.set(3); // Set to nth slide.
      

instance.destroy();
      

      