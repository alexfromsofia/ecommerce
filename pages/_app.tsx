import { AppProps } from "next/app";
import { Box, ChakraProvider, Grid, GridItem } from "@chakra-ui/react";

import "../styles.css";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Cart from "../components/Cart";
import { AppContext, IAppContext, initialState } from "../store/AppContext";
import { useState } from "react";
import CheckoutSidebar from "../components/CheckoutSidebar";

function MyApp({ Component, pageProps }: AppProps) {
  const [state, setState] = useState<IAppContext>(initialState.state);

  return (
    <AppContext.Provider value={{ state, setState }}>
      <Cart>
        <ChakraProvider>
          <CheckoutSidebar />
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
    </AppContext.Provider>
  );
}

export default MyApp;
