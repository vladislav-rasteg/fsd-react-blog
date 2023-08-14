import React from 'react'
import './PageLoader.scss'

interface PageLoaderProps {
  className?: string
}

export const PageLoader = ({ className }: PageLoaderProps) => {
  return (
      <div className='PageLoader'>
          <div className='.lds-ellipsis'>
              <div></div>
              <div></div>
          </div>
      </div>
  )
}
