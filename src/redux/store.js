import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import { createWrapper } from 'next-redux-wrapper'
// import the root reducer
// import rootReducer from './reducers';
// import rootSaga from './sagas';
import createReducer from './reducers'

const bindMiddleware = (middlewares) => {
	// if (process.browser && process.env.NODE_ENV === 'development') {
	//   const { logger } = require('redux-logger');
	//   middlewares.push(logger);
	// }
	return applyMiddleware(...middlewares)
}

export default function makeStore() {
	// * You must create sagaMiddleware inside makeStore function
	// https://github.com/kirill-konshin/next-redux-wrapper/issues/449#issuecomment-1048000623
	const sagaMiddleware = createSagaMiddleware()

	const store = createStore(createReducer(), bindMiddleware([sagaMiddleware]))

	// store.runSaga = sagaMiddleware.run
	// store.runSagaTask = () => {
	// 	store.sagaTask = sagaMiddleware.run(rootSaga)
	// }
	store.injectedReducers = {} // Reducer registry
	store.injectedSagas = {} // Saga registry

	// Make reducers hot reloadable, see http://mxs.is/googmo
	/* istanbul ignore next */
	if (module.hot) {
		module.hot.accept('./reducers', () => {
			store.replaceReducer(createReducer(store.injectedReducers))
		})
	}

	// store.runSagaTask()
	return store
}

export const wrapper = createWrapper(makeStore, { debug: false })
