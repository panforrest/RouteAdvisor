//<Provider store={store.currentStore()}>
import React, { Component } from 'react'  //component
import ReactDOM from 'react-dom'
import { Posts } from './components/containers'
import { Provider } from 'react-redux'
import store from './stores'

// class App extends Component {
//   render(){
//   	return(
//   	  <Provider store={currentStore()}>
//   	    <Posts />
//   	  </Provider>
//   	)
//   }
// }

const app = (
  <Provider store={store.configureStore()}>  
    <Posts />
  </Provider>
)

ReactDOM.render(app, document.getElementById('root'))