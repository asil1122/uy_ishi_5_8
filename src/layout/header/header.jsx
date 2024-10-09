import React from 'react'
import style from "./header.module.scss"
import logo from "../../assets/logo.svg"
import icon from "../../assets/koz.svg"
import { Button } from '../../components/ui/button'
import { HeaderBottom } from '../../components/header-bottom'
import { Link } from 'react-router-dom'

export const Header = () => {
  return (
    <>
    <div className={style.header}>
        <div className='container'>
            <div className={style.block}>
                <div className={style.left}>
                    <Link to={"/"}>
                        <img src={logo} alt="logo" />
                    </Link>
                </div>
                <div className={style.right}>
                    <ul className={style.ul}>
                        <li className={style.li}>
                            <p className={style.text}>+7 (812) 660-50-54</p>
                        </li>    
                        <li className={style.li}>
                            <p className={style.text}>+7 (958) 111-95-03</p>
                        </li>      
                        <li className={style.li}>
                            <p className={style.text}>Пн-вс: с 10:00 до 21:00</p>
                        </li>         
                    </ul>
                    <div className={style.right_block}>
                        <ul className={style.right_ul}>
                            <li className={style.right_li}>
                                <img src={icon} alt="icon" />
                            </li>
                            <li className={style.right_li}>
                                <img src={icon} alt="icon" />
                            </li>
                            <li className={style.right_li}>
                                <img src={icon} alt="icon" />
                            </li>
                            <li className={style.right_li}>
                                <img src={icon} alt="icon" />
                            </li>
                        </ul>
                        <Button variant={'primary'} type={'submit'} size={'md'}>Войти</Button>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <HeaderBottom/>
    </>
  )
}
