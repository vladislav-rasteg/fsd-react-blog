import React, { ButtonHTMLAttributes, FC } from "react";
import cls from "./Button.module.scss"
import { classNames } from "shared/lib/classNames/classNames";

export enum ThemeButton{
    GHOST = 'ghost',
    PRIMARY = 'primary',
    SECONDARY = 'secondary',
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string;
    theme?: ThemeButton;
    iconOnly?: boolean;
}

const Button: FC<ButtonProps> = (props) => {
  
    const { className, children, theme = ThemeButton.PRIMARY, iconOnly = false, ...otherProps } = props

  return(
    <button 
        className={classNames(cls.Button, {[cls.iconOnly]: iconOnly}, [className, cls[theme]])}
        {...otherProps}
    >
        {children}
    </button>
 )
}

export default Button;