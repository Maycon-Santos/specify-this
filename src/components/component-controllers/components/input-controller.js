import React from 'react'

export function InputController ({ value, setValue }) {

  return (
    <input
      type="text"
      onChange={e => setValue(e.target.value)}
      value={value}
    />
  )
}
