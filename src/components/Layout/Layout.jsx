import { Outlet } from 'react-router-dom';
import {
  Wrapper,
  Container,
  Header,
  List,
  NavLinkStyled,
  Main,
  Footer,
  ContentFooterWrapper,
  Copyright,
} from './Layout.styled';

const Layout = () => {
  return (
    <Wrapper>
      <Header>
        <Container>
          <nav>
            <List>
              <li>
                <NavLinkStyled to="/">Home</NavLinkStyled>
              </li>
              <li>
                <NavLinkStyled to="/movies">Movie</NavLinkStyled>
              </li>
            </List>
          </nav>
        </Container>
      </Header>

      <Main>
        <Container>
          <Outlet />
        </Container>
      </Main>

      <Footer>
        <Container>
          <ContentFooterWrapper>
            <Copyright>&copy; Copyright</Copyright>
          </ContentFooterWrapper>
        </Container>
      </Footer>
    </Wrapper>
  );
};

export default Layout;
