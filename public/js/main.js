
(function() {
  var appName = 'Strapper';

  function triggerEvent(name, args) {
    $('#content-main>*').trigger(appName + '.' + name, args);
  }

  function bannerTemplate(text) {
    // Insert your templating library of choice here, if desired
    // Mustache, Hogan, Handlebars, etc...
    var banner = $('#template .banner').clone();
    banner.find('.banner-text').text(text);
    return banner;
  }

  var views = {
    home: function() { return bannerTemplate('This is the home view')},
    about: function() { return bannerTemplate('This is the about view')},
    contact: function() { return bannerTemplate('This is the contact view')},
  };

  function showView(name) {
    name = name || 'home';
    $('.nav li').removeClass('active');
    $('a[href=#' + name +']').closest('li').addClass('active');
    $('#content-main').
      empty().
      append(views[name]());
  }

  $(document).ready(function(argument) {
    window.onhashchange = function (e) {
      showView(e.newURL.split('#')[1]);
      return true;
    };
    showView(window.location.hash.split('#')[1]);
    $('.appName').text(appName);
  });
})();
