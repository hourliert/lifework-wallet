import { WALLET } from 'constants/routes';
import { WalletPage } from 'routes/wallet/container';

export default function getRoute() {
  return {
    path: WALLET,
    component: WalletPage,
  };
}
