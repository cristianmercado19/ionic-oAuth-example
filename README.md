# Ionic oAuth 2.0 example with `Google + Api` from the basic concept  
My initial motivation was create a document about oAuth 2.0. I chose `Ionic` framework because I'm developing an application for mobile... In addition, I chose `Google` because it offers a lot of APIs to use with oAuth authentication. I spent many hours with some internal google configurations and `Google +`. For this main reason, I create this example which includes a first part about `Google settings`. 

## Goals
Show step by step how implement `Google + Api` and oAuth credential.
Basically, the application should offer the google authentication. Once the user accepts the permissions we have the possibility to interact with `Google + api`. Finally, we are going to request some data such as name, email, genre, birthday, coverPhoto etc... 

### Include:
- Concept of oAuth
- cordovaOauth
- How configure and available Google oAuth 2.0 to Access Google APIs
- Sing-in button
- Use of `Google + Api`
- Render peronal details

### You should now about...
- Ionic & AngularJS 
- gulp (although it's not completely relevant for this project)


## Step 0: Basic concept oAuth
> The OAuth 2.0 authorization framework enables a third-party application to obtain limited access to an HTTP service, either on behalf of a resource owner by orchestrating an approval interaction between the resource owner and the HTTP service, or by allowing the third-party application to obtain access on its own behalf.  This specification replaces and obsoletes the OAuth 1.0 protocol described in RFC 5849.

For this main reason, OAuth was implemented for different companies such as Google, Facebook, and Tweeter etc. You will have the possibility to implement many solution understanding this one.

## Step 1: Google configuration
There are many step previously to work with an oAuth implementation. It's a relevant point configure these appropriated in order to avoid future issues.


### Project
You should create a project in google.
Go to [https://console.developers.google.com/project](https://console.developers.google.com/project)

![](https://github.com/cristianmercado19/ionic-oAuth-example/blob/master/images/01%20Projects.png)


### Activation
There are two important configurations. First one, the oAuth `Credential` and second one, the `APIs` availability.

![](https://github.com/cristianmercado19/ionic-oAuth-example/blob/master/images/02%20Overview%20%20%20ebrickApi.png)
 
### Credentials
Go ahead with credentials.

![](https://github.com/cristianmercado19/ionic-oAuth-example/blob/master/images/03%20Credentials%20%20%20ebrickApi.png)

For this particular example is important to chose `oAuth 2.0 client ID Configuration`.

![](https://github.com/cristianmercado19/ionic-oAuth-example/blob/master/images/04%20Credentials%20%20%20ebrickApi%202.png)

And finally, the strategy will be `Web application`

![](https://github.com/cristianmercado19/ionic-oAuth-example/blob/master/images/05%20Create%20client%20ID%20%20%20ebrickApi%204.png) 

### Client ID
In our application we are going to use the `Client ID` during the first contact. Copy it.
Other relevant configuration will be the `Authorized JavaScript Origins` and `Authorize redirect URIs`.
Complete these fields with `localhost/callback` settings. This will be our `redirect_uri` by default.

![](https://github.com/cristianmercado19/ionic-oAuth-example/blob/master/images/06%20OAuth%20client%20%20%20ebrickApi.png)

### API configuration - Google +
At this moment the credential's configuration has finished. You have the possibility to interact with the oAuth Google's service. However, we are looking for to interact with the `Google + API` in order to get more information about the user.

![](https://github.com/cristianmercado19/ionic-oAuth-example/blob/master/images/07%20API%20Library%20%20%20ebrickApi.png)

In this case you have the possibility to add more APIs, however we are going to limit the example.

![](https://github.com/cristianmercado19/ionic-oAuth-example/blob/master/images/08%20API%20Library%20%20%20ebrickApi%202.png)

![](https://github.com/cristianmercado19/ionic-oAuth-example/blob/master/images/09%20Google%20%20Hangouts%20API%20%20%20ebrickApi.png)

![](https://github.com/cristianmercado19/ionic-oAuth-example/blob/master/images/10%20Google%20%20Hangouts%20API%20%20%20ebrickApi.png)

You can confirm the enabled API's

![](https://github.com/cristianmercado19/ionic-oAuth-example/blob/master/images/11%20Enabled%20APIs%20%20%20ebrickApi%203.png) 

### Understanding the oAuth sequence
1. Our application should call google account service using different parameters. We will focus only in three.
    1. `Client ID`, in order to identify the application.
    2. `Scope`, in order to access into profile
        > Scopes are used to grant an application different levels of access to data on behalf of the end user. Each API may declare one or more scopes.

        You can determinate the correct `scope` using the API's Explorer.
![](https://github.com/cristianmercado19/ionic-oAuth-example/blob/master/images/12%20Google%20APIs%20Explorer.png)
![](https://github.com/cristianmercado19/ionic-oAuth-example/blob/master/images/13%20Google%20APIs%20Explorer%20Scope.png)
         
    3. `redirect_uri`, Determines where the response is sent. We are gong to use the default `Http://localhost/callback` [Viewed in Client-ID section](https://github.com/cristianmercado19/ionic-oAuth-example#client-id)
2. Google response: Google call `localhost/callback` sending many parameters, the most important for use will be `access_token`. A response looks like this:
        ``` json
        {
          "access_token":"1/fFAGRNJru1FTz70BzhT3Zg",
          "expires_in":3920,
          "token_type":"Bearer"
        }```  
3. Call Google + API using the valid token, EG:
    `https://www.googleapis.com/plus/v1/people/me?Access_token=157k550fq2itjk503hgovk9q`
4. Google + returns all user detail, the response would be similar to this one:
```
	{
	 "kind": "plus#person",
	 "etag": "\"gLJfwb9Xp0\"",
	 "gender": "male",
	 "emails": [
	  {
	   "value": "cristianmercado19@gmail.com",
	   "type": "account"
	  }
	 ],
	 "urls": [
	  {
	   "value": "http://picasaweb.google.com/cristianmercado19",
	   "type": "otherProfile",
	   "label": "Álbumes web de Picasa"
	  },
	  {
	   "value": "https://profiles.google.com/1001376123/buzz",
	   "type": "contributor",
	   "label": "Buzz"
	  }
	 ],
	 "objectType": "person",
	 "id": "10115933",
	 "displayName": "Cristian Mercado",
	 "name": {
	  "familyName": "Mercado",
	  "givenName": "Cristian"
	 },
	 "url": "https://plus.google.com/+CristianMercado",
	 "image": {
	  "url": "https://lh5.googleusercontent.com/-0BzdoU/AAAAAAI/AAAAJuA/Higp_U2Q/photo.jpg?sz=50",
	  "isDefault": false
	 },
	 "isPlusUser": true,
	 "language": "en_GB",
	 "ageRange": {
	  "min": 21
	 },
	 "circledByCount": 51,
	 "verified": false,
	 "cover": {
	  "layout": "banner",
	  "coverPhoto": {
	   "url": "https://lh3.googleusercontent.com/-s0335RE/VE5gvVSI/AAAAIgc/ptpOME/s630-fcrop64=1,0000ec61f584/DSC2_0079.jpg",
	   "height": 626,
	   "width": 940
	  },
	  "coverInfo": {
	   "topImageOffset": 0,
	   "leftImageOffset": 0
	  }
	 }
	}
```

![](https://github.com/cristianmercado19/ionic-oAuth-example/blob/master/images/oAuth.png)

## Step 2: Ionic & ng-Cordova
We are going to start a new project environment

    ionic start oAuthTest blank

    ionic platform add android

    bower install ng-cordova-oauth -S

	cordova plugin add https://git-wip-us.apache.org/repos/asf/cordova-plugin-inappbrowser.git

> include in the index the ng-cordova-oauth.min.js reference.

### oAuthApp.js
This will be our app js.

1. Create `oAuthApp.js` in `js` folder
Content:

``` javascript
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
```

2. Update reference in index.html
    Change 
`<script src="js/app.js"></script>`
to
`<script src="js/oAuthApp.js"></script>`

### signIn-ctrl.js
This controller will manage the connection between our application and the google api

1. Create `signIn-ctrl.js` in `js` folder
Content:

``` javascript
	angular.module('oauthapp').controller('SignInCtrl', ['$http', '$scope', '$cordovaOauth', '$ionicPopup', SignInCtrl]);
	
	function SignInCtrl($http, $scope, $cordovaOauth, $ionicPopup) {
	  console.log("SignInCtrl init");
	
	  var vm = this;
	
	  vm.token = {};
	
	  vm.googleLogin = function () {
	
	    console.log("googleLogin init");
	
	    // complete with YOUR parameter
	    var googleClientId = "[CLIENT_ID]";
	
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

```

2. Add reference in index.html
    `<script src="js/signIn-ctrl.js"></script>`

### Views

### Index view

1. Organize the body content

``` HTML
    <body ng-app="oauthapp">
    
    <ion-nav-view></ion-nav-view>
    
    </body>
    </html>
```


#### Login view

1. Create `login.html` file in the root (`www`)
2. Content
``` HTML
	<ion-pane>
	  <ion-header-bar class="bar-stable">
	    <h1 class="title">Ionic Blank Starter</h1>
	  </ion-header-bar>
	  <ion-content ng-controller="SignInCtrl as vm">
	    <div class="padding">
	
	      <button class="button button-block button-positive" ng-click="vm.googleLogin()">
	        Sign-In
	      </button>
	
	      <h1>{{vm.token}}</h1>
	
	      <button class="button button-block button-positive" ng-click="vm.viewProfile()">
	        View profile
	      </button>
	    </div>
	
	  </ion-content>
	</ion-pane>
```

### Start
1. Start in server mode and check 
`ionic serve`

2. Check the view
![](https://github.com/cristianmercado19/ionic-oAuth-example/blob/master/images/14%20Mobile.png)


## Demo
1. Prepare the apk using this command `ionic build android`

> REMEMBER: this kind of service (oAuth) can not be tested using `serve` mode.

### Mobile Sequence
![](https://github.com/cristianmercado19/ionic-oAuth-example/blob/master/images/Screenshot_2015-09-08-14-37-40.jpg)
![](https://github.com/cristianmercado19/ionic-oAuth-example/blob/master/images/Screenshot_2015-09-08-14-45-13.jpg)
![](https://github.com/cristianmercado19/ionic-oAuth-example/blob/master/images/Screenshot_2015-09-08-14-45-47.jpg)
![](https://github.com/cristianmercado19/ionic-oAuth-example/blob/master/images/Screenshot_2015-09-08-14-46-02.jpg)
![](https://github.com/cristianmercado19/ionic-oAuth-example/blob/master/images/Screenshot_2015-09-08-14-46-13.jpg)
![](https://github.com/cristianmercado19/ionic-oAuth-example/blob/master/images/Screenshot_2015-09-08-14-46-39.jpg)

### Resources

[ngCordovaOauth github](https://github.com/nraboy/ng-cordova-oauth)
[ngCordovaOauth blog](http://blog.ionic.io/oauth-ionic-ngcordova/)
[apis explorer plus](https://developers.google.com/apis-explorer/?hl=en_US#p/plus/v1/plus.people.get?userId=me&_h=5&)
[oAuth2 web server Google documentation](https://developers.google.com/identity/protocols/OAuth2WebServer)
[Authorizing API requests SCOPES](https://developers.google.com/+/web/api/rest/oauth)
[APIs explorer](https://developers.google.com/apis-explorer/?hl=en_US#p/)