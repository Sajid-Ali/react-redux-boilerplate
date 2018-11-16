import { createStore, applyMiddleware } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import thunkMiddleware from 'redux-thunk';
import promiseMiddleware from 'redux-promise-middleware';
import { composeWithDevTools } from 'redux-devtools-extension';
import { createLogger } from 'redux-logger';
import rootReducer from './rootReducer';
import InitLocalization from './localize';

const persistConfig = {
	key: 'state',
	storage,
};


const persistedReducer = persistReducer(persistConfig, rootReducer);


const loggerMiddleware = createLogger();


const store = createStore(persistedReducer, composeWithDevTools(applyMiddleware(
	thunkMiddleware,
	promiseMiddleware(),
	loggerMiddleware,
)));


const persistor = persistStore(store);

InitLocalization(store.dispatch, store.getState());

export { persistor };

export default store;
