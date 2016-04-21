# Module Pattern

## Basic Module Pattern, Import Mixins and Exports

Advantages:

* True JavaScript encapsulation

* Supports private data

Weaknesses:

* Can't access private members at a later point

* Can't create automated unit tests for private members

* Privates are hard to extend and can't be easily extended


## Revealing Module Pattern

Advantages:

* Eases readability due to consistent syntax

Weaknesses:

* If a private function refers to a public function, that public function can't be overriden if patch is necessary. This is because the private function will continue to refer to the private implementation and the pattern doesn't apply to public members, only to functions

* Same rule as above for public object members which refer to private variables



