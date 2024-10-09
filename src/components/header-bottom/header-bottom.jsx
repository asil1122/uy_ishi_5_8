import React from 'react'
import style from "./header-bottom.module.scss"

export const HeaderBottom = () => {
  return (
    <div className={style.header_bottom}>
        <div className='container'>
            <div className={style.block}>
                <button className={style.catalogy}>Каталог товаров</button>
                <ul className={style.ul}>
                    <li className={style.li}>
                        <p className={style.text}>О компании</p>
                    </li>
                    <li className={style.li}>
                        <p className={style.text}>Акции</p>
                    </li>
                    <li className={style.li}>
                        <p className={style.text}>Рассрочка 0|0|18</p>
                    </li>
                    <li className={style.li}>
                        <p className={style.text}>Сервис и гарантия</p>
                    </li>
                    <li className={style.li}>
                        <p className={style.text}>Опт/дропшиппинг</p>
                    </li>
                    <li className={style.li}>
                        <p className={style.text}>Контакты</p>
                    </li>
                </ul>
            </div>
        </div>
    </div>
  )
}
