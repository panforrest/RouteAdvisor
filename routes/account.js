var express = require('express')
var router = express.Router()
var controller = require('../controllers')

router.get('/:resource', function(req, res, next){
  var resource = req.params.resource
  // var 

  res.json({
    message: resource,
    confirmation: 'success'
  })

})

module.exports = router