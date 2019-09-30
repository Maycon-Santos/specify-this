import React from 'react'

export function SelectController ({ originalValue, selectedOption, setValue }) {
  selectedOption = Array.isArray(selectedOption)
    ? selectedOption[0]
    : selectedOption

  const value = [...originalValue[0]]

  return (
    <select
      value={selectedOption}
      onChange={e => setValue(e.target.value)}
    >
      {value.map((option, i) => {
        return (
          <option
            key={option}
            value={i}
          >
            {option}
          </option>
        )
      })}
    </select>
  )
}
