# Constructor

## Basic Constructor

Weaknesses:

* Inheritance is difficult

* `toString()` function is redefined for each of the new objects created using the Car constructor. It should ideally be shared between all of the instances of the Car type.

## Constructor with Prototype

Advantages:

* `toString()` function is shared between all of the Car objects.
