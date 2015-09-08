# Ionic oAuth 2.0 example with "Google + Api"
This is one example to use oAuth authentication in Ionic framework.

## Goals
Show step by step how implement "Google + Api" and oAuth credential.
Basically, the application should offer the google authentication. Once the user accepts the permissions we have the possibility to interact with "Google + api". Finally, we are going to request some data such as name, email, genre, birthday, coverPhoto etc... 

### Include:
- Concept of oAuth
- cordovaOauth
- How configure and available Google oAuth 2.0 to Access Google APIs
- Sing-in button
- Use of "Google + Api"
- Render peronal details

### You should now about...
- Ionic & AngularJS 
- gulp (although it's not completely relevant for this project)


## Step 0: Basic concept oAuth
> The OAuth 2.0 authorization framework enables a third-party application to obtain limited access to an HTTP service, either on behalf of a resource owner by orchestrating an approval interaction between the resource owner and the HTTP service, or by allowing the third-party application to obtain access on its own behalf.  This specification replaces and obsoletes the OAuth 1.0 protocol described in RFC 5849.

For this main reason, OAuth was implemented for different companies such as Google, Facebook, and Tweeter etc. You will have the possibility to implement many solution understanding this one.

## Step 1: Google configuration
There are many step previously to work with an application. It's a relevant point in order to avoid future issues.


### Project
You should create a project in google.
Log-in in your google account and go to [https://console.developers.google.com/project](https://console.developers.google.com/project)

![](https://github.com/cristianmercado19/ionic-oAuth-example/blob/master/images/01%20Projects.png)


### Activation
There are two important configurations. First one, the oAuth `Credential` and second one, the `APIs` availability.

![](https://github.com/cristianmercado19/ionic-oAuth-example/blob/master/images/02%20Overview%20%20%20ebrickApi.png)
 
### Credentials
Go ahead with credentials.

![](https://github.com/cristianmercado19/ionic-oAuth-example/blob/master/images/03%20Credentials%20%20%20ebrickApi.png)

For this particular framework is important to chose `oAuth 2.0 client ID Configuration`.

![](https://github.com/cristianmercado19/ionic-oAuth-example/blob/master/images/04%20Credentials%20%20%20ebrickApi%202.png)

And finally, the strategy will be `Web application`

![](https://github.com/cristianmercado19/ionic-oAuth-example/blob/master/images/05%20Create%20client%20ID%20%20%20ebrickApi%204.png) 

### Client ID
In our application we ar going to use the `Client ID` during the first step. Copy it.
Other relevant configuration will be the `Authorized JavaScript Origins` and `Authorize redirect URIs`.
Complete these fields with `localhost/callback` settings. This will be our `redirect_uri`.

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
         
    3. `redirect_uri`, Determines where the response is sent. In our configuration we put `Http://localhost/callback`[https://github.com/cristianmercado19/ionic-oAuth-example#Client-ID](https://github.com/cristianmercado19/ionic-oAuth-example#Client-ID "Client Id Configuration")
2. Google response: Google call `localhost/callback` sending many parameters, the most important for use will be `access_token`. A response looks like this:
        ```JSON
        {
          "access_token":"1/fFAGRNJru1FTz70BzhT3Zg",
          "expires_in":3920,
          "token_type":"Bearer"
        }```  
3. Call Google + API using the valid token
This will be the last call. In this case, the call is to an API which returns us all users details, the reponse would be similar to thisone:
```JSON
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
}```

## Step 2: Ionic
We are going to start a new project

###