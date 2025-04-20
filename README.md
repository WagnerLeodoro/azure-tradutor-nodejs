# Azure Tradutor Node.js

Este projeto é uma aplicação Node.js que permite a extração e tradução de documentos `.docx` e `.pdf`
utilizando a API do Microsoft Azure Translator. Ele preserva a estrutura dos documentos e salva as traduções em novos arquivos.

## ✨ Funcionalidades

- Suporte à extração de texto de arquivos `.docx` e `.pdf`.
- Tradução de textos utilizando a API do Azure Translator.
- Geração de arquivos traduzidos mantendo a formatação original.
- Criação de arquivos Markdown com o conteúdo traduzido.
- Evita sobrescrita de arquivos existentes, criando versões numeradas automaticamente.

## 🛠️ Tecnologias e Bibliotecas Utilizadas

- [Node.js](https://nodejs.org/)
- [Axios](https://www.npmjs.com/package/axios) – para requisições HTTP
- [dotenv](https://www.npmjs.com/package/dotenv) – para gerenciamento de variáveis de ambiente
- [uuid](https://www.npmjs.com/package/uuid) – para geração de identificadores únicos
- [docx](https://www.npmjs.com/package/docx) – para manipulação de arquivos `.docx`
- [mammoth](https://www.npmjs.com/package/mammoth) – para extração de texto de arquivos `.docx`
- [pdf-parse](https://www.npmjs.com/package/pdf-parse) – para extração de texto de arquivos `.pdf`

## 📁 Estrutura do Projeto
```bash
📁 azure-tradutor-nodejs/
├── 📁 src/                         # Código-fonte principal da aplicação
│   ├── 📁 config/                  # Configurações e utilitários de escrita
│   │   ├── generateSummaryInMarkdown.js   # Gera resumo em arquivo Markdown
│   │   ├── translateText.js               # Lida com o processo de tradução
│   │   ├── writeDocx.js                   # Cria arquivos .docx com o conteúdo traduzido
│   │   └── writeMarkdown.js               # Cria arquivos .md com o conteúdo traduzido
│   ├── 📁 extractors/             # Responsável por extrair conteúdo de diversas fontes
│   │   ├── extractDocxFile.js            # Extrai texto bruto de arquivos .docx
│   │   ├── extractPdfFile.js             # Extrai texto bruto de arquivos .pdf
│   │   ├── fetchExternalSource.js        # Coleta conteúdo de URLs externas
│   │   └── index.js                      # Interface unificada para extração
│   └── 📁 services/              # Camada de serviços externos
│       └── azure.js                     # Comunicação com a API Azure Translator
├── 📁 temp/                      # Arquivos gerados durante a execução (traduções)
│   └── traducao.docx            # Exemplo de arquivo traduzido
├── .env                         # Arquivo com variáveis de ambiente (não comitado)
├── .env.example                 # Modelo do arquivo de configuração de ambiente
├── .gitignore                   # Arquivos/paths ignorados pelo Git
├── documento.docx              # Exemplo de entrada (.docx)
├── documento.pdf               # Exemplo de entrada (.pdf)
├── main.js                     # Ponto de entrada da aplicação
├── package.json                # Dependências e scripts do projeto
└── package-lock.json           # Controle de versão exato das dependências
```

## ⚙️ Configuração

1 Clone o repositóri:
   ```bash
   git clone https://github.com/WagnerLeodoro/azure-tradutor-nodejs.git
   cd azure-tradutor-nodejs
   ```

2 Instale as dependência:
   ```bash
   npm install
   ```

3 Configure as variáveis de ambient:
   - Renomeie o arquivo `.env.example` para `.env`.
   - Preencha as variáveis com suas credenciais do Azure Translator:
     ```env
     AZURE_TRANSLATOR_KEY=your_azure_translator_key
     AZURE_TRANSLATOR_ENDPOINT=your_azure_translator_endpoint
     AZURE_TRANSLATOR_REGION=your_azure_translator_region
     ```

## 🚀 Uso

. Coloque o arquivo que deseja traduzir (`.docx` ou `.pdf`) na raiz do projeo.
. Execute o script principl:

   ```bash
   node main.js
   ```

. O arquivo traduzido será salvo na pasta `temp/` com um nome baseado no original.
Se um arquivo com o mesmo nome já existir, será criado um novo com um número incremental para evitar sobrescria.

## 📄 Licensa

Este projeto está licenciado sob a licença MIT.

---

Feito com ☕ por **Wagner Leodoro.

---
