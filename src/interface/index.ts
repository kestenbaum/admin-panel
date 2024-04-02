import React, {
  AriaAttributes,
  ButtonHTMLAttributes,
  DetailedHTMLProps,
  ReactNode,
} from 'react'

export interface ProviderProps {
  children: React.ReactNode
}

export interface ButtonProps
  extends DetailedHTMLProps<
      ButtonHTMLAttributes<HTMLButtonElement>,
      HTMLButtonElement
    >,
    AriaAttributes {
  children: string
  onClick?: () => void
}

export interface PopupProps {
  children: ReactNode
  showModal: boolean
  setShowModal: any
}

export interface IForm {
  _id?: string
  title: string
  link: string
  img?: string | null | ArrayBuffer
  category: string
}

export interface FormProps {
  showModal?: boolean
  setShowModal: any
}

export interface GetDataProps {
  status: number
  data: IForm[]
}
