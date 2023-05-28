import styled from 'styled-components';
import { ReactComponent as ImgActorDefault } from '../../images/mask.svg';

export const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
  padding: 20px;
  background-color: ${({ theme }) => theme.colors.bgAddInfo};
`;

export const ListItem = styled.li`
  overflow: hidden;
  border-radius: 4px;
  background-color: #ffffff;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
`;

export const Thumb = styled.div`
  width: 150px;
  height: auto;
`;

export const Image = styled.img`
  object-fit: cover;
`;

export const DefaultImage = styled(ImgActorDefault)`
  width: 150px;
  height: 225px;
  padding: 0 20px;
  opacity: 0.1;
`;

export const Desription = styled.div`
  padding: 5px 8px;
`;

const Text = styled.p`
  width: 130px;
  font-size: 12px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const Character = styled(Text)`
  font-weight: 600;
`;

export const Name = styled(Text)``;
