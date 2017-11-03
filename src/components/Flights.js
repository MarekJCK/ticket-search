import React from 'react';
import { Flex, Box } from 'grid-styled';
import imgFrom from 'img/from.png';
import imgDeparture from 'img/departure.png';
import imgArrival from 'img/arrival.png';
import styled from 'styled-components';

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

const CenterBox = Box.extend`
  text-align: center;
`;

const CenterImage = styled(CenterBox)`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const BlueBox = Box.extend`
  background: #B5DBFE;
  padding: 5px;
  text-align: center;
`;

const FromToSpan = styled.span`
  font-size: 15px;
  color: #fff;
  font-family: avenir next, helvetica, relaway;
`;

const CitySpan = styled.span`
  font-size: 25px;
  text-transform: uppercase;
  color: #fff;
  font-family: avenir next, helvetica, relaway;
`;

export default ({ flights, currency }) => (
  <ContainerBox mt={ 2 } px={ 2 }>
    { flights.map((flight, index) => (
      <RowFlex mt={ 2 } mb={ 2 } key={ index }>
        <RowBox width={ 1 }>
          <BlueBox width={ 2/3 }>
            <img src={imgDeparture} alt="" /> <CitySpan>{ flight.cityFrom }</CitySpan>
          </BlueBox>
          <CenterImage width={ 1/3 }>
            <img src={imgFrom} alt="" />
          </CenterImage>
          <BlueBox width={ 2/3 }>
            <img src={imgArrival} alt="" /> <CitySpan>{ flight.cityTo }</CitySpan>
          </BlueBox>
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
