import Loader from 'components/Loader';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getCast } from '../../services/movieApi';
import {
  List,
  ListItem,
  Thumb,
  Image,
  DefaultImage,
  Desription,
  Character,
  Name,
} from './Cast.styled';

const Cast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchCast = async id => {
      try {
        const cast = await getCast(id);
        setCast(cast.data.cast);
        setIsLoading(true);
      } catch (error) {
        console.log(error);
        setIsLoading(false);
      }
    };

    fetchCast(movieId);
  }, [movieId]);

  if (!isLoading) {
    return <Loader />;
  }

  if (isLoading) {
    return (
      <List>
        {cast.length === 0 ? (
          <p>We don't have any cast for this movie.</p>
        ) : (
          cast.map(({ id, character, name, profile_path }) => (
            <ListItem key={id}>
              {!profile_path ? (
                <Thumb>
                  <DefaultImage />
                </Thumb>
              ) : (
                <Thumb>
                  <Image
                    src={`https://image.tmdb.org/t/p/w500${profile_path}`}
                    alt={name}
                    width="150"
                    height="225"
                  />
                </Thumb>
              )}
              <Desription>
                <Character>{character}</Character>
                <Name>{name}</Name>
              </Desription>
            </ListItem>
          ))
        )}
      </List>
    );
  }
};

export default Cast;
