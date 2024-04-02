import { FC } from 'react'
import logo from '../../assets/logo.png'

import style from './Logo.module.css'
const Logo: FC = () => {
  return (
    <div className={style.wrapper}>
      <img className={style.logo} src={logo} alt="logo panel" />
      <span className={style.logo__text}>Admin Panel</span>
    </div>
  )
}

export default Logo
