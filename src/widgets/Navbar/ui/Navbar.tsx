import React from "react";
import cls from "./Navbar.module.scss"
import { classNames } from "shared/lib/classNames/classNames";
import AppLink, { AppLinkTheme } from "shared/ui/AppLink/AppLink";
import { ThemeSwitcher } from "shared/ui/ThemeSwitcher";
import { LangSwitcher } from "shared/ui/LangSwitcher";


interface NavbarProps {
}

const Navbar = ({}:NavbarProps) => {
  
  return(
    <div className={classNames(cls.Navbar)}>
        
        <div className={cls.links}>
            <LangSwitcher />
            <AppLink theme={AppLinkTheme.PRIMARY} to={'/'} className={cls.link}>Главная страница</AppLink>
            <AppLink theme={AppLinkTheme.PRIMARY} to={'/about'} className={cls.link}>О сайте</AppLink>
        </div>
        <ThemeSwitcher />

    </div>
 )
}

export default Navbar;
