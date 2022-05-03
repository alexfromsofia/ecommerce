import { Container } from "@chakra-ui/react";
import { NextPage } from "next";
import { IProduct } from "../@types/generated/contentful";
import { IProductField } from "../@types/shared";
import ProductList from "../components/ProductList";
import contentful from "../lib/contentful";

export async function getStaticProps() {
  const products = await contentful.getEntries<IProduct>({
    content_type: "product",
  });

  return {
    props: {
      products: products.items.map(({ fields, sys: { id } }) => {
        return {
          ...fields,
          id,
        };
      }),
    },
  };
}

const Products: NextPage<{ products: IProductField[] }> = ({ products }) => {
  return (
    <Container maxW="6xl">
      <ProductList products={products} />
    </Container>
  );
};

export default Products;
