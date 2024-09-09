// src/components/PaletteForm.js

import React, { useState } from 'react';
import styled from 'styled-components';
import { FaQuestionCircle } from 'react-icons/fa';

const PaletteForm = ({ onGenerate }) => {
  const [emotion, setEmotion] = useState('');
  const [favoriteColor, setFavoriteColor] = useState('');
  const [avoidColor, setAvoidColor] = useState('');
  const [occasion, setOccasion] = useState('');
  const [stylePreference, setStylePreference] = useState('');
  const [showExplanation, setShowExplanation] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onGenerate({ emotion, favoriteColor, avoidColor, occasion, stylePreference });
  };

  const explanations = {
    emotion: "Pense na emoção ou sensação que você quer transmitir através das cores, como 'calma', 'energia', 'elegância'.",
    favoriteColor: "Insira sua cor favorita. Exemplo: 'azul', 'vermelho'.",
    avoidColor: "Indique qualquer cor que você prefere evitar. Exemplo: 'amarelo', 'marrom'.",
    occasion: "Escolha entre 'formal' e 'informal' para definir o contexto da paleta.",
    stylePreference: "Descreva seu estilo preferido, como 'moderno', 'vintage', 'minimalista'.",
  };

  return (
    <FormWrapper onSubmit={handleSubmit}>
      <FormGroup>
        <Label>
          Qual emoção ou sensação você quer transmitir?
          <HelpIcon onClick={() => setShowExplanation('emotion')} />
        </Label>
        <Input
          type="text"
          value={emotion}
          onChange={(e) => setEmotion(e.target.value)}
          required
        />
      </FormGroup>
      <FormGroup>
        <Label>
          Qual sua cor favorita?
          <HelpIcon onClick={() => setShowExplanation('favoriteColor')} />
        </Label>
        <Input
          type="text"
          value={favoriteColor}
          onChange={(e) => setFavoriteColor(e.target.value)}
        />
      </FormGroup>
      <FormGroup>
        <Label>
          Tem alguma cor que você gostaria de evitar?
          <HelpIcon onClick={() => setShowExplanation('avoidColor')} />
        </Label>
        <Input
          type="text"
          value={avoidColor}
          onChange={(e) => setAvoidColor(e.target.value)}
        />
      </FormGroup>
      <FormGroup>
        <Label>
          Ocasião:
          <HelpIcon onClick={() => setShowExplanation('occasion')} />
        </Label>
        <Select value={occasion} onChange={(e) => setOccasion(e.target.value)}>
          <option value=""></option>
          <option value="formal">Formal</option>
          <option value="informal">Informal</option>
        </Select>
      </FormGroup>
      <FormGroup>
        <Label>
          Preferência de Estilo:
          <HelpIcon onClick={() => setShowExplanation('stylePreference')} />
        </Label>
        <Input
          type="text"
          value={stylePreference}
          onChange={(e) => setStylePreference(e.target.value)}
        />
      </FormGroup>
      <SubmitButton type="submit">Gerar Paleta</SubmitButton>

      {showExplanation && (
        <ExplanationModal>
          <div>
            <h3>Explicação</h3>
            <p>{explanations[showExplanation]}</p>
            <CloseButton onClick={() => setShowExplanation('')}>Fechar</CloseButton>
          </div>
        </ExplanationModal>
      )}
    </FormWrapper>
  );
};

export default PaletteForm;

const FormWrapper = styled.form`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(3)};
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
`;

const Label = styled.label`
  display: flex;
  align-items: center;
  margin-bottom: ${({ theme }) => theme.spacing(1)};
  font-weight: bold;
  color: ${({ theme }) => theme.colors.text};
`;

const HelpIcon = styled(FaQuestionCircle)`
  margin-left: ${({ theme }) => theme.spacing(1)};
  cursor: pointer;
  color: ${({ theme }) => theme.colors.primary};
`;

const Input = styled.input`
  padding: ${({ theme }) => theme.spacing(1)};
  border: 1px solid ${({ theme }) => theme.colors.gray};
  border-radius: ${({ theme }) => theme.borderRadius};
  font-size: 1rem;
  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.primary};
    box-shadow: 0 0 5px ${({ theme }) => theme.colors.primary};
  }
`;

const Select = styled.select`
  padding: ${({ theme }) => theme.spacing(1)};
  border: 1px solid ${({ theme }) => theme.colors.gray};
  border-radius: ${({ theme }) => theme.borderRadius};
  font-size: 1rem;
  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.primary};
    box-shadow: 0 0 5px ${({ theme }) => theme.colors.primary};
  }
`;

const SubmitButton = styled.button`
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.white};
  padding: ${({ theme }) => theme.spacing(2)};
  border: none;
  border-radius: ${({ theme }) => theme.borderRadius};
  font-size: 1.1rem;
  font-weight: bold;
  transition: background-color 0.3s;
  &:hover {
    background-color: ${({ theme }) => theme.colors.secondary};
  }
`;

const ExplanationModal = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: ${({ theme }) => theme.colors.white};
  padding: ${({ theme }) => theme.spacing(4)};
  border-radius: ${({ theme }) => theme.borderRadius};
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
  z-index: 1000;
  width: 300px;

  h3 {
    margin-bottom: ${({ theme }) => theme.spacing(2)};
    font-size: 1.5rem;
    color: ${({ theme }) => theme.colors.primary};
  }

  p {
    font-size: 1rem;
    color: ${({ theme }) => theme.colors.text};
    margin-bottom: ${({ theme }) => theme.spacing(2)};
  }
`;

const CloseButton = styled.button`
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.white};
  padding: ${({ theme }) => theme.spacing(1)};
  border: none;
  border-radius: ${({ theme }) => theme.borderRadius};
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.3s;
  &:hover {
    background-color: ${({ theme }) => theme.colors.secondary};
  }
`;
