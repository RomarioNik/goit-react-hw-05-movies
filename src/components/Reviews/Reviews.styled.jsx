import styled from 'styled-components';

export const List = styled.ul`
  padding: 20px;
  /* border-radius: 8px; */
  background-color: #f2f2f2;
`;

export const ListItem = styled.li`
  &:not(:last-child) {
    margin-bottom: 20px;
  }
`;

export const Text = styled.p`
  padding-left: 20px;
`;
