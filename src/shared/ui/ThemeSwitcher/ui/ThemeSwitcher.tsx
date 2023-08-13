import React from 'react'
import cls from './ThemeSwitcher.module.scss'
import { classNames } from 'shared/lib/classNames/classNames'
import { Theme, useTheme } from 'app/providers/ThemeProvider'
import ThemeLight from 'shared/assets/icons/theme_light.svg'
import ThemeDark from 'shared/assets/icons/theme_dark.svg'

interface ThemeSwitcherProps {
  className?: string
}

const ThemeSwitcher = ({ className }: ThemeSwitcherProps) => {
  const { theme, toggleTheme } = useTheme()

  return (
      <button className={classNames(cls.ThemeSwitcher, {}, [className, cls[theme]])} onClick={toggleTheme}>
          <ThemeDark fill={theme === Theme.LIGHT ? '#000' : '#FFF'} />
          <div className={classNames(cls.sliderWrapper, {}, [cls[theme]])}>
              <div className={classNames(cls.sliderDot, {}, [cls[theme]])}></div>
          </div>
          <ThemeLight fill={theme === Theme.LIGHT ? '#000' : '#FFF'} />
      </button>
  )
}

export default ThemeSwitcher
