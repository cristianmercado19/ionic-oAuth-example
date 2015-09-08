/**
 * Created by Cristian on 04/09/2015.
 */

angular.module('oauthapp').controller('SignInCtrl', ['$http', '$scope', '$cordovaOauth', '$ionicPopup', SignInCtrl]);

function SignInCtrl($http, $scope, $cordovaOauth, $ionicPopup) {
  console.log("SignInCtrl init");

  var vm = this;

  vm.token = {};

  vm.googleLogin = function () {

    console.log("googleLogin init");

    // complete with YOUR parameter
    var googleClientId = "**************";

    // Space is delimiter between scope
    $cordovaOauth.google(googleClientId
      , ["https://www.googleapis.com/auth/plus.login https://www.googleapis.com/auth/plus.me https://www.googleapis.com/auth/userinfo.email https://www.googleapis.com/auth/userinfo.profile"])
      .then(function (result) {

        vm.token = result.access_token;

        var resultSTR = JSON.stringify(result);

        /* // EG Response
         {
         "access_token":"Tz70BzhT3Zg",
         "expires_in":3920,
         "token_type":"Bearer"
         }*/

        var alertPopup = $ionicPopup.alert({
          title: 'Success',
          template: resultSTR
        });

      }, function (error) {

        var alertPopup = $ionicPopup.alert({
          title: 'Login failed!',
          template: 'Internal error Server! ' + error
        });

        console.log("Error -> " + error);
      });

  };

  vm.viewProfile = function(){
    var uri = "https://www.googleapis.com/plus/v1/people/me?access_token=" + vm.token;
    console.log("Received User via HTTP");
    console.log(uri);

    $http.get(uri)
      .success(function(data) {
        console.log("HTTP Success");
        console.log("data: " + data);

        var resultSTR = JSON.stringify(data);


        var alertPopup = $ionicPopup.alert({
          title: 'Profile',
          template: resultSTR
        });

        //self.userCache.put(cacheKey, data);
        deferred.resolve(data);
      })
      .error(function(error) {

        var alertPopup = $ionicPopup.alert({
          title: 'Profile failed!',
          template: 'Internal error Server! ' + error
        });


      });
  };



};
