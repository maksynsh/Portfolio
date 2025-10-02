import { LINKS } from './contacts'
import { NETWORKS } from './networks'

export const TESTIMONIALS = [
  {
    author: {
      name: 'Jesus Mota',
      designation: 'Full Stack Developer',
      url: 'https://www.linkedin.com/in/jesusmota/',
      avatarImageUrl: '/images/authors/jesusmota.jpg',
    },
    source: NETWORKS.LINKEDIN,
    url: LINKS.LINKEDIN.url,
    quote: `I had the pleasure of working with Maksym, and I can confidently say he’s one of the most high-quality developers I’ve collaborated with.\nHis sense of responsibility and commitment to excellence was evident in every task he took on.`,
  },
  {
    author: {
      name: 'Volodymyr Surnyk',
      designation: 'DevOps Team Lead',
      url: 'https://www.linkedin.com/in/volodymyr-surnyk/',
      avatarImageUrl: '/images/authors/syrnuk.jpg',
    },
    source: NETWORKS.LINKEDIN,
    url: LINKS.LINKEDIN.url,
    quote: `...Maksym consistently demonstrated strong technical skills, ownership, and a deep understanding of both frontend and backend development.\nHe approached complex tasks with confidence, communicated clearly across the team, and was always proactive in finding efficient solutions...`,
  },
]

export const PARTNERS = [
  {
    img: '/images/logos/cisco.webp',
  },
  {
    img: '/images/logos/uz.png',
  },
  {
    img: '/images/logos/dreamflare.svg',
  },
  {
    img: '/images/logos/epp.png',
  },
  {
    img: '/images/logos/sewan.png',
  },
]
