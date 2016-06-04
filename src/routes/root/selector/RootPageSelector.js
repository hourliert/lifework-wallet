import { createStructuredSelector } from 'reselect';

import {
  menusSelector,
  leftNavOpenSelector,
  appBarDepthSelector,
} from 'selectors';

export default createStructuredSelector({
  menus: menusSelector,
  leftNavOpen: leftNavOpenSelector,
  appBarDepth: appBarDepthSelector,
});
