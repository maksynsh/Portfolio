'use client'

import { useState } from 'react'

import { Button } from '../Button'
import { Confetti } from '../Confetti'

export const EmailAction = () => {
  const [copied, setCopied] = useState(false)

  // const handleCopy = () => {
  //   navigator.clipboard.writeText(MY_CONTACT_EMAIL)
  //   setCopied(true)
  //   setTimeout(() => {
  //     setCopied(false)
  //   }, 10000)
  // }

  return (
    <Confetti
      className="mt-4"
      options={{
        loop: copied,
        autoplay: copied,
      }}
    >
      <Button
        className="pointer-events-auto mx-auto bg-blue-950"
        variant="magic"
        size="lg"
        href={'/contact'}
        // onClick={handleCopy}
        // disabled={copied}
      >
        {/* <IoCopyOutline /> {copied ? 'Email copied!' : 'Copy my email'} */}
        Send me a request
      </Button>
    </Confetti>
  )
}
