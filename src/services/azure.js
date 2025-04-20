import dotenv from "dotenv";
dotenv.config();

export const AZURE_KEY = process.env.AZURE_TRANSLATOR_KEY;
export const AZURE_ENDPOINT = process.env.AZURE_TRANSLATOR_ENDPOINT
export const AZURE_REGION = process.env.AZURE_TRANSLATOR_REGION;
