import React from 'react'
import style from "./button.module.scss"

export const Button = ({variant,size,type,children}) => {
  return (
    <button className={`${style[variant]} ${style[size]} btn`} type={type} >{children}</button>
)
}
