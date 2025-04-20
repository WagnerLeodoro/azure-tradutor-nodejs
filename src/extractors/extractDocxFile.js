import fs from "node:fs";
import mammoth from "mammoth";


export const extractDocxFile = async (file) => {
    try {
        const buffer = await fs.readFileSync(file,)
        const result = await mammoth.extractRawText({buffer});
        const body = result.value
        const lines = body.split('\n').map(line => line.trim())
        const parts = lines.flatMap(line => line.split(' ').map(p => p.trim()))
        return parts.filter(phrase => phrase).join(' ')
    } catch (err) {
        console.error('Erro ao extrair texto:', err);
        throw err;
    }
}