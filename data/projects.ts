import { TECHNOLOGIES } from './tech-stack'

export const projects = [
  {
    id: 1,
    title: 'Sewan France - Telephony',
    description:
      'With Sewan`s Sophia, you take control and manage all your services: communication and collaboration tools.',
    img: '/images/projects/sewan.png',
    technologiesUsed: [
      TECHNOLOGIES.react,
      TECHNOLOGIES.styled,
      TECHNOLOGIES.node,
      TECHNOLOGIES.typescript,
      TECHNOLOGIES.graph,
      TECHNOLOGIES.python,
    ],
    link: 'https://www.sewan.fr/fr-fr/',
  },
  {
    id: 2,
    title: 'DreamFlare AI',
    description:
      'The Premiere Experience for The Best GenAI content and creators. Distinctive feature: interactive videos (Spins).',
    img: '/images/projects/dreamflare.png',
    technologiesUsed: [
      TECHNOLOGIES.astro,
      TECHNOLOGIES.solid,
      TECHNOLOGIES.tailwind,
      TECHNOLOGIES.typescript,
      TECHNOLOGIES.nest,
    ],
    link: 'https://www.dreamflare.ai/',
  },
  {
    id: 3,
    title: 'Crezco',
    description:
      'An API powering platform helping SMEs move money. One API, multiple financial products, to help grow the economy.',
    img: '/images/projects/crezco.png',
    technologiesUsed: [
      TECHNOLOGIES.next,
      TECHNOLOGIES.typescript,
      TECHNOLOGIES.tailwind,
      TECHNOLOGIES.framer,
    ],
    link: 'https://crezco.com/',
  },
  // {
  //   id: 3,
  //   title: 'Tropicana - Ladning Page',
  //   description:
  //     'One of my first pet projects ever. A simple yet nice rethinking of the official landing page.',
  //   img: '/images/projects/tropicana.png',
  //   technologiesUsed: [
  //     TECHNOLOGIES.html,
  //     TECHNOLOGIES.css,
  //     TECHNOLOGIES.javascript,
  //   ],
  //   link: 'https://tropicana-ui.netlify.app/',
  // },
  {
    id: 4,
    title: 'EPP - Internal Social Network',
    description:
      'Built internal social network infrastructure and application for the European People`s Party.',
    img: '/images/projects/epp.png',
    technologiesUsed: [
      TECHNOLOGIES.react,
      TECHNOLOGIES.mongo,
      TECHNOLOGIES.styled,
      TECHNOLOGIES.typescript,
      TECHNOLOGIES.docker,
    ],
    link: 'https://www.epp.eu/',
  },
]
