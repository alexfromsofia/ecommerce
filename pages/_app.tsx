import { AppProps } from "next/app";
import { Box, ChakraProvider, Grid, GridItem } from "@chakra-ui/react";

import "../styles.css";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Cart from "../components/Cart";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Cart>
      <ChakraProvider>
        <Box w="100%">
          <Grid templateRows="repeat(3, auto)" gap={4}>
            <GridItem>
              <Header />
            </GridItem>
            <GridItem>
              <Component {...pageProps} />
            </GridItem>
            <GridItem>
              <Footer />
            </GridItem>
          </Grid>
        </Box>
      </ChakraProvider>
    </Cart>
  );
}

export default MyApp;
