import React from "react";
import styles from "./Button.module.css";
import { clsx } from "clsx";
import Link from "next/link";

export const Button = ({
  href,
  variant = "primary", // primary, secondary, o outline
  disabled,
  handleClick,
  children,
  customClasses,
  ...props
}) => {
  const classes = clsx(
    styles.button, // Clase base obligatoria
    {
      // Variantes dinámicas según el prop 'variant'
      [styles.primary]: variant === "primary",
      [styles.secondary]: variant === "secondary",
      [styles.outline]: variant === "outline",
      
      // Estado deshabilitado
      [styles.disabled]: disabled,
    },
    customClasses
  );

  if (href) {
    return (
      <Link href={disabled ? '#' : href} onClick={handleClick} className={classes} {...props}>
        {children}
      </Link>
    );
  }

  return (
    <button disabled={disabled} onClick={handleClick} className={classes} {...props}>
      {children}
    </button>
  );
};
