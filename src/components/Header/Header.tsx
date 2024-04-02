import { FC } from 'react'

import style from './Header.module.css'
import Button from '../UI/Button/Button'
import Logo from '../Logo/Logo'
const Header: FC = () => {
  return (
    <div className={style.header}>
      <div className="container">
        <div className={style.wrapper}>
          <Logo />
          <Button>LogOut</Button>
        </div>
      </div>
    </div>
  )
}

export default Header
