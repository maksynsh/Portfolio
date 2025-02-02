import {
  IoDocumentText,
  IoLogoGithub,
  IoLogoLinkedin,
  IoMail,
} from 'react-icons/io5'

export const MY_CONTACT_EMAIL = 'max.sharinov@gmail.com'

export const LINKS = {
  LINKEDIN: {
    id: 'linkedin',
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/maksym-sharinov-3197101bb/',
    icon: IoLogoLinkedin,
  },
  GITHUB: {
    id: 'github',
    name: 'GitHub',
    url: 'https://github.com/maksynsh',
    icon: IoLogoGithub,
  },
  CV: {
    id: 'cv',
    name: 'Resume',
    url: 'https://docs.google.com/document/d/1ye0EKKyI55aO44JQbMjPUTCe6eCRQIX8WIJgWKTzX8k/edit?usp=sharing',
    icon: IoDocumentText,
  },
  EMAIL: {
    id: 'email',
    name: 'Email',
    url: `mailto:${MY_CONTACT_EMAIL}?subject=Cooperation`,
    icon: IoMail,
  },
}
