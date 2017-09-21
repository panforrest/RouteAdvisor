import { combineReducers, createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { postReducer } from '../reducers'

var store;

export default {//I FORGOT

  configureStore: () => { //I FORGOT

	const reducers = combineReducers({  //NOT var

	  post: postReducer

	})

	store = createStore(
	  reducers,
	  applyMiddleware(thunk)  //applyMiddleware
	)
	return store 

  
  }, 

  currentStore: () => {

    return store
  }


}