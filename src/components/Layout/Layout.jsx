import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import Loader from 'components/Loader';
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
          <Suspense fallback={<Loader />}>
            <Outlet />
          </Suspense>
        </Container>
      </Main>

      <Footer>
        <Container>
          <ContentFooterWrapper>
            <Copyright>&copy; End of page</Copyright>
          </ContentFooterWrapper>
        </Container>
      </Footer>
    </Wrapper>
  );
};

export default Layout;
