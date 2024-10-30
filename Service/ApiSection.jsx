import axios from "axios";
import { Base_URL,Base_URL_Api_Key } from "../Constant/keys";

const headers={
    "x-rapidapi-host": "real-time-amazon-data.p.rapidapi.com",
    "x-rapidapi-key": Base_URL_Api_Key
}

export const deals = async()=>{
    try {
        const response = await axios.get(`${Base_URL}/deals-v2`,{headers})
        return response.data.data.deals
    } catch (error) {
        console.log('Error fetching deals:', error);
        throw error;
    }
}

