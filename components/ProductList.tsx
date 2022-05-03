import { GridItem, SimpleGrid } from "@chakra-ui/react";
import { IProductField } from "../@types/shared";
import Product from "./Product";

const ProductList: React.FC<{ products: IProductField[] }> = ({ products }) => {
  return (
    <SimpleGrid minChildWidth="300px" spacing="40px">
      {products.map(({ id, ...rest }) => {
        return (
          <GridItem key={id} w="100%">
            <Product id={id} {...rest} />
          </GridItem>
        );
      })}
    </SimpleGrid>
  );
};

export default ProductList;
