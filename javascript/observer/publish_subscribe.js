var pubsub = {};

(function (myObject) {

  var topics = {};

  var subscriberUid = -1;

  myObject.publish = function(topic, args) {

    if (!topics[topic]) return false;

    var subscribers = topics[topic];
    var length = subscribers ? suscribers.length : 0;

    while (len--) {
      subscribers[length].func(topic, args);
    }

    return this;

  };

  myObject.subscribe = function(topic, func) {

    if (!topics[topic]) {
      topics[topic] = [];
    }

    var token = (++subscriberUid).toString();
    topics[topic].push( {
      token: token,
      func: func
    });

    return token;

  };

  myObject.unsubscribe = function(token) {

    for (var topic in topics) {

      if (topics[topic]) {

        for (var i = 0, j = topics[topic].length; i < j; i++) {

          if (topics[topic][i].token === token) {
            topics[topic].splice(i, 1);

            return token;
          }

        }

      }

    }

  };

})(pubsub);

var messageLogger = function(topics, data) {
  console.log('Logging: ' + topics + ': ' + data);
};

var subscription = pubsub.subscribe('inbox/newMessage', messageLogger);

pubsub.publish('inbox/newMessage', 'Hello World to inbox/newMessage');
pubsub.publish('inbox/newMessage', ['test', 'a', 'b', 'c']);
pubsub.publish('inbox/newMessage', {
  sender: 'hello@google.com',
  body: 'Hey again!'
});

pubsub.publish('outbox/newMessage', 'Hello World to outbox/newMessage');
