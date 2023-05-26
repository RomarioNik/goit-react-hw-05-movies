import { Outlet } from 'react-router-dom';
import Movie from '../components/Movie';

const MovieDetailesPage = () => {
  return (
    <Movie>
      <Outlet />
    </Movie>
  );
};

export default MovieDetailesPage;
