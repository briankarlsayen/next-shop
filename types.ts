export interface Product {
  id:          number;
  title:       string;
  price:       number;
  description: string;
  category:    ProductCategory;
  image:       string;
  rating:      Rating;
}

export enum ProductCategory {
  Electronics = "electronics",
  Jewelery = "jewelery",
  MenSClothing = "men's clothing",
  WomenSClothing = "women's clothing",
}

export interface Rating {
  rate:  number;
  count: number;
}

export interface Products {
  products: Product[];
}

export interface CategoriesProps {
  categories: CategoryProps[]
}

export interface CategoryProps {
  category: string;
}