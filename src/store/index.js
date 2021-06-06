import {createStore,applyMiddleware,compose} from 'redux'
import newReducer from "./newReducer1";
import createSagaMiddleware from 'redux-saga'
import mySaga from "./saga";
import allReducer from "./combineReducer";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const sagaMiddleware = createSagaMiddleware();

// const storeEnhancer = applyMiddleware(sagaMiddleware)

const store = createStore(allReducer,composeEnhancers(applyMiddleware(sagaMiddleware)))
sagaMiddleware.run(mySaga)
export default store