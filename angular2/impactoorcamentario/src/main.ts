import {bootstrap} from 'angular2/platform/browser';
import {enableProdMode} from 'angular2/core';
import {FORM_PROVIDERS} from 'angular2/common';
import {HTTP_PROVIDERS} from 'angular2/http';
import {ROUTER_PROVIDERS} from 'angular2/router';

/**
 o webpack só é reconhecido se tiver a pasta typings_custom (angular2.d.ts, jquery.d.ts e webpack.d.ts) não é necessário
*/
if (webpack.ENV === 'production') {
  enableProdMode();
}

import ApplicationComponent from './app/components/application/application';
// import {ONLINE_AUCTION_SERVICES} from './app/services/services';

bootstrap(ApplicationComponent, [
  FORM_PROVIDERS,
  HTTP_PROVIDERS,
  ROUTER_PROVIDERS //,
  // ONLINE_AUCTION_SERVICES
]).catch(console.error.bind(console));
