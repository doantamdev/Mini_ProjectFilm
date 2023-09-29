import Nav from '../components/nav';
import SlideContainer from '../components/SlideContainer';
import { Container, Flex } from '@chakra-ui/react';
import Body from '../components/Body';
import Footer from '../components/Footer';

const Trangchu: React.FC = () => {
  return (
    <Container>
      <Nav />
      <SlideContainer />
      <Flex w='100%' h='100%' bg='#282A3A' opacity={30}>
        <Body />
      </Flex>
      <Footer />
    </Container>
  );
}

export default Trangchu;
