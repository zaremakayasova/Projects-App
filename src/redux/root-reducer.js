import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import todoReducer from './todo/todo.reducer';

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['todo']
};

const rootReducer = combineReducers({
    todo: todoReducer
});

export default persistReducer(persistConfig, rootReducer);