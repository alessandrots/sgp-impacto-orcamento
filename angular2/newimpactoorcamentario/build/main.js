"use strict";
var platform_browser_dynamic_1 = require('@angular/platform-browser-dynamic');
var core_1 = require('@angular/core');
var common_1 = require('@angular/common');
var http_1 = require('@angular/http');
var router_1 = require('@angular/router');
if (webpack.ENV === 'production') {
    core_1.enableProdMode();
}
var application_1 = require('./app/components/application/application');
var services_1 = require('./app/services/services');
platform_browser_dynamic_1.bootstrap(application_1.default, [
    common_1.FORM_PROVIDERS,
    http_1.HTTP_PROVIDERS,
    router_1.ROUTER_PROVIDERS,
    services_1.ONLINE_IMPACTO_SERVICES
]).catch(console.error.bind(console));
//# sourceMappingURL=main.js.map