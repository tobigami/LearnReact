import style from "./button.module.css";
import clsx from "clsx";

function Button({ primary, secondary }) {
  const classes = clsx(style.btn, {
    [style.primary]: primary,
    [style.secondary]: secondary,
  });
  return <button className={classes}>Click Me!</button>;
}

export default Button;
