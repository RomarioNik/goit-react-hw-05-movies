import { useEffect, useState } from 'react';
import { useParams, Link, Outlet } from 'react-router-dom';
import { getMovie } from '../../services/movieApi';
import {
  Wrapper,
  AboutWrapper,
  Description,
  DescriptionItem,
  GenreList,
  Thumb,
  Image,
  AddInfo,
  ExtraInfoWrapper,
  ExtraInfoList,
  ContentWrapper,
  ExtraInfoListItem,
  LinkStyled,
} from './Movie.styled';

const Movie = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [activeTab, setActiveTab] = useState(0);

  useEffect(() => {
    const fatchMovie = async id => {
      try {
        const movie = await getMovie(id);
        setIsLoading(true);
        setMovie(movie.data);
        console.log('movie data', movie.data);
      } catch (error) {
        console.log(error);
        setIsLoading(false);
      }
    };

    fatchMovie(movieId);
  }, [movieId]);

  const setActiveIdx = index => {
    if (activeTab === index) {
      return;
    }
    setActiveTab(index);
  };

  if (isLoading) {
    const { poster_path, title, overview, genres, popularity } = movie;
    return (
      <Wrapper>
        <AboutWrapper>
          <Thumb>
            <Image src={`https://image.tmdb.org/t/p/w500${poster_path}`} />
          </Thumb>
          <Description>
            <DescriptionItem>
              <h1>{title}</h1>
              <p>User score: {popularity.toFixed()}</p>
            </DescriptionItem>
            <DescriptionItem>
              <h2>Overiew</h2>
              <p>{overview}</p>
            </DescriptionItem>
            <DescriptionItem>
              <h2>Genres</h2>
              <GenreList>
                {genres.map(({ id, name }) => (
                  <li key={id}>{name}</li>
                ))}
              </GenreList>
            </DescriptionItem>
          </Description>
        </AboutWrapper>

        <AddInfo>Additional information</AddInfo>
        <ExtraInfoWrapper>
          <ExtraInfoList>
            <ExtraInfoListItem show={activeTab === 1 ? '#f2f2f2' : '#F9FAFF'}>
              <LinkStyled
                to={`/movies/${movieId}/cast`}
                onClick={() => setActiveIdx(1)}
              >
                Cast
              </LinkStyled>
            </ExtraInfoListItem>
            <ExtraInfoListItem show={activeTab === 2 ? '#f2f2f2' : '#F9FAFF'}>
              <LinkStyled
                to={`/movies/${movieId}/reviews`}
                onClick={() => setActiveIdx(2)}
              >
                Rewiews
              </LinkStyled>
            </ExtraInfoListItem>
          </ExtraInfoList>

          <ContentWrapper>
            <Outlet />
          </ContentWrapper>
        </ExtraInfoWrapper>
      </Wrapper>
    );
  }
};

export default Movie;
