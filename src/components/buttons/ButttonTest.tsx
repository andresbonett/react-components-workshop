import React from 'react'

interface ButtonTestProps {
  onClick: () => void
  size?: 'sm' | 'md' | 'lg'
  children: React.ReactNode
}

export default function ButtonTest ({
  onClick,
  children,
  size
}: ButtonTestProps) {
  return (
            <button className={`btn btn-primary ${size}`} onClick={onClick}>
              {children}
            </button>
  )
}
