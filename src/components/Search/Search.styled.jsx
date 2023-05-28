import styled from 'styled-components';

export const Wrapper = styled.div`
  padding: 20px;
  width: 100%;
`;

export const Form = styled.form`
  display: flex;
`;

export const Input = styled.input`
  height: 30px;
  width: 100%;
  padding-left: 10px;
  max-width: 300px;
  border-radius: 4px 0 0 4px;
  border: 1px solid ${({ theme }) => theme.colors.borderColor};
  border-right: none;
  outline: none;
`;

export const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 10px;
  color: ${({ theme }) => theme.colors.secondText};
  cursor: pointer;
  border: 1px solid ${({ theme }) => theme.colors.borderColor};
  border-left: none;
  border-radius: 0 4px 4px 0;
  background-color: ${({ theme }) => theme.colors.bgItems};
`;

export const ListWrapper = styled.div`
  padding: 20px;
`;
