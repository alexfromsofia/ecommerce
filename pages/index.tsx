import { Container, Grid, GridItem, SimpleGrid } from "@chakra-ui/react";
import { EntryCollection } from "contentful";
import { NextPage } from "next";

import { IProduct, IProductFields } from "../@types/generated/contentful";

import Product from "../components/Product";
import contentful from "../lib/contentful";

export async function getStaticProps() {
  const products = await contentful.getEntries<IProduct>({
    content_type: "product",
  });

  return {
    props: products,
  };
}

const IndexPage: NextPage<EntryCollection<IProduct>> = ({ items }) => {
  return (
    <Container maxW="container.xl">
      <SimpleGrid minChildWidth="300px" spacing="40px">
        {items.map(({ fields, sys: { id } }) => {
          return (
            <GridItem key={id} w="100%">
              <Product id={id} {...(fields as IProductFields)} />
            </GridItem>
          );
        })}
      </SimpleGrid>
    </Container>
  );
};

export default IndexPage;
