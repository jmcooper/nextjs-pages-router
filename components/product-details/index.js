import Image from 'next/image';
import styles from './ProductDetails.module.css';
import { useShoppingCart } from "@/context/ShoppingCartContext";

export default function ProductDetails({ product }) {
  const { addToCart } = useShoppingCart();

  return <div className={styles.product}>
    <Image
      src={(`/images/albums/${product.imageName}`)}
      width={325}
      height={325}
      alt={product.title}
    />
    <div>{product.title}</div>
    <div>{new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', }).format(product.price)}</div>
    <button onClick={() => addToCart(product)}>Buy</button>
  </div>;
}