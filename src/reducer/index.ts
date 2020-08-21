import { createStore, combineReducers } from 'redux';

import login from './loginReducer';
import home from './homeReducer';
import create from './createReducer';

const rootReducer = combineReducers({
    login,
    home,
    create
});

export type RootState = ReturnType<typeof rootReducer>

export const store = createStore(rootReducer);