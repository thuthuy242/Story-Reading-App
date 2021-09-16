import { all } from 'redux-saga/effects';
import { combineReducers } from 'redux';
import layoutReducer from './layout/layout.reducer'
export const rootReducer = combineReducers({

    layoutReducer: layoutReducer

});
export function* rootSaga() {
    yield all([
        //   authAction(),
        //   totalAction(),
        //   itemAction()
    ]);
}
