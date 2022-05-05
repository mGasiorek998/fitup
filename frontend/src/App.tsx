import { useState } from 'react';
import styled from 'styled-components';

function App() {
  const [greetings] = useState('Hello World!!');

  const Wrapper = styled.div`
    height: 100vh;
    width: 100vw;
    display: flex;
    align-items: center;
    justify-content: center;
  `;

  return (
    <Wrapper>
      <h1>{greetings}</h1>
    </Wrapper>
  );
}

export default App;
