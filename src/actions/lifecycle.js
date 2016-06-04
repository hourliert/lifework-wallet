import { persistStore } from 'redux-persist';
import immutableTransform from 'redux-persist-transform-immutable';

import { annotator, AbstractLifecycleManager } from 'retax-components';

import AppActionsCreator from 'actions/app';

@annotator.LifecycleManager({ // eslint-disable-line
  actionsCreators: {
    app: AppActionsCreator,
  },
})
export default class LifecycleActionsCreator extends AbstractLifecycleManager {

  willResolveRoute(hasToken) {
    if (!hasToken) return undefined;

    return dispatch => {
      const { app } = this.actionsCreators;

      dispatch(app.setInitialRenderTime());
    };
  }

  initializationComplete(store) {
    persistStore(store, { transforms: [immutableTransform({})] });
  }
}
