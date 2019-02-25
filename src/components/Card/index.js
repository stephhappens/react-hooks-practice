import React from 'react';

import styled from 'styled-components';

const Wrapper = styled.div`
  box-shadow: -2px -2px 7px rgba(0, 0, 0, 0.12), 2px 4px 6px rgba(0, 0, 0, 0.2); 
  border-radius: 8px;
  padding: 13px 25px;
`;

const Name = styled.h2`
  font-size: 24px;
`;

const List = styled.ul`
  margin-top: 0;
`;

const ListItem = styled.li`
  list-style: none;
`;

const Card = ({items = [], name}) => (
  <Wrapper>
    <Name>{name}</Name>
    <List>
      {items.map((item, i)  => (
        <ListItem key={i}>{item}</ListItem>
      ))}
    </List>
  </Wrapper>
)

export default Card;
