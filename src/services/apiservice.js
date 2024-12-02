const axios = require("axios")

const ApiService = async (endPoint) => {
    try {
        const response = await axios.get(`http://194.238.19.35:8060/${endPoint}`,{
            headers:{
                'Authorization': "Bearer " + 'JCBW975NFBEP2fL2fwt0b01ms1blC2R8'
            }
        });
        debugger;
        return response.data;
    } catch (error) {
        return error
    }
}
export default ApiService;