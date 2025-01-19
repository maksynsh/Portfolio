import { JourneyItemProps } from '@/components/home'

interface TimePoint {
  title: string
  data: JourneyItemProps
}

export const journey: TimePoint[] = [
  {
    title: '2024',
    data: {
      title: 'DreamFlare AI',
      description:
        'Joined the Dreamflare AI - interactive GenAI platform as a Full-stack developer and to this day I take part in bulding it.',
      images: [
        { src: '/images/projects/dreamflare-1.png', alt: 'DF Spin page' },
        { src: '/images/projects/dreamflare-2.png', alt: 'DF Flip page' },
        {
          src: '/images/projects/dreamflare-3.png',
          alt: 'DF Become creator',
        },
        { src: '/images/projects/dreamflare-4.png', alt: 'DF install page' },
      ],
    },
  },
  {
    title: '2022 – 2024',
    data: {
      title: 'Sewan France',
      description: `I took part as one of the sub-teams members developing Telephony
            features. I was mainly responsible for Frontend, UI-kit and GraphQL
            gateway, and sometimes contributed to backend services on Python.`,
      images: [
        { src: '/images/projects/sewan.png', alt: 'Sewan 1' },
        { src: '/images/projects/sewan-1.png', alt: 'Sewan 2' },
      ],
    },
  },
  {
    title: '2022',
    data: {
      title: 'Metrix',
      description: `Internet of Things implementation in business and city
            infrastructure for their automation.`,
      // TODO: find(?) and add Metrix images
      // images: [],
    },
  },
  {
    title: '2021',
    data: {
      title: 'EPP',
      description: `Developed client side application - internal social network for the
            European People's Party.`,
    },
  },
  {
    title: '2020',
    data: {
      title: 'Hodlers',
      description: `This was at the time I joined to the A-team Global company. One of
            my first projects was a blockchain project with a code name Hodlers
            where I developed 4 UI apps from scratch.`,
    },
  },
  {
    title: '2020',
    data: {
      title: 'FreelanceHunt',
      description: `While studying and making my own pet-projects I started working on multiple
            projects as a freelancer:`,
      children: (
        <ul className="text-gray-950 dark:text-gray-300 text-sm md:text-base">
          <li>✅ New Features</li>
          <li>✅ Tracing Bugs</li>
          <li>✅ Business</li>
          <li>✅ E-commerce</li>
          <li>✅ Deployment</li>
        </ul>
      ),
    },
  },
] as const
