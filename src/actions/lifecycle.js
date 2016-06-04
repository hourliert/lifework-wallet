import { annotator, AbstractLifecycleManager } from 'retax-components';

import { persistStore } from 'redux-persist';
import immutableTransform from 'redux-persist-transform-immutable';

import { setInitialRenderTime } from 'actions/app';

@annotator.LifecycleManager() // eslint-disable-line
export default class LifecycleActionsCreator extends AbstractLifecycleManager {

  willResolveRoute(hasToken) {
    if (!hasToken) return undefined;

    return dispatch => {
      dispatch(setInitialRenderTime());
    };
  }

  initializationComplete(store) {
    persistStore(store, { transforms: [immutableTransform({})] });
  }
}
