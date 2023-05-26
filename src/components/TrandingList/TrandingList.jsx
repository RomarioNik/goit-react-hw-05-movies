import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getTranding } from 'services/movieApi';

const TrandingList = () => {
  const [trandingList, setTrandingList] = useState([]);

  useEffect(() => {
    const fatchTranding = async () => {
      try {
        const trending = await getTranding();
        setTrandingList(trending.data.results);
        console.log(trending.data);
      } catch (error) {
        console.log(error);
      }
    };

    fatchTranding();
  }, []);

  return (
    <div>
      <ul>
        {trandingList.map(({ id, title }) => (
          <li key={id}>
            <Link to={`/movies/${id}`}>{title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TrandingList;
