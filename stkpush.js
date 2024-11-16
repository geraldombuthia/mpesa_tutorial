require("dotenv").config();

const axios = require("axios");
const generateToken = require("./authgen");

async function sendStkPush() {
    const token = await generateToken();

    const date = new Date();

    console.log(date);
    const timeStamp = date.getFullYear() +
    ("0" + (date.getMonth() + 1)).slice(-2) +
    ("0" + date.getDate()).slice(-2) +
    ("0" + date.getHours()).slice(-2) + 
    ("0" + date.getMinutes()).slice(-2) +
    ("0" + date.getSeconds()).slice(-2);


    const shortCode = process.env.SHORTCODE;
    const passkey = process.env.PASS_KEY;

    const stk_password = new Buffer.from(
        shortCode + passkey + timeStamp
    ).toString("base64");

    const headers = {
        "Authorization": "Bearer " + token,
        "Content-Type": "application/json" 
    };

    const requestBody = {
        BusinessShortCode: shortCode,
        Password: stk_password,
        Timestamp: timeStamp,
        TransactionType: "CustomerPayBillOnline", // till "CustomerBuyGoodsOnline"
        Amount:"1",
        PartyA:"254728127853",
        PartyB: shortCode,
        PhoneNumber: "254728127853",
        CallBackURL: "https://8a6e-102-0-7-126.ngrok-free.app/callback",
        AccountReference: "Gerald",
        TransactionDesc: "test"
    };

    try {

        const response = await axios.post(process.env.STK_PUSH_URL, requestBody, { headers });

        console.log(response);

        return response.data;
    } catch (error) {
        console.error(error);
    }
}

sendStkPush();