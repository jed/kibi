kibi
=======

Goal
----

An easy-to-use single-page app framework in 1,024 bytes of JavaScript. kibi currently weighs in about 200 bytes less, so there's still room for improvement. You can see it an action [on heroku](http://kibi.herokuapp.com/).

Features
--------

Right now, kibi includes:

- a template engine,
- a router,
- a JSONP implementation
- a page load indicator, and
- pushState support.

Background
----------

kibi was inspired by running [140byt.es](http://140byt.es). Having learned so much about tuning tiny code, I figured I would take code golfing to its logical extreme, and create the tiniest web framework possible.

I initially planned to release kibi at [JSConf.eu '11](http://jsconf.eu), but unfortunately, ran out of time and had to scale back my slides. But I did write some interesting code, and wanted to share it.

This repo is a snapshot of what I had built, published as an exploration of the cool things still possible with very little code. If you'd like to develop it yourself, please feel free to take over this fork!

Approach
--------

Originally, I thought I could take all the [byte-pinching knowlege](https://github.com/jed/140bytes/wiki/Byte-saving-techniques) I'd learned with [140byt.es](http://140byt.es) to make the tiniest possible library. I event tried to abstract some of these hacks into [helpful libraries](https://github.com/jed/namedrop) to do the golfing for you.

But you know what? It turns out that all those little operator hacks pale in comparison to a higher-level approach to compression. Above several hundred bytes, it pays more to write very consistent code over very hand-optimized code, and then run it through [uglify](http://marijnhaverbeke.nl/uglifyjs), and then [jscrush](http://www.iteral.com/jscrush/). Using these two libraries can cut code size in half, assuming you code as regularly as possible to maximize compression, such as by using local variables instead of properties, and reusing property names wherever possible.

Building a kibi app
-------------------

kibi apps are declarative, and consist of several named/routed templates, each of which lives in its own script tag. When kibi loads, it parses every script tag with a `data-kibi` attribute into its own template. The `data-kibi` attribute should be set to a loose JSON object with the following keys:

- `pathname` (optional): a regular expression. when this is matched, the template is rendered to the page body.
- `id` (optional): a string. this allows templates to be called from within other templates by name, on the global `kibi.template` object.
- `location` (optional): a JSONP url. when a template with a location is rendered, it is rendered using the data returned from the url. pretty neat, eh?

A kibi app should have this structure:

```html
<html>
<!-- use scripts as you would normally-->
<script src="/jquery.js"></script>

<!-- use the text/plain type to avoid evaluation -->
<script type="text/plain" data-kibi='{
  pathname: /^\/$/,
  location: "http://mydomain.com/examplejsonp?callback="
}'>
  <p>Welcome to my site!</p>

  <p>Here is some dynamic content:</p>

  <p><% JSON.stringify(this) %></p>

  <% kibi.template.footer() %>
</script>

<script type='text/plain' data-kibi='{id: "footer"}'>
  <p>This is the footer.</p>
</script>

<script type='text/plain' data-kibi='{pathname: /.*/}'>
  <h1>Not found.</h1>
</script>

<!-- load kibi last to make sure it can find everything -->
<script><!-- inlined kibi source code--></script>
</html>
```

For a better example, see the kibi sample app itself.

Installation and Setup
----------------------

To install, enter:

    $ npm install kibi

To see the demo, enter:

    $ npm start kibi

and then head to http://localhost:8080.

To build kibi and the demo, enter:

    $ node ./tools/build.js

from the root of the project.

Building will take a few seconds, and show you the size of the library after compression like this:

    building kibi.js...
    - raw: 2089 bytes
    - uglified: 1124 bytes
    - crushed: 1013 bytes
    - uglycrushed: 840 bytes
    kibi.js built successfully: 840 bytes (-184)

License
-------

Copyright (c) 2011 Jed Schmidt, http://jed.is/
 
Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
"Software"), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:
 
The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.
 
THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.