import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getReviews } from '../../services/movieApi';
import { List, ListItem, Text } from './Reviews.styled';

const Reviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchReviews = async id => {
      try {
        const reviews = await getReviews(id);
        setReviews(reviews.data.results);
        setIsLoading(true);
        console.log('fetchReviews ~ reviews:', reviews);
      } catch (error) {
        console.log(error);
        setIsLoading(false);
      } finally {
      }
    };

    fetchReviews(movieId);
  }, [movieId]);

  return (
    <List>
      {isLoading && reviews.length === 0 ? (
        <li>
          <p>No reviews</p>
        </li>
      ) : (
        reviews.map(({ id, author, content }) => (
          <ListItem key={id}>
            <h4>{author}</h4>
            <Text>{content}</Text>
          </ListItem>
        ))
      )}
    </List>
  );
};

export default Reviews;
