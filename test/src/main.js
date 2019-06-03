import App from "../../src/App.js";
import AppConfig from "../../src/AppConfig.js";
import TobiPage from "../components/pages/TobiPage.js";

const config = new AppConfig();

const app = new App("Test",config);

const router = app.router;
router.addRoute("#tobi/{x}",TobiPage);
router.addRedirect("#nils/{x}","#tobi/{x}");
app.start();

//this line is optional for debugging or using the browser console
window.app = app;