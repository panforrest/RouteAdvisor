import constants from '../constants'

var initialState = {

  posts: null

}

export default (state=initialState, action) => {
  const newState = Object.assign({}, state)
  switch(action.type){
    case constants.POSTS_RECEIVED:
      console.log('POSTS_RECEIVED: '+JSON.stringify(action.posts))
      return newState

  	default: 
  	  return state
  }
}