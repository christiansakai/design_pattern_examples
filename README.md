# Design Patterns

Based on [Head First Design Patterns](http://www.headfirstlabs.com/books/hfdp/). Written in Java

# Strategy Pattern

Consider a `Duck` class. There are other classes that inherit from `Duck` class. Some of these classes need different `fly` method, some of these classes need to be able to `fly` but some classes __cannot__ `fly`. 

Instead of implementing `fly` behavior in `Duck` class.  Create an `interface`, from which other `fly` behavior classes inherit from.  These `fly` behavior classes will have their own implementation detail. 

Finally, the `fly` behavior classes can be attached as a variable of different variety of `Duck` class.

__Favor composition over inheritance__

How to Execute: `javac MiniDuckSimulator.java && java MiniDuckSimulator`

# Observer Pattern

Defines a one to many dependency between objects so that when one object changes state, all of its dependents are notified and updated automatically.

One Subject (a.k.a Publisher) and many Observer (a.k.a Subscriber) 
