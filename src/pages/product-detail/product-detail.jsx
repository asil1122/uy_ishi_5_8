import React from 'react'
import style from "./product-detail.module.scss"
import img from "../../assets/detail.png"
import stars from "../../assets/stars.png"
import { Button } from '../../components/ui/button/button'

export const ProductDetail = () => {
  return (
    <div className={style.detail}>
        <div className='container'>
            <div className={style.block}>
                <div className={style.img_block}>
                    <img src={img} alt="img" />
                </div>
                <div className={style.content}>
                    <h2 className={style.title}>Гироскутер Smart Balance Well 6.5 Хип-Хоп (АКВАЗАЩИТА)</h2>
                    <div className={style.content_block}>
                        <img src={stars} alt="icon" />
                        <div className={style.price_block}>
                          <div className={style.left_block}>
                            <del className={style.oldP}>5 400 ₽</del>
                            <p className={style.newP}>13 990 ₽</p>
                          </div>
                          <div className={style.buttons}>
                              <Button variant={'primary'} type={'submit'} size={'bg'}>В корзину</Button>
                              <Button variant={'secondry'} type={'submit'} size={'lg'}>Купить в 1 клик</Button>
                          </div>
                        </div>
                    </div>
                    <div className={style.service}>
                        <ul className={style.ul}>
                          <li className={style.li}>
                              <h3 className={style.service_title}>Доставка</h3>
                              <p className={style.text}>
                              Доставим по Санкт-Петербургу в течение 2 часов и бесплатно. Стоимость доставки в другие города уточняйте у менеджера.
                              </p>
                          </li>
                          <li className={style.li}>
                              <h3 className={style.service_title}>Оплата</h3>
                              <p className={style.text}>
                              Принимаем к оплате как наличный, так и безналичный расчёт. Возможна оплата электронными кошельками.
                              </p>
                          </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
