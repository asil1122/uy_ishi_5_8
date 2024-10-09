import React from 'react'
import style from "./product.module.scss"
import data2 from '../../data/data2'
import icon from "../../assets/kor.svg"
import { Button } from '../ui/button/button'
import { Link } from 'react-router-dom'

export const Product = () => {
    return (
        <ul className={style.ul}>
            {data2.map((item) => (
                <li key={item.id} className={style.li}>
                    <div className={style.img_block}>
                        <img src={item.img} alt="img" />
                    </div>
                    <p className={style.type}>{item.text}</p>
                    <h2 className={style.title}>{item.title}</h2>
                    <div className={style.star_block}>
                        <img src={item.star} alt="star" />
                    </div>
                    <del className={style.old_price}>{item.oldP}</del>
                    <p className={style.new_price}>{item.newP}</p>
                    <div className={style.btn_block}>
                        <Link className={style.btn_block} to={"/product-detail"}>
                            <Button variant={'secondry'} size={'lg'} type={'submit'}>Купить в 1 клик</Button>
                            <img src={icon} alt="icon" />
                        </Link>
                    </div>
                </li>
            ))}
        </ul>
    )
}
