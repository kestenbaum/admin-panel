import { FC, useState } from 'react'

import { useQuery } from 'react-query'

import styles from './List.module.css'
import { getWorks } from '../../api/request/works'
import Form from '../Form/Form'
import Popup from '../UI/Popup/Popup'
import ListItem from '../ListItem/ListItem'
import Loader from '../UI/Loader/Loader'

const List: FC = () => {
  const [modal, setModal] = useState(false)
  const toggle = () => setModal(!modal)
  const { data, isLoading } = useQuery({
    queryKey: ['items'],
    queryFn: () => getWorks().then(responce => responce.data),
  })

  return (
    <div className={styles.wrapper}>
      <Popup
        showModal={modal}
        setShowModal={toggle}
        children={<Form setShowModal={setModal} showModal={modal} />}
      />
      <div className={styles.create__form} onClick={() => setModal(!modal)}>
        Create Element
      </div>
      {!isLoading ? (
        data?.data.map(item => (
          <ListItem
            _id={item._id}
            key={item._id}
            title={item.title}
            img={item.img}
            link={item.link}
            category={item.category}
          />
        ))
      ) : (
        <Loader />
      )}
    </div>
  )
}

export default List
