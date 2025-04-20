import axios from "axios";
import {v4 as uuidv4} from "uuid";
import {AZURE_ENDPOINT, AZURE_KEY, AZURE_REGION} from "../services/azure.js";

export const translateText = async (text, language_destination) => {
    return await axios({
        baseURL: AZURE_ENDPOINT,
        url: '/translate',
        method: 'post',
        headers: {
            'Ocp-Apim-Subscription-Key': AZURE_KEY,
            'Ocp-Apim-Subscription-Region': AZURE_REGION,
            'Content-type': 'application/json',
            'X-ClientTraceId': uuidv4().toString()
        },
        params: {
            'api-version': '3.0',
            'from': 'en',
            'to': language_destination
        },
        data: [{text: text}],
        responseType: 'json'
    }).then(function(response){
        return response.data[0].translations
    })
}