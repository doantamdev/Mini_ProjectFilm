import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useLocation, useNavigate } from 'react-router-dom'; 

import Nav from '../components/nav';
import SlideContainer from '../components/SlideContainer';
import Footer from '../components/Footer';
import Sidebar from './Sidebar';
import FilmTrending from './FilmTrending';

import {
    Grid, GridItem, Image, VStack, Box, Card, Text,
    CardBody, CardHeader, CardFooter, Container, Flex, Select, HStack
  } from '@chakra-ui/react';


interface Film {
    title: string;
    id: number;
    backdrop_path: string;
    release_date: string;
    vote_average: number
  }

const SearchResults: React.FC = () => {
  const [searchResults, setSearchResults] = useState<Film[]>([]);
  const [timphim, setTimPhim] = useState(''); 
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const query = searchParams.get('query');
  const navigate = useNavigate();

  useEffect(() => {
    const SearchResults = async () => {
      try {
        const apiKey = '8994ab5eb89f420a8522ac8922dd9f48';
        const res = await axios.get(
          `https://api.themoviedb.org/3/search/multi?query=${query}&include_adult=false&language=vi&api_key=${apiKey}`
        );
        const phim = res.data.results;
        setSearchResults(phim);
      } catch (e) {
        console.error(e);
      }
    };

    SearchResults();
  }, [query]);

  const TimPhim = async () => {
    const apiKey = '8994ab5eb89f420a8522ac8922dd9f48';
    const res = await axios.get(
      `https://api.themoviedb.org/3/search/multi?query=${timphim}&include_adult=false&language=vi&api_key=${apiKey}`
    );
    const phim = res.data.results;
    console.log(phim);
    setSearchResults(phim); 
    navigate(`/searchresults?query=${timphim}`);
  };

  return (
    <Container>
      
<Container>
      <Nav />
      <SlideContainer />
      <Flex w='100%' h='100%' bg='#282A3A' opacity={30}>
      <Grid templateColumns="repeat(7,1fr)" bg='gray.50' marginTop={10}>
      <GridItem  w='70px'/>
      <GridItem as='aside' colSpan={{ base: 1, lg: 2, xl: 1 }}
        height='fit-content' 
        w={331}
        p={{ base: '20px', lg: '30px' }}
      >
        <Sidebar />
        <FilmTrending />
      </GridItem>
      <GridItem as='main' colSpan={{ base: 7, lg: 5, xl: 6 }} p={10}>
      <Flex w={'full'} h={89} bg={'#040D12'} mb={15} mt={7}>
        <HStack spacing={10} fontSize={16} fontWeight={'bold'} color={'white'} ms={20}>
          <Text>Lọc theo năm</Text>
          <Select placeholder='Chọn năm' w={350} h={43} textAlign={'center'}>
            <option value='option1'>2022</option>
            <option value='option2'>2023</option>
            <option value='option3'>1999</option>
          </Select>
          <input type='text' placeholder='Tìm phim' value={timphim} onChange={(e) => setTimPhim(e.target.value)} />
          <button onClick={TimPhim}>Tìm</button>
        </HStack>
      </Flex>
      <Grid templateColumns="repeat(4, 1fr)" gap={22}>
        {searchResults.map((film) => (
          <GridItem key={film.id}>
            <Card w={242} h={492}>
              <CardHeader w={242} h={376}>
                <Image src={`https://image.tmdb.org/t/p/w500/${film.backdrop_path}`} alt={film.title} w="100%" h="376px" objectFit='cover' />
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
      </GridItem>
    </Grid>
   
      </Flex>
      <Footer />
    </Container>
    </Container>
  );
};

export default SearchResults;
