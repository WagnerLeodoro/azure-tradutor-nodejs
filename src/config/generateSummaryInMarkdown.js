import dotenv from "dotenv";
dotenv.config();

import { AzureOpenAI } from "openai";

const apiKey = process.env.AZURE_OPENAI_API_KEY;
const apiVersion = process.env.AZURE_OPENAI_API_VERSION;
const endpoint = process.env.AZURE_OPENAI_ENDPOINT
const modelName = process.env.AZURE_OPENAI_MODEL_NAME
const deployment = process.env.AZURE_OPENAI_DEPLOYMENT;


export async function generateSummaryInMarkdown(text, lang) {
    const options = { endpoint, apiKey, deployment, apiVersion }

    const client = new AzureOpenAI(options);

    const response = await client.chat.completions.create({
        messages: [
            {role: "system", content: "Você atua como um tradutor profissional."},
            {role: "user", content: `Você receberá um conteúdo de uma página da web. Resuma o conteúdo no       idioma ${lang} em formato ** Markdown ** com estrutura clara e títulos. Texto ${text}`}
        ],
        temperature: 0.7,
        model: modelName
    });

    if (response?.error !== undefined && response.status !== "200") {
        throw response.error;
    }
    return response.choices[0].message.content;
}