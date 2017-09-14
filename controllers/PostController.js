var Post = require('../models/Post')
var Promise = require('bluebird')

module.exports = {
  get: function(params, isRaw){
  	return new Promise(function(resolve, reject){
  	  Post.find(params, function(err, posts){
  	  	if (err){
  	  	  reject(err)
  	  	  return
  	  	}
  	  	resolve(posts)
  	  })
  	})
  },

  // getById:

  post: function(params, isRaw){
  	return new Promise(function(resolve, reject){
  	  Post.create(params, function(err, post){
  	  	if (err){
  	  	  reject(err)
  	  	  return
  	  	}
  	  	resolve(post)
  	  })
  	})
  }
}