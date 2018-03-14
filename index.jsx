import "regenerator-runtime/runtime";
import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './components/App.jsx';
import { Provider } from 'react-redux'; 
import { applyMiddleware, createStore } from 'redux';
import rootReducer from './redux/reducers/rootReducer.jsx';
import logger from 'redux-logger';
import createSagaMiddleware from 'redux-saga'
import mySaga from './redux/sagas/saga.js'
const sagaMiddleware = createSagaMiddleware();
const store = createStore(
	rootReducer,
	applyMiddleware(logger, sagaMiddleware)

)

sagaMiddleware.run(mySaga)

const Index = () => (
	<Provider store={store}>
    	<BrowserRouter>
        	<App/>
    	</BrowserRouter>
    </Provider>
)


render(<Index/>, document.getElementById('root'));