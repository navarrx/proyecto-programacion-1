import React from 'react'

export const Alert = (props) => {
  return (
    <div>
        <div className={props.alert} role="alert">
        {props.text}
        </div>
        
    </div>
  )
}
