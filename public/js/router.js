/**
 * Strapper View Events and Routing
 * http://github.com/benrady/strapper
 * benrady@gmail.com
 */

function triggerEvent(name, data, elem) {
  (elem || $('#content-main>*')).trigger(name, data);
}

function changeToView(name, data) {
  var newHash = "#" + name;
  if(data) {
    newHash += "-" + data;
  }
  window.location.hash = newHash;
}

function showView(name, data) {
  triggerEvent('viewClose', name);
  $('#content-main').
    empty().
    append(routes[name](data));
}

function viewData() {
  var hash = window.location.hash.split('#')[1];
  if(hash) {
    return hash.split('-')[1];
  }
}

function currentView() {
  var hash = window.location.hash.split('#')[1];
  if(hash) {
    return hash.split('-')[0];
  }
  return 'home';
}

var routes = {}; // Define these in your app

$(document).ready(function() {
  window.onhashchange = function() {
    showView(currentView());
    return true;
  };
  showView(currentView());
});
