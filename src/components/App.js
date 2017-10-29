import React, { Component } from 'react';
import styled from 'styled-components';

import FormContainer from 'containers/FormContainer';

const StyledApp = styled.div`
  margin: 0 auto;
  max-width: 500px;
`

class App extends Component {
  render() {
    return (
      <StyledApp>
        <FormContainer />
      </StyledApp>
    );
  }
}

export default App;
