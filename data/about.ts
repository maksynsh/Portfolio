import { BentoGridItemProps } from '@/components/ui'

export const aboutItems: BentoGridItemProps[] = [
  {
    id: 'about-item-1',
    title: 'I prioritize client collaboration, fostering open communication',
    description: '',
    className: 'lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]',
    titleClassName: 'justify-end text-white',
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
    titleClassName:
      'text-white justify-center md:max-w-full max-w-60 text-center',
    extensions: [
      'centeredContent',
      'backgroundGradientAnimation',
      'emailContact',
    ],
  },
]
