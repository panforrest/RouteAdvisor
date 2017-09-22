// import constants from '../constants'

// var initialState = {

//   posts: []

// }

// export default (state=initialState, action) => {
//   var newState = Object.assign({}, state)
//   switch(action.type){
//     case constants.POSTS_RECEIVED:
//       console.log('POSTS_RECEIVED: '+JSON.stringify(action.posts))
//       newState['posts'] = action.posts
      
//       return newState

//   	default: 
//   	  return state
//   }
// }



import constants from '../constants'

var initialState = {

    list: []

}

export default (state=initialState, action) => {
	let updated = Object.assign({}, state)
	switch (action.type) {
		case constants.POSTS_RECEIVED:
		    console.log('postReducer:'+JSON.stringify(action.posts))
		    updated['list'] = action.posts.results
		    return updated

		default:
		    return state    
	}
}