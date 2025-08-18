import Link from "next/link";
import { cartStore } from "../store/CartStore";
import { updateCartApi } from "../utils/db";
import toast from "react-hot-toast";

const ProductCard = (props: any) => {
  const { updateCart, cart } = cartStore((state) => state);

  const handleAddCart = () => {
    if (cart) {
      const duplicateItem = cart.filter((cart: any) => cart.id === props.id);
      if (duplicateItem.length) {
        toast.error("Item Already on Cart");
      } else {
        const withItemCount = { ...props, quantity: 1, subTotal: props.price };
        const updatedCart = [...cart, withItemCount];
        updateCart(updatedCart);
        updateCartApi(updatedCart);
        toast.success("Successfully Added to Cart");
      }
    } else {
      const createCart = [{ ...props, quantity: 1, subTotal: props.price }];
      updateCart(createCart);
      updateCartApi(createCart);
      toast("Successfully Added to Cart");
    }
  };

  return (
    <li
      className="xl:w-[calc(33.33%-1rem)] md:w-[calc(50%-1rem)] w-full items-center flex flex-col bg-white rounded-sm"
      key={props.id}
    >
      <Link href={"/product/[id]"} as={`/product/${props.id}`}>
        <div className="h-[40vh] bg-white w-full hover:border-black rounded-sm cursor-pointer hover:brightness-90 duration-75 ease-in-out">
          <img
            className="h-full object-center p-4 flex-1 mx-auto"
            src={props.image}
          />
        </div>
      </Link>
      <div className="w-full p-4">
        <div className="w-full flex justify-between">
          <p className="truncate">{props.title}</p>
          <p className="font-semibold">${props.price}</p>
        </div>
        <div className="flex group w-fit cursor-pointer ease-in delay-300 duration-1000">
          <p className="font-semibold uppercase" onClick={handleAddCart}>
            Add to Cart
          </p>
          <img
            className="ml-2 object-contain h-6 w-6 group-hover:rotate-12"
            src="/cart.svg"
            alt="cart"
          />
        </div>
      </div>
    </li>
  );
};

export default ProductCard;
