kibi.js
=======

goal
----

an easy-to-use single-page javascript framework in 1,024 bytes

conventions
-----------

- `window.kibi` is where kibi lives
- in methods:
  - `a` is a self-reference to the current method
  - `b` through `f` are ordered argument names
  - `k` is a private variable referencing `window.kibi`
  - TODO: `j` through `z` are internal variables referencing internal methods
  - TODO: `a0` through `zz` are internal variables referencing `document.body` method names