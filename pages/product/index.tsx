import { useRouter } from 'next/router';

function Product() {
  const router = useRouter();
  const goBack = () => {
    router.back();
  };
  goBack();
}

export default Product;
