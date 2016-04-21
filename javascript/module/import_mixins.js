var myModule = (function($, _) {

  function privateMethod1() {
    $('.container').html('test');
  }

  function privateMethod2() {
    console.log(_.min([10, 5, 100, 2, 1000]));
  }

  return {
    publicMethod: function() {
      privateMethod();
    }
  };

  // Pull in jQuery and Underscore
})(jQuery, _);

myModule.publicMethod();
