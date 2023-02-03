import { useDispatch } from "react-redux";

import classes from "./CartButton.module.css";
import { toggleAction } from "../store";

const CartButton = (props) => {
  const dispatch = useDispatch();

  const toggleCart = () => {
    dispatch(toggleAction.toggle());
  };

  return (
    <button className={classes.button} onClick={toggleCart}>
      <span>My Cart</span>
      <span className={classes.badge}>1</span>
    </button>
  );
};

export default CartButton;
