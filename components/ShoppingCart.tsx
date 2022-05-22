import {
  Button,
  Container,
  Stack,
  Table,
  TableContainer,
  Tbody,
  Td,
  Tfoot,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import { NextPage } from "next";
import Image from "next/image";
import { useShoppingCart } from "use-shopping-cart/react";
import { IProductFields } from "../@types/generated/contentful";
import useCheckoutSession from "../hooks/useCheckoutSession";

const ShoppingCart: NextPage = () => {
  const { cartDetails, clearCart, formattedTotalPrice } = useShoppingCart();
  const { handleCheckout } = useCheckoutSession();

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
