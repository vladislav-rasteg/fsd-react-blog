import React, { useState } from 'react'
import cls from './Sidebar.module.scss'
import { classNames } from 'shared/lib/classNames/classNames'
import { Button } from 'shared/ui/Button'
import SidebarTrigger from '../../../assets/icons/sidebar_trigger.svg'

interface SidebarProps {
  className?: string
}

export const Sidebar = ({ className }: SidebarProps) => {
  const [collapsed, setCollapsed] = useState(false)

  const onToggle = () => {
    setCollapsed(prev => !prev)
  }

  return (
      <div className={classNames(cls.Sidebar, { [cls.collapsed]: collapsed }, [className as string])}>
          <Button onClick={onToggle} iconOnly><SidebarTrigger /></Button>
      </div>
  )
}
