import { Container } from "@chakra-ui/react";
import { useContext } from "react";
import Hero from "../components/Hero";
import { AppContext } from "../store/AppContext";

const IndexPage = () => {
  const state = useContext(AppContext);
  console.log(state.state.checkoutDrawerOpen);

  return (
    <>
      <Container maxW="container.xl">
        <Hero />
      </Container>
    </>
  );
};

export default IndexPage;
