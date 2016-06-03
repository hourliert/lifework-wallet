import { makeRootApp, RootPage } from 'routes/root/container';
import getWalletRoute from 'routes/wallet';
import getDefaultRoute from 'routes/default';

import { ROOT } from 'constants/routes';

export default function getRoute({ getState }, userAgent) {
  const walletRoute = getWalletRoute();

  return {
    path: ROOT,
    indexRoute: walletRoute,
    component: makeRootApp(userAgent, RootPage),
    childRoutes: [
      walletRoute,
      getDefaultRoute(),
    ],
  };
}
