import superagent from 'superagent'
// NOT USE IN HERE: import Promise from 'bluebird'

export default {
  // return new Promise(resolve, reject){
  get: (endpoint, callback) => {

    superagent
    .get(endpoint)
    .query(null)  //.set(null)
    .set('Accept', 'application/json')  //.accept('data/javascript', 'application')
    // .end((data) => {
    //   resolve(data)
    // })
    // .catch((err) => {
    //   reject(err.message)
    // })
    .end((err, response) => {
      if (err) {
      	alert(err, null)
      	return
      }
      
      callback(null, response)

    })
  }
}