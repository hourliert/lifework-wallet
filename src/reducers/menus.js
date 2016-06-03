import { reducerFactory } from 'retax';

import {
  WALLET,
} from 'constants/routes';

export default reducerFactory(
  [
    {
      icon: 'home',
      label: 'Home',
      url: WALLET,
    },
  ],
  {}
);
