import React from 'react';
import styled from 'styled-components';

const Block = styled.div`
  background-color: green;
`;
const Index = () => {
  return <Block>{123}</Block>;
};

export default Index;
