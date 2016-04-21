var myModule = (function() {

  var module = {};
  var privateVariable = 'Hello World';

  function privateMethod() {
    console.log('Do something private');
  }

  module.publicProperty = 'Foobar';
  module.publicMethod = function() {
    console.log(privateVariable);
  };

  return module;
  
})();

console.log(myModule.publicProperty);
myModule.publicMethod();
