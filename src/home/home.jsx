import React from 'react'
import style from "./home.module.scss"
import { HeroCard } from '../components/hero-card'
import img from "../assets/hero.png"
import { Product } from '../components/product'

export const Home = () => {
  return (
    <main>
        <section className={style.hero}>
            <div className='container'>
                <div className={style.block}>
                    <HeroCard/>
                    <div className={style.right_block}>
                        <img src={img} alt="img" />
                    </div>
                </div> 
            </div>
        </section>
        <section className={style.product}>
            <div className='container'>
                <div className={style.product_block}>
                    <div className={style.title_block}>
                        <h2 className={style.product_title}>Хиты продаж</h2>
                        <p className={style.text}>Все товары</p>
                    </div>
                    <Product/>
                </div>
            </div>
        </section>
        <section className={style.product}>
            <div className='container'>
                <div className={style.product_block}>
                    <div className={style.title_block}>
                        <h2 className={style.product_title}>Новинки</h2>
                        <p className={style.text}>Все товары</p>
                    </div>
                    <Product/>
                </div>
            </div>
        </section>
    </main>
    )
}
