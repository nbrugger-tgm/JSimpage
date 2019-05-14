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
homeurl = "/#";  
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
for detailed information take a look at [here](Configuration.md)

The most important one is `homeurl`. It is necessary for redirects and they may occour sometimes you dont like to have them when homeurl is not set.

> Think of a situation where your side is hosted on example.com/side
````js
//in this cases we can use it on all hosts (eg. notexample.ac.at/side) 
//but pages ending with side (eg. example.com/side/user/brugger/side/)
//will redirect the users to the home page
config.homeurl = "side/";
//This can only be used at one host but you can be shure that it works as expected
config.homeurl = "http://example.com/side";
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
Now we need an JS class to register listeners and inluding and Bootstrap header. `home.js`
import Page from "../../../src/Page";  
  
js
class home extends Page{  
	constructor() {  
	super("components/pages/home.html","Home");  
	}
}  

export default home;


<!--stackedit_data:
eyJoaXN0b3J5IjpbNTg2OTA0ODY1LDkyNjY0NTgxNCwxNTY4ND
c5NDE2LC0xODMyMTY1NTk0LDIzNzQ3MjA0M119
-->