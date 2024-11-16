const express = require("express");

const app = express();

app.use(express.json());

app.post('/callback', (req, res) => {
    const callbackData = req.body;

    console.log(callbackData);

    console.log(callbackData.Body.stkCallback.CallbackMetadata)

    return res.json("success");
});

app.listen(3000, () => {
    console.log("Listening on Port 3000");
})

// Successful payment

// {
//     Body: {
//       stkCallback: {
//         MerchantRequestID: '4f9d-4622-a0da-1c77977dad0c145940002',
//         CheckoutRequestID: 'ws_CO_16112024162031554728127853',
//         ResultCode: 0,
//         ResultDesc: 'The service request is processed successfully.',
//         CallbackMetadata: [Object]
//       }
//     }
//   }

// {
//     Item: [
//       { Name: 'Amount', Value: 1 },
//       { Name: 'MpesaReceiptNumber', Value: 'SKG71AIXXX' },
//       { Name: 'Balance' },
//       { Name: 'TransactionDate', Value: 20241116162042 },
//       { Name: 'PhoneNumber', Value: 25472812XXXx }
//     ]
//   }