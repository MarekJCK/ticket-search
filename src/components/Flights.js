import React from 'react';
import { Flex, Box } from 'grid-styled';
//import styled from 'styled-components';

const ContainerBox = Box.extend`
  max-height: 400px;
  overflow-y: scroll;
  border-top: 1px solid #DDD;
  border-bottom: 1px solid #DDD;
`;

const RowFlex = Flex.extend`
  flex-direction: column;
`;

const RowBox = Box.extend`
  display: flex;
`;

const RightBox = Box.extend`
  text-align: right;
`;

export default ({ flights, currency }) => (
  <ContainerBox mt={ 2 } px={ 2 }>
    { flights.map((flight, index) => (
      <RowFlex mt={ 2 } mb={ 2 } key={ index }>
        <RowBox width={ 1 }>
          <Box width={ 1/3 }>
            From: { flight.cityFrom }
          </Box>
          <Box width={ 1/3 }>
            <img src="src/img/from.svg" alt="" />
          </Box>
          <RightBox width={ 1/3 }>
            To: { flight.cityTo }
          </RightBox>
        </RowBox>
        <RowBox width={ 1 }>
          <Box width={ 1/2 }>
            Duration: { flight.fly_duration }
          </Box>
          <RightBox width={ 1/2 }>
            Price: { flight.price } { currency }
          </RightBox>
        </RowBox>
      </RowFlex>
    ))}
  </ContainerBox>
)
