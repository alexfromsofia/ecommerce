import * as React from "react";
import { FiShoppingCart } from "react-icons/fi";
import Image from "next/image";
import {
  Flex,
  Box,
  Badge,
  useColorModeValue,
  Icon,
  chakra,
  Tooltip,
  Divider,
  Text,
} from "@chakra-ui/react";
import { IProductFields } from "../@types/generated/contentful";
import { useShoppingCart } from "use-shopping-cart/react";
import { buildURL } from "../utils/shared";

export default function Product({
  image,
  name,
  price,
  description,
  isNew,
  id,
}: IProductFields & { id: string }) {
  const {
    file: { url },
  } = image![0].fields;
  const { addItem } = useShoppingCart();
  const imageURL = buildURL(url);
  return (
    <Box
      bg={useColorModeValue("white", "gray.800")}
      borderWidth="1px"
      rounded="lg"
      shadow="lg"
      position="relative"
      h="100%"
    >
      {isNew && (
        <Badge
          rounded="full"
          px="2"
          fontSize="0.8em"
          colorScheme="red"
          position="absolute"
          top={2}
          right={2}
        >
          New
        </Badge>
      )}
      <Flex mt={6} justifyContent="center" alignContent="center">
        <Image src={imageURL} width={120} height={120} />
      </Flex>
      <Box p="6">
        <Divider mb="2" />
        <Text>{description}</Text>
        <Flex mt="1" justifyContent="space-between" alignContent="center">
          <Box
            fontSize="2xl"
            fontWeight="semibold"
            as="h4"
            lineHeight="tight"
            isTruncated
          >
            {name}
          </Box>
        </Flex>

        <Flex justifyContent="space-between" alignContent="center" mt="auto">
          <Box fontSize="2xl" color={useColorModeValue("gray.800", "white")}>
            <Box as="span" color={"gray.600"} fontSize="lg">
              Лв.
            </Box>
            {price!.toFixed(2)}
          </Box>
          <Tooltip
            label="Add to cart"
            bg="white"
            placement={"top"}
            color={"gray.800"}
            fontSize={"1.2em"}
          >
            <chakra.a
              href={"#"}
              display={"flex"}
              onClick={() =>
                addItem({
                  id,
                  price: Number(price),
                  currency: "BGN",
                  name: name!,
                  image: imageURL,
                })
              }
            >
              <Icon as={FiShoppingCart} h={7} w={7} alignSelf={"center"} />
            </chakra.a>
          </Tooltip>
        </Flex>
      </Box>
    </Box>
  );
}
