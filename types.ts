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

export interface ServerToClientEvents {
  noArg: () => void;
  basicEmit: (a: number, b: string, c: Buffer) => void;
  withAck: (d: string, callback: (e: number) => void) => void;
  "update-slot": (prop: {slots:Slot}) => void
}

export interface ClientToServerEvents {
  hello: () => void;
}

export interface InterServerEvents {
  ping: () => void;
}

export interface SocketData {
  name: string;
  age: number;
}

export interface Slot {
  bookingInSlot: number;
  bookingReservedSlot: number;
  maxCapacity: number;
  onlineBookingOccupied: number;
  slotsAvailable: number;
  totalBooking: number;
  totalOccupied: number;
  walkInSlot: number;
}