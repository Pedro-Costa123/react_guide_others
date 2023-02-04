import { useDispatch } from "react-redux";

import classes from "./CartItem.module.css";
import { cartActions } from "../../store";

const CartItem = (props) => {
  const { title, quantity, total, price } = props.item;

  const dispatch = useDispatch();

  const plus = () => {
    dispatch(cartActions.add({ title }));
  };

  const minus = () => {
    dispatch(cartActions.remove({ title }));
  };

  return (
    <>
      {quantity !== 0 && (
        <li className={classes.item}>
          <header>
            <h3>{title}</h3>
            <div className={classes.price}>
              ${total.toFixed(2)}{" "}
              <span className={classes.itemprice}>
                (${price.toFixed(2)}/item)
              </span>
            </div>
          </header>
          <div className={classes.details}>
            <div className={classes.quantity}>
              x <span>{quantity}</span>
            </div>
            <div className={classes.actions}>
              <button onClick={minus}>-</button>
              <button onClick={plus}>+</button>
            </div>
          </div>
        </li>
      )}
    </>
  );
};

export default CartItem;
