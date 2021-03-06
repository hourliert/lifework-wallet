import { makeRootApp, RootPage } from 'routes/root/container';
import getWalletRoute from 'routes/wallet';
import getDefaultRoute from 'routes/default';

import { ROOT } from 'constants/routes';

export default function getRoute(store, userAgent) {
  const walletRoute = getWalletRoute();

  return {
    path: ROOT,
    indexRoute: { component: walletRoute.component },
    component: makeRootApp(userAgent, RootPage),
    childRoutes: [
      walletRoute,
      getDefaultRoute(),
    ],
  };
}
