import { useState } from "react";
import { useShoppingCart } from "use-shopping-cart/react";
import { fetchPostJSON } from "../utils/api-helpers";

export default () => {
  const { cartDetails, redirectToCheckout } = useShoppingCart();
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

  return {
    handleCheckout,
    loading,
    errorMessage,
  };
};
