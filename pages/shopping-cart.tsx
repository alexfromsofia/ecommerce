import { NextPage } from "next";

import { Button, Flex, Stack } from "@chakra-ui/react";
import { useShoppingCart } from "use-shopping-cart/react";
import { useState } from "react";
import { fetchPostJSON } from "../utils/api-helpers";

const ShoppingCart: NextPage = () => {
  const { cartDetails, redirectToCheckout } = useShoppingCart();
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
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
        </Stack>
      </Flex>
    </form>
  );
};

export default ShoppingCart;
