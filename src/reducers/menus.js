import { reducerFactory } from 'retax';

import {
  WALLET,
} from 'constants/routes';

export default reducerFactory(
  [
    {
      icon: 'home',
      label: 'Home',
      internal: true,
      url: WALLET,
    },
    {
      icon: 'refresh',
      label: 'Reset',
      action: true,
      actionName: 'RESET',
    },
    {
      icon: 'launch',
      label: 'Github Repo',
      external: true,
      url: 'https://github.com/hourliert/lifework-wallet',
    },
  ],
  {}
);
