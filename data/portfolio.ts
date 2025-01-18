import { BentoGridItemProps } from '@/components/ui'

export const aboutItems: BentoGridItemProps[] = [
  {
    id: 'about-item-1',
    title: 'I prioritize client collaboration, fostering open communication',
    description: '',
    className: 'lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]',
    titleClassName: 'justify-end',
    img: {
      src: '/assets/firewatch.webp',
      className:
        'size-full group-hover/bento:blur-sm group-hover/bento:brightness-90 group-hover/bento:saturate-75 transition-all duration-300',
    },
  },
  {
    id: 'about-item-2',
    title: "I'm very flexible with time zone communications",
    description: '',
    className: 'lg:col-span-2 md:col-span-3 md:row-span-2',
    titleClassName: 'justify-start md:text-center',
    extensions: ['3dGlobe'],
  },
  {
    id: 'about-item-3',
    title: 'My tech stack',
    description: 'I always learn something new',
    className: 'lg:col-span-2 md:col-span-3 md:row-span-2',
    titleClassName: 'justify-center',
    extensions: ['techStack'],
  },
  {
    id: 'about-item-4',
    title: 'Tech enthusiast with a passion for development.',
    description: '',
    className: 'lg:col-span-2 md:col-span-3 md:row-span-1',
    titleClassName: 'justify-start',
    img: { src: '/assets/grid.svg' },
    spareImg: { src: '/assets/b4.svg' },
  },

  {
    id: 'about-item-5',
    title: 'Currently building an AI platform',
    description: 'The Inside Scoop',
    className: 'md:col-span-3 md:row-span-2',
    titleClassName: 'justify-center md:justify-start lg:justify-center',
    img: {
      src: '/assets/b5.svg',
      className: 'absolute right-0 bottom-0 md:w-96 w-60',
    },
    spareImg: { src: '/assets/grid.svg', className: 'w-full opacity-80' },
  },
  {
    id: 'about-item-6',
    title: 'Do you want to bring an idea to life?',
    description: '',
    className: 'lg:col-span-2 md:col-span-3 md:row-span-1',
    titleClassName: 'justify-center md:max-w-full max-w-60 text-center',
    extensions: [
      'centeredContent',
      'backgroundGradientAnimation',
      'emailContact',
    ],
  },
]

export const techStack = {
  left: ['React.js', 'Next.js', 'Solid.js', 'Astro.js'],
  right: ['Typescript', 'Node.js', 'Nest.js', 'MongoDB'],
}

export const projects = [
  {
    id: 1,
    title: '3D Solar System Planets to Explore',
    des: 'Explore the wonders of our solar system with this captivating 3D simulation of the planets using Three.js.',
    img: '/assets/p1.svg',
    iconLists: [
      '/assets/re.svg',
      '/assets/tail.svg',
      '/assets/ts.svg',
      '/assets/three.svg',
      '/assets/fm.svg',
    ],
    link: 'https://github.com/adrianhajdin?tab=repositories',
  },
  {
    id: 2,
    title: 'Yoom - Video Conferencing App',
    des: 'Simplify your video conferencing experience with Yoom. Seamlessly connect with colleagues and friends.',
    img: '/assets/p2.svg',
    iconLists: [
      '/assets/next.svg',
      '/assets/tail.svg',
      '/assets/ts.svg',
      '/assets/stream.svg',
      '/assets/c.svg',
    ],
    link: 'https://github.com/adrianhajdin/zoom-clone',
  },
  {
    id: 3,
    title: 'AI Image SaaS - Canva Application',
    des: 'A REAL Software-as-a-Service app with AI features and a payments and credits system using the latest tech stack.',
    img: '/assets/p3.svg',
    iconLists: [
      '/assets/re.svg',
      '/assets/tail.svg',
      '/assets/ts.svg',
      '/assets/three.svg',
      '/assets/c.svg',
    ],
    link: 'https://github.com/adrianhajdin/ai_saas_app',
  },
  {
    id: 4,
    title: 'Animated Apple Iphone 3D Website',
    des: 'Recreated the Apple iPhone 15 Pro website, combining GSAP animations and Three.js 3D effects..',
    img: '/assets/p4.svg',
    iconLists: [
      '/assets/next.svg',
      '/assets/tail.svg',
      '/assets/ts.svg',
      '/assets/three.svg',
      '/assets/gsap.svg',
    ],
    link: 'https://github.com/adrianhajdin/iphone',
  },
]

export const testimonials = [
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: 'Michael Johnson',
    title: 'Director of AlphaStream Technologies',
  },
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: 'Michael Johnson',
    title: 'Director of AlphaStream Technologies',
  },
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: 'Michael Johnson',
    title: 'Director of AlphaStream Technologies',
  },
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: 'Michael Johnson',
    title: 'Director of AlphaStream Technologies',
  },
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: 'Michael Johnson',
    title: 'Director of AlphaStream Technologies',
  },
]

export const companies = [
  {
    id: 1,
    name: 'cloudinary',
    img: '/cloud.svg',
    nameImg: '/cloudName.svg',
  },
  {
    id: 2,
    name: 'appwrite',
    img: '/app.svg',
    nameImg: '/appName.svg',
  },
  {
    id: 3,
    name: 'HOSTINGER',
    img: '/host.svg',
    nameImg: '/hostName.svg',
  },
  {
    id: 4,
    name: 'stream',
    img: '/s.svg',
    nameImg: '/streamName.svg',
  },
  {
    id: 5,
    name: 'docker.',
    img: '/dock.svg',
    nameImg: '/dockerName.svg',
  },
]

export const workExperience = [
  {
    id: 1,
    title: 'Frontend Engineer Intern',
    desc: 'Assisted in the development of a web-based platform using React.js, enhancing interactivity.',
    className: 'md:col-span-2',
    thumbnail: '/exp1.svg',
  },
  {
    id: 2,
    title: 'Mobile App Dev - JSM Tech',
    desc: 'Designed and developed mobile app for both iOS & Android platforms using React Native.',
    className: 'md:col-span-2', // change to md:col-span-2
    thumbnail: '/exp2.svg',
  },
  {
    id: 3,
    title: 'Freelance App Dev Project',
    desc: 'Led the dev of a mobile app for a client, from initial concept to deployment on app stores.',
    className: 'md:col-span-2', // change to md:col-span-2
    thumbnail: '/exp3.svg',
  },
  {
    id: 4,
    title: 'Lead Frontend Developer',
    desc: 'Developed and maintained user-facing features using modern frontend technologies.',
    className: 'md:col-span-2',
    thumbnail: '/exp4.svg',
  },
]

export const socialMedia = [
  {
    id: 1,
    img: '/git.svg',
  },
  {
    id: 2,
    img: '/twit.svg',
  },
  {
    id: 3,
    img: '/link.svg',
  },
]
