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
### Configuration
There are certain configurations to do
````js
permaCache = false;  
defaultPage = DefaultPage;  
defaultPath = "#home";  
useBootstrap = true;  
bootstrapVersion = "4.3.1";  
charset = "UTF-8";
````
You can change them:
````js
let config = new AppConfig();
config.useBootstrap = false;
let app = new App("name",config);
app.start();
````

### Creating a Page
A Page is like a new HTML file where the user can navigate to. And there is the Class `Page` . We like to create a page where the user can log in. *(we will also do the backend later)*
For structure reasons we create an folder `components` and within it a `pages` folder in which we this file: `home.html`
````html
<div>  
	<div class="head"></div>  
	<form>  
		<input type="text" class="name">  
		<input type="password" class="password">  
		<button type="button"></button>  
	</form>  
</div>
````
Now we need an JS class to register listeners and inluding and Bootstrap header.


<!--stackedit_data:
eyJoaXN0b3J5IjpbMTkyODI3NzUwNywxNTY4NDc5NDE2LC0xOD
MyMTY1NTk0LDIzNzQ3MjA0M119
-->