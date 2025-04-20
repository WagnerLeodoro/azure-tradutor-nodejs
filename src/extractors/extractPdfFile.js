import fs from 'node:fs'
import pdfParse from 'pdf-parse'

export const extractPdfFile = async (filePath) => {
    try {
        const buffer = await fs.readFileSync(filePath);
        const data = await pdfParse(buffer);

        return data.text.replace(/\n/g, ' ').trim();
    } catch (err) {
        console.error('Erro ao extrair texto:', err);
        throw err;
    }
}

