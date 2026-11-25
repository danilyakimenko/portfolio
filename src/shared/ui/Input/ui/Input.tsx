import React from 'react'
import { cn } from 'cn'

interface Props {
  className?: string
  id: string
  type?: React.ComponentProps<'input'>['type']
  isTextArea?: boolean
}

export const Input = ({ className, id, type = 'text', isTextArea }: Props) => {
  return (
    <div className={cn('grid gap-2', className)}>
      <label className="text-sm text-light font-medium" htmlFor={id}>{id}</label>

      {isTextArea ? (
        <textarea className="input" required rows={5} maxLength={10000} id={id}  />
      ) : (
        <input className="input" required type={type} id={id} />
      )}
    </div>
  )
}