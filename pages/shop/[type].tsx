import { Product } from "../../types";
import ProductCard from "../../components/ProductCard";
import type { NextPage } from "next";
import ShopType from "../../components/ShopType";
import { apiStoreUrl } from "../../utils/db";

const category: NextPage<{ products: Product[]; categories: any }> = ({
  products,
  categories,
}) => {
  return (
    <div className="x-spacing">
      <div className="max-w-[80rem] mx-auto py-20">
        <ShopType products={products} categories={categories} />
        <div className="w-full flex flex-row gap-4">
          <ul className="flex w-full flex-wrap gap-4">
            {products.map((product) => {
              return (
                <ProductCard
                  key={product.id}
                  id={product.id}
                  title={product.title}
                  image={product.image}
                  price={product.price}
                />
              );
            })}
          </ul>
        </div>
      </div>
      <div className="border-t-2"></div>
    </div>
  );
};

export const getStaticProps = async (context: any) => {
  try {
    let res;
    if (context.params.type === "all") {
      res = await fetch(`${apiStoreUrl}/products/`);
    } else {
      res = await fetch(
        `${apiStoreUrl}/products/category/${context.params.type}`
      );
    }
    const products = await res.json();

    const getCategories = await fetch(`${apiStoreUrl}/products/categories`);
    const categories = await getCategories.json();
    categories?.data?.unshift("all");

    return {
      props: {
        products: products?.data,
        categories: categories?.data,
      },
    };
  } catch (error) {
    return { notFound: true };
  }
};

export const getStaticPaths = async () => {
  try {
    const res = await fetch(`${apiStoreUrl}/products/`);
    const products = await res.json();

    const categories = products?.data?.map(
      (product: Product) => product.category
    );
    categories.push("all");
    const paths = categories.map((category: string) => ({
      params: { type: category.toString() },
    }));
    return {
      paths,
      fallback: false,
    };
  } catch (error) {
    return { fallback: "blocking", paths: [] };
  }
};

export default category;
