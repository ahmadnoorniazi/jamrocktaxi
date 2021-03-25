const express = require('express');
const app = express();
const cors = require('cors');
app.use(cors({ origin: true }));

const functions = require('firebase-functions');

const stripe = require('stripe')('sk_test_51IXAV6L6Jaloc0FibjEPW9isQWiki6dxnrHoMqM3WK1RjlZsteDimFoZkZ4K8U9m4q29dX4MMFwvYqDXXPLCtF1e00FcUVSaGq');

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

app.post('/', async (req, res) => {
  response.set("Access-Control-Allow-Origin", "*");
  response.set("Access-Control-Allow-Headers", "Content-Type");
  console.log("Request.bodyuyyyyyyyyyyyyyyyy", req.body);
  console.log("Request.queryyyyyyyyy", req.query);
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

module.exports = functions.https.onRequest(app);

// app.post('/create-checkout-session', async (req, res) => {
//   const session = await stripe.checkout.sessions.create({
//     payment_method_types: ['card'],
//     line_items: [
//       {
//         price_data: {
//           currency: 'usd',
//           product_data: {
//             name: 'Stubborn Attachments',
//             images: ['https://i.imgur.com/EHyR2nP.png'],
//             description: 'Stffffffffffffff fgdfgdfgdfgdfgdfgdfgdfgdfgdfgdf'
//           },
//           unit_amount: 2000,
//         },
//         quantity: 1,
//       },
//     ],
//     mode: 'payment',
//     success_url: `${YOUR_DOMAIN}?success=true`,
//     cancel_url: `${YOUR_DOMAIN}?canceled=true`,
//   });

//   res.json({ id: session.id });
// });

// app.listen(4242, () => console.log('Running on port 4242'));