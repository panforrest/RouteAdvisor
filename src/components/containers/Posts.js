import React, { Component } from 'react'
import { APIManager } from '../../utils'
import { connect } from 'react-redux'
import actions from '../../actions'

class Posts extends Component {

  componentDidMount(){
  	// console.log('componentDidMount: ')
  	APIManager.get('/api/post', (err, results) => {
  	  if (err) {
  	  	alert(err.message)
  	  	return
  	  }
      console.log('componentDidMount: '+JSON.stringify(results.body))
      // var posts = posts.boby
      this.props.postsReceived(results.body)

  	})

  }


// var reviewList = this.props.reviews.map((review, i) => {
//             // var timestamp = review.timestamp

//             return (
//                 <a key={i} href="#" className="list-group-item">
//                         <h4 className="list-group-item-heading">User {review.profile} 发表评论 {DateUtils.formattedDate(review.timestamp)}: </h4>
//                         <p className="list-group-item-text">{review.text}</p>
//                 </a> 
//             )
//         })


  render(){
  	// var postsList = []
  	// if (this.props.posts != null){
	    var postsList = this.props.posts.map((post, i) => {
	      return (
	        <li key={i}>{post.caption}</li>
	      )
	    })
	// }    

  	return(
  	  <div>
  	    {postsList} 
  	  </div>
    )
  }
}

const stateToProps = (state) => {
    return {
        posts: state.post.list
    }
}

const dispatchToProps = (dispatch) => {
    return {
        postsReceived: (posts) => dispatch(actions.postsReceived(posts))
    }
}

export default connect(stateToProps, dispatchToProps)(Posts)