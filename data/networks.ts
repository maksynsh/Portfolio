import {
  IoDocumentText,
  IoGlobeOutline,
  IoLogoGithub,
  IoLogoLinkedin,
  IoMail,
} from 'react-icons/io5'

export const NETWORKS = {
  LINKEDIN: {
    id: 'linkedin',
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/',
    icon: IoLogoLinkedin,
  },
  GITHUB: {
    id: 'github',
    name: 'GitHub',
    url: 'https://github.com/',
    icon: IoLogoGithub,
  },
  WEB: {
    id: 'web',
    name: 'Web',
    icon: IoGlobeOutline,
  },
  GOOGLE_DOCS: {
    id: 'google-docs',
    name: 'Google Docs',
    icon: IoDocumentText,
  },
  EMAIL: {
    id: 'email',
    name: 'Email',
    icon: IoMail,
  },
}
