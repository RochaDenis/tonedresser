import React, { useState } from 'react';
import OpenAI from 'openai';
import PaletteForm from './components/PaletteForm';
import PaletteDisplay from './components/PaletteDisplay';
import { GlobalStyles } from './GlobalStyles';
import styled from 'styled-components';

// Inicializando o cliente OpenAI
const openai = new OpenAI({
  apiKey: process.env.REACT_APP_OPENAI_API_KEY, dangerouslyAllowBrowser:true // Use a variável de ambiente com a chave
});

function App() {
  const [palette, setPalette] = useState([]);
  const [imageUrls, setImageUrls] = useState([]); // Para armazenar as URLs das imagens geradas

  // Função para chamar a API GPT e gerar paletas e looks
  const generatePaletteAndSuggestions = async (data) => {
    try {
      // Chamando a API OpenAI para gerar a paleta e descrição de looks
      const completion = await openai.chat.completions.create({
        model: 'gpt-3.5-turbo',
        messages: [
          {
            role: 'system',
            content: 'Você é um assistente que cria paletas de cores e gera looks com base nas emoções e preferências fornecidas.',
          },
          {
            role: 'user',
            content: `
            Com base nas informações fornecidas, por favor:

            1. Forneça **uma lista de três cores** em formato hexadecimal (ex: #FFFFFF), separadas por vírgulas.
            2. Descreva três looks abstratos e criativos sem detalhes específicos de roupas.

            **Informações:**
            - Emoção ou sensação desejada: ${data.emotion}
            - Cor favorita: ${data.favoriteColor}
            - Cor a evitar: ${data.avoidColor}
            - Ocasião: ${data.occasion}
            - Preferência de estilo: ${data.stylePreference}
            `,
          },
        ],
      });

      const result = completion.choices[0].message.content.trim();
      console.log('Resposta da API:', result);

      // Usar regex para capturar as cores
      const colorsMatch = result.match(/#(?:[0-9a-fA-F]{3}){1,2}/g);

      // Captura as frases completas para os looks, separadas por pontos finais
      const lookDescriptions = result.split(/\.\s+/).filter((sentence) => sentence.includes('look') || sentence.includes('Look'));

      // Verificação de que os dados foram corretamente extraídos
      if (colorsMatch && lookDescriptions.length > 0) {
        const paletteColors = colorsMatch.map((color) => ({ hex: color.trim() }));
        setPalette(paletteColors);

        // Geração de imagens com base nas descrições dos looks
        const imagePromises = lookDescriptions.map(async (description) => {
          const imageResponse = await openai.images.generate({
            prompt: `Um look de moda abstrato e criativo: ${description}`,
            n: 1,
            size: '1024x1024',
          });
          return imageResponse.data[0].url;
        });

        const generatedImages = await Promise.all(imagePromises);
        setImageUrls(generatedImages);
      } else {
        console.error('A resposta da API não está no formato esperado.');
      }
    } catch (error) {
      console.error('Erro ao chamar a API:', error);
    }
  };

  return (
    <>
      <GlobalStyles />
      <Header>
        <Container>
          <Logo src="/logo.png" alt="ToneDresser Logo" />
          <h1>ToneDresser</h1>
        </Container>
      </Header>
      <Main>
        <CenteredContent>
          <PaletteForm onGenerate={generatePaletteAndSuggestions} />
        </CenteredContent>
        <DisplaySection>
          <PaletteDisplay palette={palette} />
          <ImagesDisplay>
            {imageUrls.map((url, index) => (
              <StyledImage key={index} src={url} alt={`Look ${index + 1}`} />
            ))}
          </ImagesDisplay>
        </DisplaySection>
      </Main>
      <Footer>
        <Container>
          <p>© 2024 ToneDresser. Todos os direitos reservados.</p>
        </Container>
      </Footer>
    </>
  );
}

export default App;

const Header = styled.header`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.primary};
  padding: ${({ theme }) => theme.spacing(2)} 0;
  color: ${({ theme }) => theme.colors.white};
  text-align: center;

  h1 {
    margin: -12px;
    font-size: 2rem;
  }
`;

const Logo = styled.img`
  width: 80px;
  height: 80px;
  margin-right: ${({ theme }) => theme.spacing(2)};
`;

const Main = styled.main`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: ${({ theme }) => theme.spacing(4)} 0;
`;

const CenteredContent = styled.div`
  background-color: ${({ theme }) => theme.colors.white};
  padding: ${({ theme }) => theme.spacing(4)};
  border-radius: ${({ theme }) => theme.borderRadius};
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  max-width: 500px;
  width: 100%;
  margin-bottom: ${({ theme }) => theme.spacing(4)};
`;

const DisplaySection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 800px;
`;

const ImagesDisplay = styled.div`
  display: flex;
  justify-content: center;
  gap: ${({ theme }) => theme.spacing(2)};
  margin-top: ${({ theme }) => theme.spacing(4)};
`;

const StyledImage = styled.img`
  width: 200px;
  height: 200px;
  object-fit: cover;
  border-radius: ${({ theme }) => theme.borderRadius};
`;

const Footer = styled.footer`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.primary};
  padding: ${({ theme }) => theme.spacing(2)} 0;
  color: ${({ theme }) => theme.colors.white};
  text-align: center;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 ${({ theme }) => theme.spacing(2)};
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
