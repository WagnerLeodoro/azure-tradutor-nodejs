import axios from "axios";
import * as cheerio from "cheerio";

export async function fetchExternalSource(url) {
    try {
        const response = await axios.get(url);
        if (response.status === 200) {
            const $ = cheerio.load(response.data);
            let text_body = $('body').text()

            const lines = text_body.split('\n').map(line => line.trim())
            const parts = lines.flatMap(line => line.split(' ').map(p => p.trim()))
            return parts.filter(phrase => phrase).join(' ')
        } else {
            console.error(`Erro ao acessar a URL. Status: ${response.status}`);
            return null;
        }
    } catch (e) {
        console.error('Erro durante a requisição:', e.message);
        return null;
    }
}
