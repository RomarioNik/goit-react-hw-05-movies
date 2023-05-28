import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Wrapper = styled.div`
  padding: 10px 30px 30px 30px;
`;

export const LinkWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;

export const LinkGoBack = styled(Link)`
  display: flex;
  align-items: center;
  flex-grow: 0;
  padding: 5px 10px 5px 0;
  color: ${({ theme }) => theme.colors.mainText};

  &:hover,
  &:active {
    color: orange;
  }

  &:hover > svg,
  &:active > svg {
    stroke: orange;
  }

  & > svg {
    stroke: ${({ theme }) => theme.colors.mainText};
  }
`;

export const AboutWrapper = styled.div`
  display: flex;
  gap: 30px;
`;

export const Thumb = styled.div`
  width: 400px;
  height: auto;
`;

export const Image = styled.img`
  border-radius: 8px;
  object-fit: cover;
`;

export const Description = styled.ul`
  width: 100%;
  max-width: 400px;
  &:not(:last-child) {
    margin-bottom: 20px;
  }
`;

export const DescriptionItem = styled.li`
  &:not(:last-child) {
    margin-bottom: 20px;
  }
`;

export const GenreList = styled.ul`
  display: flex;
  gap: 10px;
`;

export const AddInfo = styled.h3`
  padding: 20px 0;
  text-align: center;
`;

export const ExtraInfoWrapper = styled.div``;

export const ExtraInfoList = styled.ul`
  display: flex;
  justify-content: space-evenly;
  list-style: none;
`;

export const ExtraInfoListItem = styled.li`
  width: 100%;
  padding: 10px 0;
  list-style: none;
  background-color: ${({ show }) => show};
`;

export const LinkStyled = styled(Link)`
  display: block;
  text-align: center;
  color: ${({ show }) => show};
  &:hover {
    color: orange;
  }
`;

export const ContentWrapper = styled.div``;
