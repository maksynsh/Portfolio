'use client'
import { IoArrowForward } from 'react-icons/io5'

import { techStackFull } from '@/data/tech-stack'
import {
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalTrigger,
  useModal,
} from '../Modal'
import { Tab, Tabs } from '../Tabs'
import { useState } from 'react'
import { Button } from '../Button'

type StackTab = Tab & { value: 'front' | 'back' | 'all' }

const stackTabs: StackTab[] = [
  { title: 'All', value: 'all' },
  { title: 'Frontend', value: 'front' },
  { title: 'Backend', value: 'back' },
]

const OutsideCloseButton = () => {
  const { setOpen } = useModal()
  return (
    <Button size="sm" onClick={() => setOpen(false)}>
      Close
    </Button>
  )
}

const Content = () => {
  const [activeTab, setActiveTab] = useState<StackTab>(stackTabs[0])

  return (
    <ModalContent>
      <Tabs
        id="tech-stack-modal-tabs"
        tabs={stackTabs}
        activeTab={activeTab}
        onTabChange={tab =>
          setActiveTab(
            stackTabs.find(t => t.value === tab.value) ?? stackTabs[0],
          )
        }
      />
      <ul className="grid grid-cols-2 md:grid-cols-3 gap-4 pt-8 md:px-4">
        {(activeTab.value === 'all'
          ? Object.values(techStackFull).flat()
          : techStackFull[activeTab.value]
        ).map((tech, i) => (
          <li key={i} className="py-2 flex items-center gap-1">
            <img className="rounded-full size-4" src={tech.img} />
            <span className="whitespace-nowrap text-sm md:text-base">
              {tech.title}
            </span>
          </li>
        ))}
      </ul>
    </ModalContent>
  )
}

export const SeeFullStackAction = () => {
  return (
    <Modal>
      <ModalTrigger className="flex items-center gap-1 uppercase">
        <IoArrowForward className="size-5" /> See full list
      </ModalTrigger>
      <ModalBody className="max-w-screen-lg h-4/5 max-h-[680px]">
        <Content />
        <ModalFooter className="gap-4">
          <OutsideCloseButton />
        </ModalFooter>
      </ModalBody>
    </Modal>
  )
}
