import React from 'react'
import cls from './LangSwitcher.module.scss'
import { classNames } from 'shared/lib/classNames/classNames'
import { useTranslation } from 'react-i18next'
import { Button, ThemeButton } from 'shared/ui/Button'

interface LangSwitcherProps {
  className?: string
}

export const LangSwitcher = ({ className }: LangSwitcherProps) => {
  const { t, i18n } = useTranslation()

  const toggle = () => {
    i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru')
  }

  return (
      <Button
      theme={ThemeButton.GHOST}
      onClick={toggle}
      className={classNames(cls.LangSwitcher, {}, [className as string])}
      >
          {t('Перевод')}
      </Button>
  )
}
