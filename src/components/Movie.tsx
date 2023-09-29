import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

import {
  Grid, GridItem, Image, VStack, Box, Card, Text,
  CardBody, CardHeader, CardFooter, Container, Flex, Select, HStack
} from '@chakra-ui/react';


interface Film {
  title: string;
  id: number;
  backdrop_path: string;
  release_date: string;
  poster_path:string;
  vote_average: number
}

const Movie: React.FC = () => {
  const [films, setFilms] = useState<Film[]>([]);
  const [timphim, setTimPhim] = useState('');
  const [selectedYear, setSelectedYear] = useState('');
  const navigate = useNavigate();

  const getFilm = async () => {
    const apiKey = '8994ab5eb89f420a8522ac8922dd9f48';
    const res = await axios.get(
      `https://api.themoviedb.org/3/discover/movie?
      include_adult=false&include_video=false&language=vi&page=1&sort_by=popularity.desc&api_key=${apiKey}`
    );
    const phim = res.data.results;
    console.log(phim)
    setFilms(phim);
  };
  useEffect(() => {
    getFilm();
  }, []);

  const TimPhim = async () => {
    const apiKey = '8994ab5eb89f420a8522ac8922dd9f48';
    const year = selectedYear; 
    const res = await axios.get(
      `https://api.themoviedb.org/3/search/movie?query=${timphim}
      &include_adult=false&language=vi&page=1&year=${year}&api_key=${apiKey}`
    );
    const phim = res.data.results;
    setFilms(phim);
    navigate(`/searchresults?query=${timphim}&year=${year}`);
  };

  return (
    <Container>
      <Flex w={'full'} h={89} bg={'#040D12'} mb={15} mt={7}>
        <HStack spacing={10} fontSize={16} fontWeight={'bold'} color={'white'} ms={20}>
          <Text>Lọc theo năm</Text>
          <Select
            placeholder='Chọn năm'
            w={350}
            h={43}
            textAlign={'center'}
            value={selectedYear} 
            onChange={(e) => setSelectedYear(e.target.value)} 
          >
            <option value='option1'>2022</option>
            <option value='option2'>2023</option>
            <option value='option3'>2017</option>
          </Select>
          <input type='text' placeholder='Tìm phim' 
          value={timphim} onChange={(e) => setTimPhim(e.target.value)} />
          <button onClick={TimPhim}>Tìm</button>
        </HStack>
      </Flex>
      <Grid templateColumns="repeat(4, 1fr)" gap={22}>
        {films.map((film) => (
          <GridItem key={film.id}>
            <Card w={242} h={492} onClick={() => navigate(`/chitet/${film.id}`)}>
              <CardHeader w={242} h={376}>
                <Image src={`https://image.tmdb.org/t/p/w500/${film.backdrop_path}`}
                 alt={film.title} w="100%" h="376px" objectFit='cover' cursor={'pointer'} />
              </CardHeader>
              <CardBody>
                <VStack spacing={5} align="left">
                  <Box fontWeight="bold" color={'#E9C81D'} fontSize={18} mt={5}>{film.title}</Box>
                  <Box fontWeight="SemiBold" color='white'>Năm phát hành: {film.release_date}</Box>
                </VStack>
              </CardBody>
              <CardFooter>
                <Box fontWeight="medium" color='white' fontSize={16}>Đánh giá:</Box>
                <Box fontWeight="medium" color='yellow' marginLeft={60}>{film.vote_average}</Box>
              </CardFooter>
            </Card>
          </GridItem>
        ))}
      </Grid>
    </Container>
  );
};

export default Movie;
