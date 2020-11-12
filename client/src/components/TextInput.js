import React from 'react'

// eslint-disable-next-line import/no-anonymous-default-export
export default (props) =>
  props.fieldType === 'textfield' ? (
    <textarea
      type={props.type}
      name={props.name}
      value={props.value}
      onChange={(e) => props.onChange(e)}
      placeholder={props.placeholder}
    />
  ) : (
    <input
      type={props.type}
      name={props.name}
      value={props.value}
      onChange={props.onChange}
      placeholder={props.placeholder}
      autoComplete="false"
    />
  )
