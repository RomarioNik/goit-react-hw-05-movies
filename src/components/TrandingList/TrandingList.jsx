import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { getTranding } from 'services/movieApi';
import { Wrapper, Title, List } from './TrandingList.styled';

const TrandingList = () => {
  const [trandingList, setTrandingList] = useState([]);

  const location = useLocation();

  useEffect(() => {
    const fatchTranding = async () => {
      try {
        const trending = await getTranding();
        setTrandingList(trending.data.results);
      } catch (error) {
        console.log(error);
      }
    };

    fatchTranding();
  }, []);

  return (
    <Wrapper>
      <Title>Tranding today</Title>
      <List>
        {trandingList.map(({ id, title }) => (
          <li key={id}>
            <Link to={`/movies/${id}`} state={{ from: location }}>
              {title}
            </Link>
          </li>
        ))}
      </List>
    </Wrapper>
  );
};

export default TrandingList;
