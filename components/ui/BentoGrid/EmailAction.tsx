'use client'

import { useState } from 'react'
import { IoCopyOutline } from 'react-icons/io5'

import { MY_CONTACT_EMAIL } from '@/lib/data/contacts'

import { Button } from '../Button'
import { Confetti } from '../Confetti'

export const EmailAction = () => {
  const [copied, setCopied] = useState(false)

  const handleCopy = () => {
    navigator.clipboard.writeText(MY_CONTACT_EMAIL)
    setCopied(true)
    setTimeout(() => {
      setCopied(false)
    }, 10000)
  }

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
        onClick={handleCopy}
        disabled={copied}
      >
        <IoCopyOutline /> {copied ? 'Email copied!' : 'Copy my email'}
      </Button>
    </Confetti>
  )
}
