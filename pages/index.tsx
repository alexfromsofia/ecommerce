import { Grid, GridItem } from "@chakra-ui/react";
import { EntryCollection } from "contentful";
import { NextPage } from "next";
import Link from "next/link";
import { IProduct, IProductFields } from "../@types/generated/contentful";
import Layout from "../components/Layout";
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
    <Grid templateColumns="repeat(3, 1fr)" gap={6}>
      {items.map(({ fields, sys: { id } }) => {
        return (
          <GridItem key={id} w="100%">
            <Product id={id} {...(fields as IProductFields)} />
          </GridItem>
        );
      })}
    </Grid>
  );
};

export default IndexPage;
