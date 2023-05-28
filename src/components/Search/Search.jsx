import { useState, useEffect } from 'react';
import { Link, useLocation, useSearchParams } from 'react-router-dom';
import { searchMovies } from 'services/movieApi';
import Loader from 'components/Loader';
import { Wrapper, Form, Input, Button, ListWrapper } from './Search.styled';

const STATUS = {
  IDLE: 'idle',
  PENDING: 'pending',
  RESOLVED: 'resolved',
  REJECTED: 'rejected',
};

const Search = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchText, setSearchText] = useState(
    () => searchParams.get('query') ?? ''
  );
  const [movies, setMovies] = useState([]);
  const [status, setStatus] = useState(STATUS.IDLE);

  const location = useLocation();

  useEffect(() => {
    const fetchMovies = async text => {
      try {
        setStatus(STATUS.PENDING);
        const movies = await searchMovies(text);
        if (movies.data.results.length === 0) {
          setStatus(STATUS.REJECTED);
          return;
        }
        setMovies(movies.data.results);
        setStatus(STATUS.RESOLVED);
      } catch (error) {
        console.log(error);
        setStatus(STATUS.REJECTED);
      }
    };

    if (searchText) fetchMovies(searchText);
  }, [searchText]);

  const handleSubmitForm = e => {
    e.preventDefault();
    const { value } = e.target.search;
    setSearchText(value);
  };

  const updateQueryString = ({ target: { value } }) => {
    const param = value.trim() !== '' ? { query: value.trim() } : {};
    setSearchParams(param);

    if (value.trim() === '') {
      setStatus(STATUS.IDLE);
      setSearchText('');
    }
  };

  return (
    <Wrapper>
      <Form onSubmit={handleSubmitForm}>
        <Input
          type="text"
          name="search"
          value={searchParams.get('query') ?? ''}
          onChange={updateQueryString}
        />
        <Button type="submit">Search</Button>
      </Form>
      <ListWrapper>
        {status === STATUS.IDLE && <div></div>}

        {status === STATUS.PENDING && <Loader />}

        {status === STATUS.REJECTED && <div>We don't found any movie.</div>}

        {status === STATUS.RESOLVED && (
          <ul>
            {movies.map(({ id, title }) => (
              <li key={id}>
                <Link to={`/movies/${id}`} state={{ from: location }}>
                  {title}
                </Link>
              </li>
            ))}
          </ul>
        )}
      </ListWrapper>
    </Wrapper>
  );
};

export default Search;
