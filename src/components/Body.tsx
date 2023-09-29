import { Grid, GridItem } from '@chakra-ui/react'
import React from 'react'
import Sidebar from './Sidebar'
import Movie from './Movie'
import FilmTrending from './FilmTrending'

const Body = () => {
  return (
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
          <Movie />
      </GridItem>
    </Grid>
  )
}

export default Body