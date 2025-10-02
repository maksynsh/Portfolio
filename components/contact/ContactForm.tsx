'use client'
import { IoNavigate } from 'react-icons/io5'
import { SubmitHandler, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'
import { Button, Input, Paper, Select, Textarea } from '../ui'
import { MY_SERVICES } from '@/lib/data/my-services'

const Inputs = z.object({
  firstname: z.string().min(2, { error: 'Please enter your name' }),
  lastname: z.string().optional(),
  email: z.email(),
  service: z
    .string({ error: 'Choose what services you are interested in' })
    .nonempty({ error: 'Choose what services you are interested in' }),
  subject: z.string().nonempty(),
  message: z.string().nonempty(),
})

type ContactSchema = z.infer<typeof Inputs>

export const ContactForm = () => {
  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm<ContactSchema>({
    resolver: zodResolver(Inputs),
  })

  const onSubmit: SubmitHandler<ContactSchema> = async data => {
    const res = await fetch('/api/contact', {
      body: JSON.stringify(data),
      method: 'POST',
    })
    debugger
  }

  return (
    <Paper
      as="div"
      id={'contact-form-container'}
      className={`relative shadow-lg flex flex-col justify-between
        overflow-hidden px-6 md:px-12 pt-6 md:pt-10 pb-4 space-y-8 max-w-md
        md:max-w-xl w-full`}
    >
      <h1 className="text-2xl md:text-4xl">Get in touch</h1>
      <form className="flex flex-col gap-4" onSubmit={handleSubmit(onSubmit)}>
        <div className="flex flex-col gap-4 md:gap-6 md:flex-row">
          <Input
            id="firstname"
            label="First Name"
            placeholder="John"
            type="text"
            error={errors.firstname?.message}
            required
            {...register('firstname')}
          />

          <Input
            id="lastname"
            label="Last Name"
            placeholder="Wick"
            type="text"
            error={errors.lastname?.message}
            {...register('lastname')}
          />
        </div>

        <Input
          id="email"
          placeholder="example@gmail.com"
          label="Email Address"
          type="email"
          error={errors.email?.message}
          required
          {...register('email')}
        />

        <Select
          id="service"
          label="Service"
          options={MY_SERVICES}
          placeholder="How can I help you?"
          {...register('service', { required: true })}
          value={watch().service}
          onSelect={value => setValue('service', value)}
          error={errors.service?.message}
          required
        />

        <Input
          id="subject"
          label="Subject"
          type="text"
          error={errors.subject?.message}
          required
          {...register('subject')}
        />

        <Textarea
          className="h-28"
          id="message"
          placeholder="Please provide as much detail as possible on your query"
          label="Message"
          error={errors.message?.message}
          required
          {...register('message')}
        />

        <div className="flex flex-col items-center gap-2 mt-8">
          <Button
            className="w-full"
            size="xl"
            variant="magic"
            onClick={handleSubmit(onSubmit)}
          >
            Send Message
            <IoNavigate className="size-4 mt-0.5" />
          </Button>
          <Button
            className="opacity-80 hover:opacity-100"
            size="sm"
            variant="link"
            href="/"
          >
            Go Back
          </Button>
        </div>
      </form>
    </Paper>
  )
}
