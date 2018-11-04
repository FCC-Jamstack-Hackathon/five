require('dotenv').config({ path: '.env.development' })
const statusCode = 200
const headers = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'Content-Type',
}
const faunadb = require('faunadb')
const q = faunadb.query

exports.handler = async function(event, context, callback) {
  const client = new faunadb.Client({ secret: process.env.GATSBY_FAUNA_KEY })
  client
    .query(Get(Class(Value('user'))))
    .get()
    .then(res => {
      console.log(res)
      let response = {
        statusCode,
        headers,
        body: JSON.stringify(res),
      }
      callback(null, response)
    })
    .catch(res => {
      console.log(res)
      let response = {
        statusCode,
        headers,
        body: 'failure',
      }
      callback(null, response)
    })
}
