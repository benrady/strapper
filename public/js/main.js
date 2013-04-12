(function() {
  var appName = 'Strapper';

  function triggerEvent(name, data) {
    $('#content-main>*').trigger(appName + '.' + name, data);
  }

  function bannerTemplate(text) {
    // Insert your templating library of choice here, if desired
    // Mustache, Hogan, Handlebars, etc...
    var banner = $('#template .banner').clone();
    banner.find('.banner-text').text(text);

    // Event Binding example
    // You can define and trigger any arbitrary event.
    // viewClose is automatically triggered when a view is about to close
    banner.bind(appName + '.viewClose', function(e, newViewName) { 
      console.log("Changing to " + newViewName);
    });
    return banner;
  }

  var views = {
    home: function() { return bannerTemplate('This is the home view')},
    about: function() { return bannerTemplate('This is the about view')},
    contact: function() { return bannerTemplate('This is the contact view')},
  };

  function showView(name) {
    triggerEvent('viewClose', name);
    $('.nav li').removeClass('active');
    $('a[href=#' + name +']').closest('li').addClass('active');
    $('#content-main').
      empty().
      append(views[name]());
  }

  function currentView() {
    return window.location.hash.split('#')[1] || 'home';
  }

  $(document).ready(function() {
    window.onhashchange = function() {
      showView(currentView());
      return true;
    };
    showView(currentView());
    $('.appName').text(appName);
  });
})();
