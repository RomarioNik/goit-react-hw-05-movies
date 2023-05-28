import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Wrapper = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

export const Container = styled.div`
  position: relative;
  max-width: 991px;
  width: 100%;
  margin: 0 auto;
  padding-left: 15px;
  padding-right: 15px;
  display: flex;
  align-items: center;
`;

export const Main = styled.main`
  flex-grow: 1;
`;

export const Header = styled.header`
  height: 70px;
  display: flex;
  align-items: center;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
`;

export const List = styled.ul`
  display: flex;
  align-items: center;
  gap: 20px;
`;

export const NavLinkStyled = styled(NavLink)`
  font-size: 24px;

  &:hover {
    text-decoration: underline;
  }

  &.active,
  &:active {
    color: orange;
  }
`;

export const Footer = styled.footer`
  height: 50px;
  display: flex;
  align-items: center;
`;
export const ContentFooterWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

export const Copyright = styled.p``;
