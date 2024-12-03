import { serverUrl } from "./constants";
const axios = require("axios");

const ApiService = async (endPoint, method = 'get', data = null) => {
    try {
        const response = await axios({
            method: method,
            url: serverUrl + endPoint, // Fixed the key from 'URL' to 'url'
            headers: {
                'Authorization': "Bearer " + 'JCBW975NFBEP2fL2fwt0b01ms1blC2R8',
                'Content-Type': 'application/json' // Add content type for JSON payloads
            },
            data: data // Include the data payload
        });
        return response.data;
    } catch (error) {
        return error.response ? error.response.data : error.message; // Provide detailed error feedback
    }
};

export default ApiService;
