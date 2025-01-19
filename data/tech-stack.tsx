import { ReactNode } from 'react'

export interface Technology {
  title: string
  img?: string
  imgTitle?: string
  icon?: ReactNode
}

type TechnologyKey =
  | 'react'
  | 'reactNative'
  | 'tailwind'
  | 'styled'
  | 'next'
  | 'solid'
  | 'astro'
  | 'framer'
  | 'three'
  | 'gsap'
  | 'javascript'
  | 'typescript'
  | 'html'
  | 'css'
  | 'scss'
  | 'graph'
  | 'node'
  | 'nest'
  | 'docker'
  | 'mongo'
  | 'cisco'
  | 'python'

export const TECHNOLOGIES: Record<TechnologyKey, Technology> = Object.freeze({
  react: {
    title: 'React.js',
    img: '/images/tech/react.svg',
  },
  reactNative: {
    title: 'React Native',
    img: '/images/tech/react.svg',
  },
  next: {
    title: 'Next.js',
    img: '/images/tech/next.svg',
  },
  tailwind: {
    title: 'Tailwind',
    img: '/images/tech/tailwind.svg',
  },
  styled: {
    title: 'Styled',
    img: '/images/tech/styled.png',
  },
  solid: {
    title: 'Solid.js',
    img: '/images/tech/solid.svg',
  },
  astro: {
    title: 'Astro.js',
    img: '/images/tech/astro.svg',
  },
  scss: {
    title: 'SCSS',
    img: '/images/tech/scss.svg',
  },
  framer: {
    title: 'Framer Motion',
    img: '/images/tech/framer-motion.svg',
  },
  three: {
    title: 'Three.js',
    img: '/images/tech/three.svg',
  },
  gsap: {
    title: 'GSAP',
    img: '/images/tech/gsap.svg',
  },
  html: {
    title: 'HTML',
    img: '/images/tech/html.svg',
  },
  css: {
    title: 'CSS',
    img: '/images/tech/css.svg',
  },
  javascript: {
    title: 'Javascript',
    img: '/images/tech/js.svg',
  },
  typescript: {
    title: 'Typescript',
    img: '/images/tech/ts.svg',
  },
  node: {
    title: 'Node.js',
    img: '/images/tech/node.svg',
  },
  mongo: {
    title: 'MongoDB',
    img: '/images/tech/mongo.svg',
  },
  nest: {
    title: 'Nest.js',
    img: '/images/tech/nest.svg',
  },
  docker: {
    title: 'Docker',
    img: '/images/tech/docker.svg',
    imgTitle: '/images/tech/dockerName.svg',
  },
  graph: {
    title: 'GraphQL',
    img: '/images/tech/graphql.svg',
  },
  python: {
    title: 'Python',
    img: '/images/tech/python.svg',
  },
  cisco: {
    title: 'Cisco',
    img: '/images/tech/cisco.svg',
    imgTitle: '/images/tech/ciscoName.svg',
  },
} as const)

const {
  react,
  next,
  solid,
  astro,
  reactNative,
  typescript,
  node,
  mongo,
  nest,
  docker,
  javascript,
  html,
  css,
  scss,
  framer,
  graph,
  gsap,
  styled,
  tailwind,
  three,
  cisco,
} = TECHNOLOGIES

export const techStackPartial = {
  left: [react, next, solid, astro],
  right: [typescript, node, nest, mongo],
}

export const techStackFull = {
  front: [
    html,
    css,
    javascript,
    react,
    next,
    solid,
    astro,
    reactNative,
    framer,
    gsap,
    styled,
    tailwind,
    scss,
    three,
  ],
  back: [typescript, node, nest, mongo, docker, graph, cisco],
}
