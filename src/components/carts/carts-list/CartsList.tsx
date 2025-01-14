import { useNavigate, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getCartsByUserId } from '../../../api/api.service.ts';
import { ICart } from '../../../models/IUserCart.ts';
import { CartItem } from '../cart-item/CartItem.tsx';

export const CartsList = () => {
  const { id } = useParams();
  const userId = Number(id);

  const [carts, setCarts] = useState<ICart[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const navigate = useNavigate();

  useEffect(() => {
    if (userId) {
      getCartsByUserId(userId)
        .then((allCarts) => {
          setCarts(allCarts);
        })
        .catch((error) => {
          console.log(error);
          throw new Error('Try again!');
        })
        .finally(() => setIsLoading(false));
    }
  }, [userId]);
  return (
    <>
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <>
          <button onClick={() => navigate(-1)}>🔙 back</button>
          <div className="my-4 text-center">
            {!carts.length && <div className="text-3xl font-bold'">User hasn't carts yet</div>}
            <ul>
              {carts.map((cart) => (
                <li key={cart.id}>
                  <CartItem cart={cart} />
                </li>
              ))}
            </ul>
          </div>
        </>
      )}
    </>
  );
};
