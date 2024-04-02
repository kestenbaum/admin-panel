import { FC } from 'react'
import { IForm } from '../../interface'
import styles from './Card.module.css'
import Button from '../UI/Button/Button'

export const Card: FC<IForm> = () => {
  return (
    <form className={styles.card}>
      <input placeholder={'Title'} type={'text'} />
      <input placeholder={'Link'} type={'text'} />
      <input placeholder={'Category'} type={'text'} />
      <input name={'file'} type={'file'} />
      <Button type={'submit'}>Save</Button>
    </form>
  )
}
