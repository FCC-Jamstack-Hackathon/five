require('dotenv').config({ path: '.env.development' })
const statusCode = 200
const headers = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'Content-Type',
}
const faunadb = require('faunadb')
const q = faunadb.query

exports.handler = async function(event, context, callback) {
  let data = JSON.parse(event.body)
  data = JSON.parse(data.body)
  console.log(process.env.GATSBY_FAUNA_KEY, 'this is the console log')
  const client = new faunadb.Client({ secret: process.env.GATSBY_FAUNA_KEY })
  client
    .query(
      q.Get(q.Match(q.Index('posts_by_title'), data.data.name)).then(res => {
        console.log(res)
        let response = {
          statusCode,
          headers,
          body: JSON.stringify(res),
        }
        callback(null, response)
      })
    )
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
