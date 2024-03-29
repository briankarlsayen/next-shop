import Related from '../../../components/Related';
import { Product } from '../../../types';
import ProductComponent from '../../../components/ProductComponent';

type ProductProps = {
  product: Product;
  products: Product[];
};

const product = ({ product, products }: ProductProps) => {
  return (
    <div className='w-full x-spacing py-20'>
      <ProductComponent product={product} products={products} />
      <Related products={products} />
      <div className='border-b'></div>
    </div>
  );
};

export const getStaticProps = async (context: any) => {
  const res1 = await fetch(
    `https://fakestoreapi.com/products/${context.params.id}`
  );
  const product = await res1.json();

  const res2 = await fetch(
    `https://fakestoreapi.com/products/category/${product.category}`
  );
  const products = await res2.json();

  return {
    props: {
      product,
      products,
    },
  };
};

export const getStaticPaths = async () => {
  const res = await fetch(`https://fakestoreapi.com/products/`);
  const products = await res.json();

  const ids = products.map((product: Product) => product.id);
  const paths = ids.map((id: number) => ({ params: { id: id.toString() } }));
  return {
    paths,
    fallback: false,
  };
};

export default product;
