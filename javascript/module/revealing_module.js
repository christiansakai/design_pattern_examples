var myRevealingModule = (function() {

  var privateVar = 'Ben Cherry';
  var publicVar = 'Hey there!';

  function privateFunction() {
    console.log('Name: ' + privateVar);
  }

  function publicSetName(name) {
    privateVar = name;
  }

  function publicGetName() {
    privateFunction();
  }

  return {
    setName: publicSetName,
    greeting: publicVar,
    getName: publicGetName
  };

})();

console.log(myRevealingModule.greeting);

myRevealingModule.setName('Paul Kinlan');
myRevealingModule.getName();
