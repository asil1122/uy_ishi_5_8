import React from 'react'
import style from "./hero.module.scss"
import data from "../../data/data"

export const HeroCard = () => {    

  return (
    <ul className={style.ul}>
        {data.map((item)=>(
            <li key={item.id} className={style.li}>
                <span className={style.icon}>
                    <img src={item.img} alt="icon" />
                </span>
                <p className={style.title}>{item.title}</p>
            </li>
        ))}
    </ul>
)
}
