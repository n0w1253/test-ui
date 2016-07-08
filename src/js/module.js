angular.module('RDash', ['ui.bootstrap', 'ui.router', 'ngCookies','multiStepForm','satellizer']);

/*angular.module('RDash')
  .config(function($authProvider) {


    $authProvider.github({
      clientId: 'GitHub Client ID'
    });

    
//    replace with gitlab???
    $authProvider.oauth2({
      name: 'foursquare',
      url: '/auth/foursquare',
      clientId: 'Foursquare Client ID',
      redirectUri: window.location.origin,
      authorizationEndpoint: 'https://foursquare.com/oauth2/authenticate',
    });

  });
*/