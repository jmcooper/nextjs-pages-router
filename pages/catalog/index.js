// import fs from 'fs';
// import path from 'path';
import { MongoClient } from 'mongodb'

import styles from './Catalog.module.css';
import ProductDetails from '@/components/product-details';

export const revalidate = 30;

export async function getStaticProps() {
  // function getProductsFromFileSystem() {
  //   const filePath = path.join(process.cwd(), 'pages', 'catalog', 'products.json');
  //   const fileContents = fs.readFileSync(filePath, 'utf-8');
  //   return JSON.parse(fileContents); // Parse the JSON content
  // }

  async function getProductsFromDB() {
    const client = await MongoClient.connect(process.env.MONGODB_CONNECTION_STRING);
    const collection = client.db('album-shop-dev').collection("albums");

    const albums = await collection.find({}).toArray();

    client.close();

    return albums;
  }

  const products = await getProductsFromDB();
  return { props: { products } };
}

export default function Catalog({ products }) {
  return (
    <>
      <div>
        <ul className={styles.products}>
          {products.map((product) => (
            <li className={styles.product} key={product._id}>
              <ProductDetails product={product} />
            </li>
          ))}
        </ul>
      </div>
    </>
  )
}