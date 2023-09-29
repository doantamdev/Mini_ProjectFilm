import { Flex,Image, Spacer,VStack,Text } from '@chakra-ui/react'
import React from 'react'

import { Inputfilm } from './InputFilm/inputfilm'
const Nav = () => {
  return (
   <Flex as="nav" p={10} bg="#040D12" w='full' h={77}> 
       <Image w={121} h={49} ms={80} objectFit='cover' src='/logo.png' alt='Logo Film' p={10}/>
       <Spacer />
       <VStack w="full" h={77}  alignItems="center" spacing={0}>
          <Text fontSize={18} color='white' fontWeight='bold' fontFamily='montserrat' lineHeight="10px" marginBottom={1} marginTop={20}>
            Bạn muốn xem gì?
          </Text>
          <Text fontSize={16} color='white' fontFamily='montserrat' fontWeight='medium' lineHeight="10px" marginBottom={5}>
            Xem ngay
          </Text>
        </VStack>
        <Inputfilm />
   </Flex>
  )
}

export default Nav
  