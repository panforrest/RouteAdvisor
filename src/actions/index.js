import constants from '../constants'

export default {  //export default = (posts) => {
  // return {
  // 	postsReceived: {
  postsReceived: (posts) => {
    return { 
	  type: constants.POSTS_RECEIVED,
	  posts: posts
	}
  }
}