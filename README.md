# ToneDresser - Color Palette and Outfit Generator

ToneDresser é uma aplicação front-end que gera paletas de cores e looks de moda realistas com base em preferências e emoções fornecidas pelo usuário. Utilizando a API da OpenAI, a aplicação cria sugestões personalizadas de looks, fornecendo tanto descrições detalhadas quanto imagens estilizadas de roupas.

## Índice

- [Visão Geral](#visão-geral)
- [Funcionalidades](#funcionalidades)
- [Pré-requisitos](#pré-requisitos)
- [Instalação](#instalação)
- [Como Usar](#como-usar)
- [Estrutura do Projeto](#estrutura-do-projeto)
- [Tecnologias Utilizadas](#tecnologias-utilizadas)
- [Contribuição](#contribuição)
- [Licença](#licença)

## Visão Geral

**ToneDresser** é uma ferramenta inovadora para usuários que querem combinações perfeitas de cores e roupas para eventos e ocasiões específicas. Através de um simples formulário, os usuários inserem preferências pessoais, e a ToneDresser utiliza inteligência artificial para gerar:

- Paletas de cores.
- Sugestões de looks de moda criativos.
- Imagens realistas dos looks sugeridos.

A aplicação usa a API do OpenAI para gerar conteúdo com base em texto e imagens, fornecendo uma interface agradável e intuitiva para qualquer pessoa que deseje looks exclusivos e bem combinados com base em suas necessidades.

## Funcionalidades

- **Gerar Paletas de Cores**: Baseado em emoções, cores favoritas e estilos preferidos.
- **Sugestão de Looks de Moda**: Descrições detalhadas de até três looks, incluindo sugestões formais e informais.
- **Geração de Imagens Realistas**: Utilizando o modelo de geração de imagens do OpenAI para criar looks visualmente estilizados com base nas descrições e paletas de cores.
- **Interface Responsiva**: Compatível com dispositivos móveis e desktop.

## Pré-requisitos

Antes de rodar o projeto, certifique-se de ter instalado:

- **Node.js** (v12 ou superior)
- **npm** (v6 ou superior)
- Chave da API OpenAI (você pode criar uma conta no [OpenAI Platform](https://platform.openai.com/) e gerar uma chave de API)

## Instalação

Siga os passos abaixo para configurar o projeto localmente:

1. Clone o repositório para sua máquina local:

    ```bash
    git clone https://github.com/seuusuario/tonedresser.git
    cd tonedresser
    ```

2. Instale as dependências do projeto:

    ```bash
    npm install
    ```

3. Crie um arquivo `.env` na raiz do projeto com a chave da API do OpenAI:

    ```bash
    REACT_APP_OPENAI_API_KEY=your_openai_api_key
    ```

4. Inicie o servidor de desenvolvimento:

    ```bash
    npm start
    ```

A aplicação estará disponível em `http://localhost:3000`.

## Como Usar

1. Abra a aplicação no seu navegador e preencha o formulário de preferências de cores, estilo e emoção.
2. Clique no botão "Gerar Paleta de Cores".
3. Após o processamento, a aplicação exibirá a paleta de cores sugerida, as descrições de looks e as imagens correspondentes.

### Fluxo do Aplicativo

- O usuário fornece suas preferências através do formulário.
- A aplicação faz uma requisição à API do OpenAI para gerar a paleta de cores e as descrições de looks.
- A partir das descrições geradas, o aplicativo faz outra requisição para a API de geração de imagens do OpenAI para gerar imagens realistas dos looks descritos.
- O resultado final, incluindo paletas e imagens, é exibido ao usuário.

## Estrutura do Projeto

├── public 
│
└── index.html 
  ├── src │ 
  ├── components │ 
  │ ├── PaletteForm.js │ 
  │ ├── PaletteDisplay.js │ 
  │ └── Suggestions.js │ 
  ├── GlobalStyles.js │ 
  ├── App.js │ 
  └── index.js 
  ├── .env 
  ├── package.json 
  └── README.md

  
- **public/**: Contém o arquivo HTML base para a aplicação React.
- **src/**: Contém o código-fonte da aplicação.
    - **components/**: Contém os componentes React, como o formulário de entrada, exibição de paletas e sugestões.
    - **GlobalStyles.js**: Estilos globais aplicados à aplicação.
    - **App.js**: Componente principal que controla a lógica da aplicação.
    - **index.js**: Arquivo de entrada que inicializa a aplicação React.
- **.env**: Arquivo de configuração com a chave da API.
- **package.json**: Contém as dependências e scripts de configuração do projeto.

## Tecnologias Utilizadas

- **React.js**: Biblioteca para construção da interface do usuário.
- **Styled Components**: Para estilização da aplicação de forma dinâmica e modular.
- **OpenAI API**: Usada para gerar tanto descrições de looks quanto as imagens realistas dos looks baseados em cores.
- **Axios**: Biblioteca para fazer requisições HTTP.

## Contribuição

Se você quiser contribuir para o projeto, siga os passos abaixo:

1. Faça um fork do projeto.
2. Crie uma branch para a sua feature (`git checkout -b feature/nova-feature`).
3. Commit suas alterações (`git commit -am 'Adiciona nova feature'`).
4. Envie para o branch principal (`git push origin feature/nova-feature`).
5. Abra um Pull Request.

## Licença

Este projeto está licenciado sob a licença MIT. Veja o arquivo [LICENSE](./LICENSE) para mais detalhes.
