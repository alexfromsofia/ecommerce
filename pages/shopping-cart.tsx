import { NextPage } from "next";

import { Button, Flex, Stack } from "@chakra-ui/react";
import { useShoppingCart } from "use-shopping-cart/react";
import { useState } from "react";
import { fetchPostJSON } from "../utils/api-helpers";
import contentful from "../lib/contentful";
import { IProduct, IProductFields } from "../@types/generated/contentful";
import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
  Container,
} from "@chakra-ui/react";
import Image from "next/image";

export async function getStaticProps() {
  const products = await contentful.getEntries<IProduct>({
    content_type: "product",
  });

  return {
    props: products,
  };
}

const ShoppingCart: NextPage = () => {
  const { cartDetails, redirectToCheckout, clearCart, formattedTotalPrice } =
    useShoppingCart();
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleCheckout: React.FormEventHandler<HTMLFormElement> = async (
    event
  ) => {
    event.preventDefault();
    setLoading(true);
    setErrorMessage("");

    const response = await fetchPostJSON(
      "/api/checkout_sessions/cart",
      cartDetails
    );

    if (response.statusCode > 399) {
      console.error(response.message);
      setErrorMessage(response.message);
      setLoading(false);
      return;
    }

    redirectToCheckout({ sessionId: response.id });
  };

  return (
    <Container maxW="6xl">
      <TableContainer>
        <Table variant="simple">
          <Thead>
            <Tr>
              <Th>Name</Th>
              <Th>Image</Th>
              <Th>Price</Th>
            </Tr>
          </Thead>
          <Tbody>
            {Object.entries(cartDetails).map((item) => {
              const id = item[0];
              const { image, name, formattedPrice } =
                item[1] as IProductFields & { formattedPrice: string };

              return (
                <Tr key={id}>
                  <Td>{name}</Td>
                  <Td>
                    <Image src={`${image}`} width={60} height={60} />
                  </Td>
                  <Td isNumeric>{formattedPrice}</Td>
                </Tr>
              );
            })}
          </Tbody>
          <Tfoot>
            <Tr>
              <Th></Th>
              <Th></Th>
              <Th textAlign="right">Total: {formattedTotalPrice}</Th>
            </Tr>
          </Tfoot>
        </Table>
      </TableContainer>
      <form onSubmit={handleCheckout}>
        <Stack spacing={4} direction="row" align="center">
          <Button onClick={clearCart} colorScheme="teal" size="lg">
            Clear Cart
          </Button>
          <Button type="submit" colorScheme="teal" size="lg">
            Proceed to checkout
          </Button>
        </Stack>
      </form>
    </Container>
  );
};

export default ShoppingCart;
