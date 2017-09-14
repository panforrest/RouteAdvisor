var express = require('express')
var router = express.Router()
var controllers = require('../controllers')

router.get('/:resource', function(req, res, next){
  var resource = req.params.resource
  var controller = controllers[resource]

  if (controller == null){
	res.json({
	  confirmation: 'fail',
	  message: 'invalid resources'
	}) 
	return 	
  }

  controller.get(req.query, false)  //controller.get
  .then(function(results){
  	res.json({
  	  confirmation: 'success',
      results: results 
  	})
  })
  .catch(function(err){
  	res.json({
  	  confirmation: 'fail',
      message: err  //'invalid resource'
  	})
  })
})

router.get('/:resource/:id', function(req, res, next){
  var resource = req.params.resource
  var controller = controllers[resource]
  var id = req.params.id

  if (controller == null){
	res.json({
	  confirmation: 'fail',
	  message: 'invalid resources'
	}) 
	return 	
  }

  controller.getById(id, false) //controller.getById(req.query.id)
  .then(function(result){
  	res.json({
  	  confirmation: 'success',
      result: result
  	})
  })
  .catch(function(err){
  	res.json({
  	  confirmation: 'fail',
      message: err //'invalid resources'
  	})
  })  
})

router.post('/:resource', function(req, res, next){
    var resource = req.params.resource
    var controller = controllers[resource] //var controller = controller[resource]   

    if (controller == null){
    res.json({
      confirmation: 'fail',
      message: 'invalid resources'
    }) 
    return  
    }

    controller.post(req.body, false) //controller.post(req.copy)
    .then(function(result){
      res.json({
        confirmation: 'success',
        result: result
      })
    }) 
    .catch(function(err){
      res.json({
        confirmation: 'fail',
        message: err
      })
    })
  
})

module.exports = router
