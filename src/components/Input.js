import styled from 'styled-components';

export default styled.input.attrs({
  type: 'text'
})`
  padding: 10px;
  width: 100%;
  color: #AAA;
  font-size: 15px;
  border: 1px #DDD solid;
  background: white;
  ::-webkit-input-placeholder {
    color: #AAA;
  }

`;
