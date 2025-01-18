import {
  IoBriefcaseOutline,
  IoChatbubbleEllipsesOutline,
  IoCodeWorking,
  IoHomeOutline,
} from 'react-icons/io5'

import { NavItem } from '@/components/layout'

export const navItems: NavItem[] = [
  { title: 'About', value: '#about', url: '#about', icon: <IoHomeOutline /> },
  {
    title: 'Projects',
    value: '#projects',
    url: '#projects',
    icon: <IoCodeWorking />,
  },
  {
    title: 'Progress',
    value: '#journey',
    url: '#journey',
    icon: <IoBriefcaseOutline />,
  },
  {
    title: 'Contact',
    value: '#contact',
    url: '#contact',
    icon: <IoChatbubbleEllipsesOutline />,
  },
]
