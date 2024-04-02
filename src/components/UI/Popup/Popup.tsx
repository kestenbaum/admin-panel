import { FC } from 'react'
import { PopupProps } from '../../../interface'

import styles from './Popup.module.css'

const Popup: FC<PopupProps> = ({ children, showModal, setShowModal }) => {
  return (
    <section
      className={showModal ? styles.modal__active : styles.modal}
      onClick={() => setShowModal(false)}
    >
      <div
        className={showModal ? styles.wrapper__active : styles.wrapper}
        onClick={e => e.stopPropagation()}
      >
        {children}
      </div>
    </section>
  )
}

export default Popup
