import { NextPage } from "next";

import { Button, Flex, Stack } from "@chakra-ui/react";
import { useShoppingCart } from "use-shopping-cart/react";
import { useEffect, useState } from "react";
import { fetchPostJSON } from "../utils/api-helpers";
import contentful from "../lib/contentful";
import { IProduct } from "../@types/generated/contentful";

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

  console.log(formattedTotalPrice);
  console.log(cartDetails);
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
    <form onSubmit={handleCheckout}>
      <Flex>
        <Stack spacing={4} direction="row" align="center">
          <Button type="submit" colorScheme="teal" size="lg">
            Proceed to checkout
          </Button>
          <Button onClick={clearCart} colorScheme="teal" size="lg">
            Clear Cart
          </Button>
        </Stack>
      </Flex>
    </form>
  );
};

export default ShoppingCart;
