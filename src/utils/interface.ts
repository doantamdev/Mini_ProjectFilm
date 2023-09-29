interface CateFilm {
    id: number;
    name: string;
  }

export default CateFilm
  


// <GridItem key={movieDetail.id}>
//           <Card w={242} h={492}>
//             <CardHeader w={242} h={376}>
//               <Image src={`https://image.tmdb.org/t/p/w500/${movieDetail.backdrop_path}`}
//                 alt={movieDetail.title} w="100%" h="376px" objectFit='cover' />
//             </CardHeader>
//             <CardBody>
//               <VStack spacing={5} align="left">
//                 <Box fontWeight="bold" color={'#E9C81D'} fontSize={18} mt={5}>{movieDetail.title}</Box>
//                 <Box fontWeight="SemiBold" color='white'>Năm phát hành: {movieDetail.release_date}</Box>
//               </VStack>
//             </CardBody>
//             <CardFooter>
//               <Box fontWeight="medium" color='white' fontSize={16}>Đánh giá:</Box>
//               <Box fontWeight="medium" color='yellow' marginLeft={60}>{movieDetail.vote_average}</Box>
//             </CardFooter>
//           </Card>
//         </GridItem>