import React from 'react'
import { Flex, Box } from 'grid-styled';

import Input from 'components/Input'

export default ({
  onSubmit,
  isFormLoading,
  onFromChange,
  onToChange,
  onFromDateChange,
  onToDateChange
}) => (
  <form onSubmit={ onSubmit }>
    <Flex mb={ 2 }>
      <Box width={ 1/2 } px={ 2 }>
        <Input onChange={ onFromChange } placeholder="From" />
      </Box>
      <Box width={ 1/2 } px={ 2 }>
        <Input onChange={ onToChange } placeholder="To" />
      </Box>
    </Flex>
    <Flex mb={ 2 }>
      <Box width={ 1/2 } px={ 2 }>
        <Input type="date" onChange={ onFromDateChange } placeholder="From Date" />
      </Box>
      <Box width={ 1/2 } px={ 2 }>
        <Input type="date" onChange={ onToDateChange } placeholder="To Date" />
      </Box>
    </Flex>
    <Flex>
      <Box px={ 2 }>
        <button disabled={ isFormLoading }>Submit</button>
      </Box>
    </Flex>
  </form>
)
