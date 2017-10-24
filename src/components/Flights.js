import React from 'react'
import { Flex, Box } from 'grid-styled'

export default ({ flights }) => (
  <Box px={ 2 }>
    { flights.map((flight, index) => (
      <Flex mb={ 2 } key={ index }>
        <Box width={ 1/2 }>
          From: { flight.cityFrom }, 
          To: { flight.cityTo }
        </Box>
        <Box width={ 1/2 }>
          Duration: { flight.fly_duration }
        </Box>
      </Flex>
    ))}
  </Box>
)
