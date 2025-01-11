import { ICart } from '../../../models/IUserCart.ts';
import { FC } from 'react';

type props = {
  cart: ICart;
};

export const CartItem: FC<props> = ({ cart }) => {
  const { products, total, discountedTotal } = cart;
  return (
    <div>
      <ul className="flex flex-col gap-1 text-3xl font-bold mb-4">
        PRODUCTS
        {products.map((product) => (
          <li key={product.id}>
            <p className="text-2xl">{product.title}</p>
            <p className="text-xl text-green-600">Quantity: {product.quantity}</p>
            <p className="text-xl text-green-600">TotalPrice: {product.discountedTotal}</p>
          </li>
        ))}
      </ul>
      <div className="text-2xl text-amber-400 font-bold">
        <p>Total Price: {total}</p>
        <p>Discounted Total: {discountedTotal}</p>
      </div>
    </div>
  );
};
