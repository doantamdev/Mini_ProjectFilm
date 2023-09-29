import React from 'react'
import { Flex,Text } from '@chakra-ui/react'

const Footer = () => {
    return (
        <Flex bg="#040D12" w='full' h={73} color={'white'} 
        justify={'center'}
        align={'center'}
        fontWeight={'medium'} fontSize={16}
        >
           <Text > Create by @HuynhDoanTam </Text>
        </Flex>
    )
}

export default Footer