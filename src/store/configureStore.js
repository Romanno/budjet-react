import {applyMiddleware, combineReducers, createStore} from "redux";
import entriesReducer from '../reducers/entries.reducer';
import {composeWithDevTools} from "redux-devtools-extension";
import modalsReducer from '../reducers/modals.reducers';
import createSagaMiddlevare from 'redux-saga';
import initSagas from "../sagas";

const sagaMiddleware = createSagaMiddlevare();
const middlewares = [sagaMiddleware];
const configureStore = () => {
    const store = createStore(combineReducers({
        entries: entriesReducer,
        modals: modalsReducer,
    }), composeWithDevTools(applyMiddleware(...middlewares)));
    initSagas(sagaMiddleware);
    return store;
};

export default configureStore;
