import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

import {
  GridItem, Image, VStack, Box, Card, Grid,
  Flex, HStack, background
} from '@chakra-ui/react';
import Nav from '../components/nav';
import FilmTrending from '../components/FilmTrending';

interface Film {
  title: string;
  id: number;
  backdrop_path: string;
  release_date: string;
  poster_path: string;
  vote_average: number;
}

const Chitiet: React.FC = () => {
  const { id } = useParams();
  const [movieDetail, setMovieDetail] = useState<Film>();

  useEffect(() => {
    const MovieDetail = async () => {
      try {
        const apiKey = '8994ab5eb89f420a8522ac8922dd9f48';
        const res = await axios.get(`https://api.themoviedb.org/3/movie/${id}?language=vi&api_key=${apiKey}`);
        setMovieDetail(res.data);
        console.log(movieDetail)
      } catch (e) {
        console.error(e);
      }
    };

    MovieDetail();
  }, [id]);

  if (!movieDetail) {
    return <div>Error</div>;
  }

  return (
    <div>
      <VStack bg={'#282A3A'} w={'100%'}>
  <Nav />
  <Flex h={53} w={'100%'} bg={'black'} mt={10} mb={10}></Flex>
</VStack>
<Flex w='100%' h='100%' bg='#282A3A'>
  <Grid templateColumns="repeat(5,1fr)" bg='gray.50' marginTop={10}>
    <GridItem colSpan={4}>
      <HStack
        w={1028}
        h={500}
        border={'1px solid white'}
        borderRadius={8}
        ms={50}
        p={6}
        bgImage={`https://image.tmdb.org/t/p/w500/${movieDetail.backdrop_path}`}
        style={
        { backgroundColor: 'rgba(0, 0, 0, 0.1)'}
        }
      >
        <Card w={242} h={492} opacity={1} ms={50} justifyContent={'center'}>
          <Image
            src={`https://image.tmdb.org/t/p/w500/${movieDetail.poster_path}`}
            alt={movieDetail.title}
            w="100%"
            h="376px"
            objectFit='cover'
          />
        </Card>

        <VStack alignItems="flex-start" >
          <Box fontWeight="bold" color={'#E9C81D'} fontSize={32}>
            {movieDetail.title}
          </Box>
          <Box fontWeight="SemiBold" color='white' fontSize={28}>
            Năm phát hành: {movieDetail.release_date}
          </Box>
          <Box fontWeight="SemiBold" color='white' fontSize={28}>
            Đánh giá: {movieDetail.vote_average}
          </Box>
        </VStack>
      </HStack>
    </GridItem>

    <GridItem colSpan={1} w='100%' me={30}>
      <FilmTrending />
    </GridItem>
  </Grid>
</Flex>

    </div>
  );
};

export default Chitiet;
