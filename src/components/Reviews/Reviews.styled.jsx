import styled from 'styled-components';

export const List = styled.ul`
  padding: 20px;
  background-color: ${({ theme }) => theme.colors.bgAddInfo};
`;

export const ListItem = styled.li`
  &:not(:last-child) {
    margin-bottom: 20px;
  }
`;

export const Text = styled.p`
  padding-left: 20px;
`;
