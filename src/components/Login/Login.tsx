import { FC, useState } from 'react'


import styles from './Login.module.css'
import { useForm } from 'react-hook-form'
import { api } from '../../api/instance'

const Login: FC = () => {
  const { register, handleSubmit } = useForm();
  const [data, setData] = useState<any>()

  const postLogin = async () =>
     api("/login", {
       method: "POST",
       data,
       withCredentials: true
     })


  return (
    <form
      className={styles.form}
      onSubmit={handleSubmit((data) => setData(data))}
    >
      <input {...register("login")} type={'text'} placeholder={"login"}/>
      <input {...register("password")} type={'password'} placeholder={"password"} />
      <button
        type={"submit"}
        onClick={() => postLogin()}
      >
        Login
      </button>
    </form>
  )
}

export default Login
