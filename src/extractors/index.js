import path from 'node:path'
import {extractDocxFile} from "./extractDocxFile.js";
import {extractPdfFile} from "./extractPdfFile.js";

export const extractTextFromFile = async (filePath) => {
    const ext = path.extname(filePath).toLowerCase();

    switch (ext) {
        case '.docx':
            return await extractDocxFile(filePath);
        case '.pdf':
            return await extractPdfFile(filePath);
        default:
            throw new Error(`Tipo de arquivo não suportado: ${ext}`);
    }
}
