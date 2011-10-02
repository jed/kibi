kibi = new function() {
  var body = document.body
    , onclick = document.onclick
    , guid = 0
    , i
    , loader = document.createElement('b')
    , routes = []

    , currentUrl
    , currentMatch
    , currentRoute
  
  loader.id = 'kibi'

  this.template = template

  for (i = 0; currentMatch = document.getElementsByTagName('script')[i++];) {
    if (currentRoute = Function('return ' + currentMatch.getAttribute('data-kibi'))()){
      currentRoute.template = template(currentMatch.innerHTML)
      template[currentRoute.id] = routes[guid++] = currentRoute
    }
  }

  document.onclick=function(e) {
    onclick(e)

    e = (e || event).target

    if (e.getAttribute('data-kibi')) {
      e = e.getAttribute('href')

      history.pushState
        ? history.pushState(0, 0, e)
        : location.hash = '!' + e

      return false
    }
  }

  poll(setInterval(poll,50))

  function display(data) {
    body.innerHTML = currentRoute.innerHTML(data)
  }

  function update(url) {
    for (i = 0; currentRoute = routes[i++];) {
      console.log(currentRoute);

      // if (currentMatch = url.match(currentRoute.pathname)){
      //   return currentRoute.location
      //     ? jsonp(currentRoute.location, display)
      //     : display(currentMatch)
      // }
    }
  }

  function template(source) {
    return function(data) {
      return source.replace(/<%(.*?)%>/g, function(x, code){
        return Function('return ' + code).call(data)
      })
    }
  }

  function jsonp(url, callback) {
    body
      .appendChild(document.createElement('script'))
      .src = url + (url = 'script' + guid++)

    body.appendChild(loader)
    loader.innerHTML = '|'

    window[url] = function(data){
      body.removeChild(loader)
      window[url] = callback(data)
    }
  }

  function poll() {
    loader.innerHTML += '|'
    var url = location.pathname + location.search

    // if (!history.pushState && location.hash.match(/^#/)) {
    //   url = location.hash.slice(1)
    // }

    currentUrl == url || update(currentUrl = url)
  }
}