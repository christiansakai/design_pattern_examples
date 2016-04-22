# Singleton

Restricts instantiation of a class to a single object. It creates a new instance of the class if one doesn't exist. In the event of an instance already existing, it simply returns a reference to that object.

Singleton initialization can be delayed.

Singleton serve as a shared resource namespace which isolate implementation code from the global namespace so as to provide a single point of access for functions.

__Caution:__ when we find ourselves needing it in JavaScript it often is a sign that our logic is tightly coupled or that logic is overl spread across multiple parts of a codebase.


