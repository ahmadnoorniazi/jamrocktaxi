const express = require('express');
const app = express();
const mailer = require('./email');
const admin = require('firebase-admin');
const cors = require('cors');
app.use(cors({ origin: true }));

const functions = require('firebase-functions');

const stripe = require('stripe')('sk_test_4eC39HqLyjWDarjtT1zdp7dc');

const YOUR_DOMAIN = 'https://jamrocktaxi-b40ae.web.app/checkout';

app.post('/ahmad', async (req, res) => {
  try {

    const { image, fullTotal, name,pickup, dropOf} = req.body
    const session = await stripe.checkout.sessions.create({
        payment_method_types: ['card'],
        line_items: [
          {
            price_data: {
              currency: 'usd',
              product_data: {
                name,
                images: [image],
                description: `${pickup}  To  ${dropOf}`
              },
              unit_amount: fullTotal.toFixed() * 100,
            },
            quantity: 1,
          },
        ],
        mode: 'payment',
        success_url: `${YOUR_DOMAIN}?success=true`,
        cancel_url: `${YOUR_DOMAIN}?canceled=true`,
      });
      res.status(200).send({ id: session.id });


} catch (e) {
    res.status(400).send({ error:e });

}
});

app.post('/sendEmail',mailer);

app.post('/createProfile', async (req, res) => {
  try {
    console.log('comessss here  first', req.body)
    let user = admin.database().ref('/users').push(
      req.body
    )
    console.log("userrrr", user)
    res.status(200).send(user);

  } catch (e) {
    res.status(400).send({ error:e });

  }

});


module.exports = functions.https.onRequest(app);
