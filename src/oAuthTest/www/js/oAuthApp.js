// Ionic Starter App

angular.module('oauthapp', ['ionic', 'ngCordovaOauth'])
  .run(function($ionicPlatform) {
    $ionicPlatform.ready(function() {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      if(window.cordova && window.cordova.plugins.Keyboard) {
        cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      }
      if(window.StatusBar) {
        // org.apache.cordova.statusbar required
        StatusBar.styleDefault();
      }
    });
  })

  .config(function($stateProvider, $urlRouterProvider) {

    $stateProvider

      .state('login', {
        url: "/sign-in",
        templateUrl: "login.html"
      })

    console.log("Redirection sign-in");

    $urlRouterProvider.otherwise('/sign-in');
});
