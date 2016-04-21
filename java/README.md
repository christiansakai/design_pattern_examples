# Java Design Pattern Examples

Based on [Head First Design Patterns](http://www.headfirstlabs.com/books/hfdp/).

# Strategy Pattern

Defines a family of algorithms, encapsulates each one, and makes them interchangeable. __Strategy__ lets the algorithm vary independently from clients that use it.

## Problem Example

Consider a `Duck` class. There are other classes that inherit from `Duck` class. Some of these classes need different `fly` method, some of these classes need to be able to `fly` but some classes __cannot__ `fly`. 

Instead of implementing `fly` behavior in `Duck` class.  Create an `interface`, from which other `fly` behavior classes inherit from.  These `fly` behavior classes will have their own implementation detail. 

Finally, the `fly` behavior classes can be attached as a variable of different variety of `Duck` class.

## Design Principle

* Identify the aspects of your application that vary and separate them from what stays the same. In this case, `quack` and `fly` are the parts that vary.

* Program to an interface, not an implementation. In this case, `fly` and `quack` is an interface, and not an implementation detail.

* Favor composition over inheritance. In this case, we compose `Duck` related classes from `Duck` class and from `fly` and `quack` related classes.

__How to execute:__ `javac MiniDuckSimulator.java && java MiniDuckSimulator`

# Observer Pattern

Defines a one to many dependency between objects so that when one object changes state, all of its dependents are notified and updated automatically.

One Subject (a.k.a Publisher) and many Observer (a.k.a Subscriber) 

## Problem Example

`WeatherData` class is the one __Subject__ while the __Observers__ are the various display elements that use the weather measurements. 

Every display (the Observers) will have an `update()` method that the `WeatherData` will call. And `update()` is defined in a common interface that all the elements implement.

## Design Principle

* Strive for loosely coupled designs between objects that interact.








