/* eslint-disable react/no-children-prop */
/* eslint-disable react/function-component-definition */
import {
  Input, InputGroup, InputLeftElement,
} from '@chakra-ui/react';
import { SearchIcon } from '@chakra-ui/icons';
import React from 'react';

const Search = (props) => {
  const handleSearch = (e) => {
    props.filter(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit}>
      <InputGroup size="md" mt={8} mb={8} w="400px">
        <InputLeftElement
          pointerEvents="none"
          children={<SearchIcon />}
          className="InputLeft"
          size="md"
        />
        <Input
          w="100%"
          borderColor="#333338"
          placeholder="Search"
          color="#C0BECA"
          _placeholder={{ color: '#C0BECA' }}
          onChange={handleSearch}
          size="md"
          className="Input"
        />
      </InputGroup>
    </form>
  );
};

export default Search;
