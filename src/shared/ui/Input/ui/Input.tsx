import React from 'react'

interface Props {
  className?: string
  id: string
  type?: React.ComponentProps<'input'>['type']
  isTextArea?: boolean
}

export const Input = ({ className, id, type = 'text', isTextArea }: Props) => {
  return (
    <div className={className}>
      <label htmlFor={id}>{id}</label>

      {isTextArea ? (
        <textarea id={id} />
      ) : (
        <input type={type} id={id} />
      )}
    </div>
  )
}