import { NextPage } from "next";
import Link from "next/link";
import Layout from "../components/Layout";
import Product from "../components/Product";
import contentful from "../lib/contentful";

export async function getStaticProps() {
  const products = await contentful.getEntries({ content_type: "product" });
  console.log(products.items);
  return {
    props: products,
  };
}

const IndexPage: NextPage = (props) => {
  console.log(props);
  return <Product />;
};

export default IndexPage;
