import React from 'react';
import { Flex, Box } from 'grid-styled';
import styled, { injectGlobal } from 'styled-components';

import Input from 'components/Input';

injectGlobal`
	body {
		background: #fff;
	}

	button {
		padding: 15px;
		flex-grow: 1;
		color: #fff;
		font-size: 16px;
		font-weight: 600;
		letter-spacing: .1em;
		font-family: avenir next, helvetica, relaway;
		background: #B5DBFE;
		border: 1px solid #B5DBFE;
		cursor: pointer;
	}

	button:hover {
		background: #a2c5e4;
		border: 1px solid #a2c5e4;
	}

	button:disabled {
		background: #ddd;
		cursor: unset;
		border: 1px solid #ddd;
	}
`;

const Title = styled.h1`
	font-size: 2em;
	text-align: center;
	color: #B5DBFE;
  letter-spacing: .2em;
  font-family: avenir next, helvetica, relaway;
`;

const MyBox = Box.extend`
  display: flex;
`;

const ButtonBox = Box.extend`
	display: flex;
	flex-grow: 1;
`;

export default ({
  onSubmit,
  isFormLoading,
  onFromChange,
  onToChange,
  onFromDateChange,
  onToDateChange,
}) => (
  <div>
    <Title>TICKET SEARCH</Title>

    <form onSubmit={ onSubmit }>
      <Flex mb={ 2 }>
        <MyBox width={ 1/2 } px={ 2 }>
          <Input type="text" onChange={ onFromChange } placeholder="From" />
        </MyBox>
        <MyBox width={ 1/2 } px={ 2 }>
          <Input type="text" onChange={ onToChange } placeholder="To" />
        </MyBox>
      </Flex>
      <Flex mb={ 2 }>
        <MyBox width={ 1/2 } px={ 2 }>
          <Input type="date" onChange={ onFromDateChange } placeholder="From Date" />
        </MyBox>
        <MyBox width={ 1/2 } px={ 2 }>
          <Input type="date" onChange={ onToDateChange } placeholder="To Date" />
        </MyBox>
      </Flex>
      <Flex>
        <ButtonBox px={ 2 }>
          <button disabled={ isFormLoading }>SEARCH FLIGHTS</button>
        </ButtonBox>
      </Flex>
    </form>
  </div>
)
