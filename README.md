# Ionic oAuth 2.0 example with "Google + Api"
This is one example to use oAuth authentication in Ionic framework.

## Goals
Show step by step how implement "Google + Api" and oAuth credential.
Basically, the application should offer the google authentication. Once the user accepts the permissions we have the posibility to interact with "Google + api". Finally, we are going to request some data such as name, email, genre, birthday, coverPhoto etc... 

### Include:
- Concept of oAuth
- How configure and available Google oAuth 2.0 to Access Google APIs
- Login screen
- Use of "Google + Api"
- Render of configuration

### You should now about...
- Ionic & AngularJS 
- gulp (although it's not completly relevant for this proyect)


## Step 0: Basic concept oAuth
> The OAuth 2.0 authorization framework enables a third-party application to obtain limited access to an HTTP service, either on behalf of a resource owner by orchestrating an approval interaction between the resource owner and the HTTP service, or by allowing the third-party application to obtain access on its own behalf.  This specification replaces and obsoletes the OAuth 1.0 protocol described in RFC 5849.

For this main reason, OAuth was implemented for different companies such as Google, Facebook, Tweeter etc. You will have the posibility to implement many solution underestanding this one.

## Step 1: Google configuration
There are many step previously to work with an application. It's a relevant point in order to avoid future issues.

### Project
You yould create a project in google.
Log-in in your google account and go to [https://console.developers.google.com/project](https://console.developers.google.com/project)

![](https://github.com/cristianmercado19/ionic-oAuth-example/blob/master/images/01%20Projects.png)