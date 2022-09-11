import '../styles/globals.css'
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import type { AppProps } from 'next/app'
import Navbar from '../components/Navbar'
import { Footer } from '../components/Footer'
import Breadcrumb from "../components/Breadcrumb";
import BreadcrumbItem from "../components/BreadcrumbItem";
import { BreadCrumbProps } from '../types'

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const [breadcrumbs, setBreadcrumbs] = useState<BreadCrumbProps[]>([]);

  useEffect(() => {
    // const pathWithoutQuery = router.asPath.split("")[0];
    // let pathArray = pathWithoutQuery.split("/");
    let pathArray = router.asPath.split("/");
    pathArray.shift();

    pathArray = pathArray.filter((path) => path !== "");

    const breadcrumbsarr = pathArray.map((path, index) => {
      const href = "/" + pathArray.slice(0, index + 1).join("/");
      return {
        href,
        label: path.charAt(0).toUpperCase() + path.slice(1),
        isCurrent: index === pathArray.length - 1,
      };
    });
    setBreadcrumbs(breadcrumbsarr);
  }, [router.asPath]);
  return (
    <>
      <Navbar />
      <Breadcrumb>
        {
          router.pathname !== "/" && <BreadcrumbItem isCurrent={router.pathname === "/"} href="/">
          Home
        </BreadcrumbItem>
        }
        
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
    </>
  );
}

export default MyApp
