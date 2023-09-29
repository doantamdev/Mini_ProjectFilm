import React from 'react'
import SlideData from '../components/SlideData'
import { Flex, Grid,GridItem,Image } from '@chakra-ui/react'

const SlideContainer = () => {
  return (
    <Flex  bg='#282A3A' opacity={30}>
    <Grid
    h='495px'
    marginStart={70}
    templateRows='repeat(2, 1fr)'
    templateColumns='repeat(5, 1fr)'
    mt={5}
    marginEnd={60}
    gap={4}
    position='relative'
  >
    <GridItem rowSpan={2} colSpan={3}>
      <SlideData />
    </GridItem>
    <GridItem colSpan={1}> 
      <Image w='100%' h={243} src='https://i.imgur.com/La3B5NZ.jpg' alt='Dan Abramov' /> 
    </GridItem>
    <GridItem colSpan={1}>
    <Image w='100%' h={243} src='https://i.imgur.com/upRLajH.jpg' alt='Abramov' /> 
    </GridItem>
    <GridItem colSpan={2} rowSpan={1}>
    <Image w='100%' h={243} src='https://i.imgur.com/eBTnzhB.png' alt='Dan' /> 
    </GridItem>
  </Grid>
  </Flex>
  )
}

export default SlideContainer