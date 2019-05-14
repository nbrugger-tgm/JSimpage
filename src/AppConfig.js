import DefaultPage from "./components/DefaultPage.js";

class AppConfig {
    //usePreload;
    name;
    permaCache = false;
    defaultPage = DefaultPage;
    defaultPath = "#home";
    useBootstrap = true;
    bootstrapVersion = "4.3.1";
    charset = "UTF-8";
}

export default AppConfig;