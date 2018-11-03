require('dotenv').config({ path: '.env.development' })
const axios = require('axios')
const statusCode = 200
const headers = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'Content-Type',
}
const faunadb = require('faunadb')

exports.handler = async function(event, context, callback) {
  const client = new faunadb.Client({ secret: process.env.faunaKey })
}
