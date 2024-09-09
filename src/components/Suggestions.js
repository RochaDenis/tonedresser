import React from 'react';
import styled from 'styled-components';

const Suggestions = ({ suggestions }) => {
  return (
    <SuggestionsContainer>
      <h2>Sugestões de Roupa</h2>
      <ul>
        {suggestions.map((suggestion, index) => (
          <SuggestionItem key={index}>{suggestion}</SuggestionItem>
        ))}
      </ul>
    </SuggestionsContainer>
  );
};

export default Suggestions;

const SuggestionsContainer = styled.div`
  margin-top: 20px;
`;

const SuggestionItem = styled.li`
  margin-bottom: 10px;
  font-size: 16px;
  list-style-type: disc;
  margin-left: 20px;
`;
