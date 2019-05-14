````js
/**  
 * If this is true we will create our own custom cache on every client to store all components and pages HTML source and do not load from the server. 
 * This massively decreases traffic but users will not get updates to the files as they change on the server 
 * @type {boolean}  
 */
 permaCache = false;  
  
/**  
 * The class of the default home page 
 * @type {DefaultPage}  
 */
 defaultPage = DefaultPage;  
  
/**  
 * The URL the user gets redirected to if he visits the main path * @type {string}  
 */
 defaultPath = "#home";  
/**  
 * If this is true Bootstrap is loaded at startup 
 * @type {boolean}  
 */
 useBootstrap = true;  
/**  
 * Insert the bootsrapversion to use here 
 * @type {string}  
 */
 bootstrapVersion = "4.3.1";  
  
/**  
 * default charset to set on all pages 
 * @type {string}  
 */
 charset = "UTF-8";
 ````
<!--stackedit_data:
eyJoaXN0b3J5IjpbLTEzMzY2NzYwOThdfQ==
-->