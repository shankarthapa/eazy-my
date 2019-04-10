import { createStore, applyMiddleware, compose } from 'redux';
import { createEpicMiddleware } from 'redux-observable';
import { routerMiddleware } from 'react-router-redux';
import rootReducer from '../reducers';
import rootEpic from '../epics';

const epicMiddleware = createEpicMiddleware();


function configureStore() {
  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  const store = createStore(
    rootReducer,
    composeEnhancers(
      applyMiddleware(
        epicMiddleware,
        routerMiddleware( require("history").createBrowserHistory )
      )
    )
  );

    if (module.hot) {
        module.hot.accept(rootReducer, () => {
            const nextRootReducer = require('../reducers/index').default();
            store.replaceReducer(nextRootReducer);
        });
    }

  return store;
}

const store = configureStore();
epicMiddleware.run(rootEpic);

export default store;
