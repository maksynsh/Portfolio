import {
  IoCodeWorking,
  IoHomeOutline,
  IoPaperPlane,
  IoPerson,
} from 'react-icons/io5'

import { NavItem } from '@/components/layout'

export const navItems: NavItem[] = [
  { title: 'About', value: '#about', url: '#about', icon: <IoHomeOutline /> },
  {
    title: 'Projects',
    value: '#projects',
    url: '#projects',
    icon: <IoPaperPlane />,
  },
  {
    title: 'Progress',
    value: '#progress',
    url: '#progress',
    icon: <IoCodeWorking />,
  },
  { title: 'Contact', value: '#contact', url: '#contact', icon: <IoPerson /> },
]
