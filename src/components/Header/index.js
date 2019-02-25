import React from 'react';

import styled from 'styled-components';

const Wrapper = styled.div`
  background: #FF3495;
`;

const Heading = styled.h1`
  color: #fff;
  font-size: 32px;
`;

const Search = ({onChange, searchText}) => (
  <Wrapper>
    <Heading>Ideas</Heading>
    <input value={searchText} onChange={e => onChange(e.target.value)} placeholder="Search" />
  </Wrapper>
)

export default Search;
