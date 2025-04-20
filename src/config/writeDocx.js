import fs from "node:fs";
import {Document, Packer, Paragraph, TextRun} from "docx";
import path from "node:path";


export const writeDocx = async (translations, outputFilePath) => {
    const paragraph = translations.map(translated => {
        return new Paragraph({
            children: [
                new TextRun({
                    text: `Idioma (${translated.to})\n`,
                    bold: true
                }),
                new TextRun('\n' + translated.text + '\n')
            ]
        })
    })

    const doc = new Document({
        sections: [{ children: paragraph }]
    })

    const buffer = await Packer.toBuffer(doc)

    let output = path.join(outputFilePath, 'traducao.docx')
    let counter = 1;

    while (fs.existsSync(output)) {
        output = path.join(outputFilePath, `traducao_${counter}.docx`);
        counter++;
    }

    fs.writeFileSync(output, buffer);
}