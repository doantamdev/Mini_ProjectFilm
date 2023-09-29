import { Container, Input } from "@chakra-ui/react";


export const Inputfilm = () => {
  return (
    <Container>
      <Input
        type="text"
        placeholder="Bạn muốn xem gì?"
        fontSize={{ base: "56px", md: "40px", lg: "56px" }}
        w={450}
        h={39}
        marginLeft={20}
        justifyContent="center"
        mt={15}
        marginEnd={80}
        mb={40}
      />
    </Container>
  );
};
