import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Box, Container, Flex, HStack,Image, VStack } from '@chakra-ui/react';

interface TrendyFilm {
    id: number;
    title: string;
    backdrop_path: string;
    release_date: string; 
    vote_average: number;
}

const FilmTrending: React.FC = () => {
    const [trendyFilm, setTrendyFilm] = useState<TrendyFilm[]>([]); 

    useEffect(() => {
        const getTrendingFilm = async () => {
            const apiKey = '8994ab5eb89f420a8522ac8922dd9f48';
            const res = await axios.get(`https://api.themoviedb.org/3/trending/movie/day?language=vi&api_key=${apiKey}`);
            const trend = res.data.results.slice(0,12);
            setTrendyFilm(trend);
            console.log(trend)
        };

        getTrendingFilm();
    }, []);

    return (
        <div>
            <Container>
                <Flex w={331} h={36} bg={'#040D12'} color={'white'} 
                fontSize={16} fontWeight={'bold'}
                justifyContent={'center'} align={'center'}>
                    PHIM ĐỀ CỬ
                    </Flex>
            {trendyFilm.map((film) => (
            <HStack spacing={10} marginTop={10}>
                <Image w={106} h={130} objectFit={'cover'} src={`https://image.tmdb.org/t/p/original/${film.backdrop_path}`}>
                </Image>
                <Flex bg={'#040D12'} h={130} w={225}>
                <VStack spacing={10}>
                <Box key={film.id} ms={5}>
                <Box fontWeight="bold" color={'#E9C81D'} fontSize={18} autoCapitalize='on' mt={5}>{film.title}</Box>
                <Box fontWeight="SemiBold" color='white'>Năm phát hành: {film.release_date}</Box>
                <Box fontWeight="medium" color='white' fontSize={16}>Đánh giá: {film.vote_average}</Box>
                </Box>
                </VStack>
                </Flex>
            </HStack>
            ))}
            </Container>
        </div>
    );
}

export default FilmTrending;
