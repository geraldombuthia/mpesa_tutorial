require("dotenv").config();

const axios = require("axios");

const getAccessToken = async () => {
    const consumerKey = process.env.CONSUMER_KEY;
    const consumerSecret = process.env.CONSUMER_SECRET;

    const url = process.env.URL;


    try {

        const encodedCredentials = new Buffer.from(consumerKey + ":" + consumerSecret).toString('base64');

        const headers = {
            'Authorization': "Basic" + " " + encodedCredentials,
            'Content-Type': 'application/json'
        };

        const response = await axios.get(url, {headers});
        return response.data.access_token;
    } catch (error) {
        throw new Error('Failed to get access token.');
    }

} 

module.exports = getAccessToken;