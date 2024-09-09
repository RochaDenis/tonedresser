import React from 'react';
import styled from 'styled-components';

const PaletteDisplay = ({ palette }) => {
  return (
    <PaletteContainer>
      <h2>Paleta de Cores</h2>
      <ColorBlocks>
        {palette.map((color, index) => (
          <ColorBlock key={index} style={{ backgroundColor: color.hex }}>
            <ColorHex>{color.hex}</ColorHex>
          </ColorBlock>
        ))}
      </ColorBlocks>
    </PaletteContainer>
  );
};

export default PaletteDisplay;

const PaletteContainer = styled.div`
  margin-top: 20px;
`;

const ColorBlocks = styled.div`
  display: flex;
  margin-top: 10px;
`;

const ColorBlock = styled.div`
  width: 100px;
  height: 100px;
  margin-right: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const ColorHex = styled.p`
  color: #fff;
  font-weight: bold;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);
`;
