import fs from "node:fs";
import path from "node:path";

export const writeMarkdown = async (text, outputFilePath) => {
    if (!fs.existsSync(outputFilePath)) {
        fs.mkdirSync(outputFilePath, { recursive: true });
    }
    let output = path.join(outputFilePath, 'article.md')
    let counter = 1;

    while (fs.existsSync(output)) {
        output = path.join(outputFilePath, `article_${counter}.md`);
        counter++;
    }

    fs.writeFileSync(output, text, 'utf8');
    console.log(`Arquivo markdown salvo em: ${output}`);
}