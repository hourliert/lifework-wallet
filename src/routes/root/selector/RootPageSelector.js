import { createStructuredSelector } from 'reselect';

import {
  errorsMapSelector,
  menusSelector,
  leftNavOpenSelector,
  appBarDepthSelector,
} from 'selectors';

export default createStructuredSelector({
  errors: errorsMapSelector,
  menus: menusSelector,
  leftNavOpen: leftNavOpenSelector,
  appBarDepth: appBarDepthSelector,
});
