import React from 'react'

export function BooleanController ({ value, setValue }) {
  return (
    <input
      type="checkbox"
      onChange={e => setValue(e.target.checked)}
      checked={value}
    />
  )
}
