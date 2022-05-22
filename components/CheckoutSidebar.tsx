import {
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
} from "@chakra-ui/react";
import React, { useContext } from "react";
import { AppContext } from "../store/AppContext";
import ShoppingCart from "./ShoppingCart";

export default function CheckoutSidebar() {
  const {
    state: { checkoutDrawerOpen },
    setState,
  } = useContext(AppContext);
  const handleClose = () => {
    setState((prevState) => ({
      ...prevState,
      checkoutDrawerOpen: !prevState.checkoutDrawerOpen,
    }));
  };

  return (
    <Drawer
      placement="right"
      onClose={handleClose}
      isOpen={checkoutDrawerOpen}
      size="lg"
    >
      <DrawerOverlay />
      <DrawerContent>
        <DrawerHeader borderBottomWidth="1px">Shopping Cart</DrawerHeader>
        <DrawerBody>
          <ShoppingCart />
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  );
}
