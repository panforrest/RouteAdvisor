var mongoose = require('mongoose')

var ProfileSchema = new mongoose.Schema({  //NOT New
	// email:{type:String, default:''},
	username:{type:String, default:''}, 
	password:{type:String, default:''},
	timestamp: {type:Date, default:Date.now}
})

// ProfileSchema.methods.summary = function(){
// 	id: this.id,
// 	email: this.email,
// 	password: this.password,
// 	timestamp: this.timestamp
// }

// module.export = mongoose.model('ProfileSchema':ProfileSchema)
module.exports = mongoose.model('ProfileSchema', ProfileSchema)  //, SHOULD NOT BE :