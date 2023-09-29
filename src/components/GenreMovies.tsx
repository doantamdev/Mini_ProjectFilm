import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

interface Film {
  title: string;
  id: number;
  backdrop_path: string;
  release_date: string;
  vote_average: number;
}

const GenreMovies: React.FC = () => {
  const { id } = useParams();
  const [movies, setMovies] = useState<Film[]>([]);

  useEffect(() => {
    const SearchFilmByCate = async () => {
      try {
        console.log(id)
        const apiKey = '8994ab5eb89f420a8522ac8922dd9f48';
        const res = await axios.get(`https://api.themoviedb.org/3/discover/
        movie?include_adult=false&include_video=false&language=vi&with_genres=${id}&api_key=${apiKey}`);
        const moviesData = res.data.results;
        console.log(moviesData)
        setMovies(moviesData);
      } catch (error) {
        console.error(error);
      }
    };

    SearchFilmByCate();
  }, [id]);

  return (
    <div>
      <h1>Danh sách phim theo thể loại</h1>
      <ul>
        {movies.length > 0 ? (
          movies.map((movie) => (
            <li key={movie.id}>{movie.title}</li>
          ))
        ) : (
          <li>Không có phim nào cho thể loại này.</li>
        )}
      </ul>
    </div>
  );
};

export default GenreMovies;
