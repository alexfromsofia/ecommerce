import { NextPage } from "next";
import Link from "next/link";
import Layout from "../components/Layout";

const IndexPage: NextPage = () => {
  return (
    <Layout title="Bulgaria Bullion">
      <ul className="card-list">
        <li>
          <Link href="/use-shopping-cart">
            <a className="card cart-style-background">
              <h2 className="bottom">Use Shopping Cart</h2>
              <img src="/use-shopping-cart.png" />
            </a>
          </Link>
        </li>
      </ul>
    </Layout>
  );
};

export default IndexPage;
