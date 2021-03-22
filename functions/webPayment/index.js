const functions = require('firebase-functions');

const stripe = require('stripe')('sk_test_51IXAV6L6Jaloc0FibjEPW9isQWiki6dxnrHoMqM3WK1RjlZsteDimFoZkZ4K8U9m4q29dX4MMFwvYqDXXPLCtF1e00FcUVSaGq');

const YOUR_DOMAIN = 'https://jamrocktaxi.netlify.app/order-complete';

module.exports = functions.https.onRequest(async (req, res) => {
    const session = await stripe.checkout.sessions.create({
        payment_method_types: ['card'],
        line_items: [
          {
            price_data: {
              currency: 'usd',
              product_data: {
                name: 'Stubborn Attachments',
                images: ['https://i.imgur.com/EHyR2nP.png'],
                description: 'Stffffffffffffff fgdfgdfgdfgdfgdfgdfgdfgdfgdfgdf'
              },
              unit_amount: 20,
            },
            quantity: 1,
          },
        ],
        mode: 'payment',
        success_url: `${YOUR_DOMAIN}?success=true`,
        cancel_url: `${YOUR_DOMAIN}?canceled=true`,
      });
    
      res.json({ id: session.id });
  });

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