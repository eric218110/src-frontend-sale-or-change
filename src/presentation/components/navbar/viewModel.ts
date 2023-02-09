import { paths } from '@presentation/routes/path'
import { useState } from 'react'
import { FaListUl } from 'react-icons/fa'
import { HiOutlineMailOpen } from 'react-icons/hi'
import { MdLibraryAdd } from 'react-icons/md'
import * as T from './types'

export const useNavBarViewModel = () => {
  const [activeItem, setActiveItem] = useState<T.ItemType>(undefined)

  const itemIsActive = (item: T.ItemType) => item === activeItem

  const onPressItem = (item: T.ItemType) => {
    setActiveItem(item)
  }

  return {
    items: {
      onPress: onPressItem,
      isActive: itemIsActive,
      values: [
        {
          key: 'negotiation',
          label: 'Negociação',
          Icon: MdLibraryAdd,
          to: paths.negotiations
        },
        {
          key: 'myNegotiation',
          label: 'Minhas negociações',
          Icon: FaListUl,
          to: paths.home
        },
        {
          key: 'invites',
          label: 'Meus convites',
          Icon: HiOutlineMailOpen,
          to: paths.home
        }
      ]
    }
  } as const
}
