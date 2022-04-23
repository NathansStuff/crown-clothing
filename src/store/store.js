import { compose, createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import { rootReducer } from './rootreducer';

const middleWares = [logger];

const composedEnhancers = compose(applyMiddleware(...middleWares));

const persistConfig = {
 key: 'root',
 storage,
 blackList: ['user']
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = createStore(persistedReducer, undefined, composedEnhancers);

export const persistor = persistStore(store);
