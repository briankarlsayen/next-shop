import '../styles/globals.css';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import type { AppProps } from 'next/app';
import Navbar from '../components/Navbar';
import { Footer } from '../components/Footer';
import Breadcrumb from '../components/Breadcrumb';
import BreadcrumbItem from '../components/BreadcrumbItem';
import { BreadCrumbProps } from '../types';
import Loading from '../components/Loading';
import { cartStore } from '../store/CartStore';

function MyApp({ Component, pageProps }: AppProps) {
  const { updateCart, updateCartTotal } = cartStore((state) => state);
  const router = useRouter();
  const [breadcrumbs, setBreadcrumbs] = useState<BreadCrumbProps[]>([]);
  const [loading, setLoading] = useState(false);

  const loadingHandler = () => {
    const handleStart = (url: any) => {
      url !== router.pathname ? setLoading(true) : setLoading(false);
    };
    const handleComplete = (url: any) => setLoading(false);

    router.events.on('routeChangeStart', handleStart);
    router.events.on('routeChangeComplete', handleComplete);
    router.events.on('routeChangeError', handleComplete);
  };

  useEffect(() => {
    let pathArray = router.asPath.replace(/\?.*$/, '').split('/');
    pathArray.shift();

    pathArray = pathArray.filter((path) => path !== '');

    if (router.pathname === '/shop/[type]') {
      pathArray = ['shop'];
    }

    const breadcrumbsarr = pathArray.map((path, index) => {
      const href = '/' + pathArray.slice(0, index + 1).join('/');
      return {
        href,
        label: path.charAt(0).toUpperCase() + path.slice(1),
        isCurrent: index === pathArray.length - 1,
      };
    });
    setBreadcrumbs(breadcrumbsarr);

    loadingHandler();
  }, [router.asPath]);

  const initializeData = () => {
    const cartItems = localStorage.getItem('cart');
    if (cartItems) {
      let parsedCart = JSON.parse(cartItems);
      updateCart(parsedCart);
      inititalCartTotal(parsedCart);
    }
  };

  const inititalCartTotal = (parsedCart: any) => {
    const cartSubTotalArr = [];
    for (let value of parsedCart) {
      cartSubTotalArr.push({ id: value.id, subTotal: value.subTotal });
    }
    updateCartTotal(cartSubTotalArr);
  };

  useEffect(() => {
    initializeData();
  }, []);

  return (
    <div className={loading ? 'h-screen' : ''}>
      <Loading loading={loading} />
      <Navbar />
      <Breadcrumb>
        {router.pathname !== '/' && (
          <BreadcrumbItem isCurrent={router.pathname === '/'} href='/'>
            Home
          </BreadcrumbItem>
        )}

        {breadcrumbs &&
          breadcrumbs.map((breadcrumb) => (
            <BreadcrumbItem
              key={breadcrumb.href}
              href={breadcrumb.href}
              isCurrent={breadcrumb.isCurrent}
            >
              {breadcrumb.label}
            </BreadcrumbItem>
          ))}
      </Breadcrumb>
      <Component {...pageProps} />
      <Footer />
    </div>
  );
}

export default MyApp;
