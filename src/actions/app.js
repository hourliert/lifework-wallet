import { actionsCreatorFactory } from 'retax';

import {
  TOGGLE_LEFTNAV,
  OPEN_LEFTNAV,
  CLOSE_LEFTNAV,
  SET_APP_BAR_DEPTH,
  SET_INITIAL_RENDER_TIME,
} from 'constants/actions';

/*
`actionsCreatorFactory` is a shorter way for:
export function openLeftNav(value) {
  return {
    type: OPEN_LEFTNAV,
    payload: value,
  };
}
*/

export const openLeftNav = actionsCreatorFactory(OPEN_LEFTNAV);
export const closeLeftNav = actionsCreatorFactory(CLOSE_LEFTNAV);
export const toggleLeftNav = actionsCreatorFactory(TOGGLE_LEFTNAV);
export const setAppBarDepth = actionsCreatorFactory(SET_APP_BAR_DEPTH);
export const setInitialRenderTime = actionsCreatorFactory(SET_INITIAL_RENDER_TIME);
