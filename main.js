import fs from "node:fs";
import path from 'node:path';
import {fileURLToPath} from 'node:url'

import {translateText} from "./src/config/translateText.js";
import {extractTextFromFile} from "./src/extractors/index.js";
import {fetchExternalSource} from "./src/extractors/fetchExternalSource.js";

import {writeDocx} from "./src/config/writeDocx.js";
import {writeMarkdown} from "./src/config/writeMarkdown.js";

import {generateSummaryInMarkdown} from "./src/config/generateSummaryInMarkdown.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const sourcePath = path.resolve(__dirname, './documento.docx')
const outputPath = path.resolve(__dirname, './temp');

const translator = async () => {
    if (!fs.existsSync('../temp')) {
        fs.mkdirSync('../temp');
    }

    if (!fs.existsSync(sourcePath)) {
        console.error(`Arquivo de origem não encontrado: ${sourcePath}`);
        process.exit(1); // ou return;
    }

    const doc_to_translate = await extractTextFromFile(sourcePath)
    const translated_doc = await translateText(doc_to_translate, 'pt-br')
    await writeDocx(translated_doc, outputPath)

};

const summarize = async () => {
    // const url = 'https://www.linkedin.com/pulse/how-ai-transforming-full-stack-development-saas-steve-rastall--ckvme/'

    const another_url = 'https://www.ibm.com/think/topics/ai-for-saas-analytics'

    const externalContent = await fetchExternalSource(another_url)

    const summarized_text = await generateSummaryInMarkdown(externalContent, 'pt-br')

    await writeMarkdown(summarized_text, outputPath)
}

await summarize()