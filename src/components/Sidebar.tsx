import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { List, ListItem, Link } from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';

interface CateFilm {
  id: number;
  name: string;
}

const Sidebar: React.FC = () => {
  const [cateFilm, setcateFilm] = useState<CateFilm[]>([]);

  useEffect(() => {
    const getCateFilm = async () => {
      const apiKey = '8994ab5eb89f420a8522ac8922dd9f48';
      const res = await axios.get(`https://api.themoviedb.org/3/genre/movie/list?language=vi&api_key=${apiKey}`);
      const genres = res.data.genres;
      setcateFilm(genres);
    };

    getCateFilm();
  }, []);

  return (
    <List color='white' fontSize={16} spacing={16} bg={"#040D12"} p={15}>
      {cateFilm.map((genre) => (
        <ListItem key={genre.id}>
          <Link
            fontWeight='bold'
            color='white'
            as={RouterLink}
            to={`/genre/${genre.id}`}
            textDecoration='none'
            padding={15}
          >
            {genre.name}
          </Link>
        </ListItem>
      ))}
    </List>
  );
};

export default Sidebar;
