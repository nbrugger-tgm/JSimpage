# JSimpage
### Background information
We use ES6 as syntax and packaging system so the framewok might not works on IOS or Safari
### Get started
The very starting point is an `index.html` to call the JS
````html
    <!DOCTYPE html>  
    <html lang="en">  
	    <head>  
		    <meta charset="UTF-8">  
		    <title></title>  
		    <script type="module" src="src/main.js"></script>  
	    </head>  
	    <body>  
	    </body>  
    </html>
````
The base of every app looks like this
````javascript
import App from "../../src/App.js";  
import AppConfig from "../../src/AppConfig.js";
  
const config = new AppConfig(); 
  
const app = new App("Test",config);  
//we will use that later  
const router = app.router;  

app.start();  
  
//this line is optional for debugging or using the browser console  
window.app = app;
````

> Now We have a working webpage if you acess `localhost/pathtoindexhtml/index.html` you will see the sucess page

### Creating a Page
A Page is like a new HTML file where the user can navigate to. And there is the Class `Page` .


<!--stackedit_data:
eyJoaXN0b3J5IjpbMjM3NDcyMDQzXX0=
-->