const functions = require('firebase-functions');
const express = require('express')
const cors = require('cors')
const stripe = require('stripe')('sk_test_51HQC7OIM7JppiMObBsF2thbQO2j2GPE4eTfwof8hnvoeYjfIQKrKUeRjuDbSXY3hSnNIsc3dVzbrrYLkpiiInTjA00Stvksv9u')

// API

// App config
const app = express()

// Middlewares
app.use(cors({ origin: true }))
app.use(express.json())

// API routes
app.get('/', (req, res) => res.status(200).send('hello world')) 

app.post('/payments/create', async (req, res) => {
  const total = req.query.total
  
  console.log('Payment Request Recieved BOOM!!! for this amount >>> ', total)
  
  const paymentIntent = await stripe.paymentIntents.create({
    amount: total,
    currency: 'usd',
  })

  // OK - Created
  res.status(201).send({
    clientSecret: paymentIntent.client_secret,
  })
})

// Listen command
exports.api = functions.https.onRequest(app)

// Example endpoint
// http://localhost:5001/clone-5c0fb/us-central1/api

