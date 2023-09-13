import React from "react";
import { Container, Box } from "@chakra-ui/react";
export default function Viteapp() {

  return (
    <>
      <Container maxWidth="400px" bg="orange" marginTop="6px" blur="">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Praesentium,
        vel?
      </Container>

      <Box bg="red.200" w={[300, 400, 500]}>
        This is a box
      </Box>
      // These are the default breakpoints

    </>
  );
}
