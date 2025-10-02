import { NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

export async function POST(request: Request) {
  try {
    const body = await request.json()

    const { firstname, lastname, email, service, subject, message } = body

    const name = `${firstname} ${lastname}`
    const serviceLabel =
      typeof service === 'string'
        ? service[0].toUpperCase() + service.slice(1)
        : 'Not mentioned'

    // const { rateLimited } = await checkRateLimit(request)

    // if (rateLimited) {
    //   return NextResponse.json(
    //     { error: 'Rate limit exceeded' },
    //     { status: 429 },
    //   )
    // }

    // Verify reCAPTCHA v3
    // const recaptchaResponse = await fetch('https://www.google.com/recaptcha/api/siteverify', {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    //   body: `secret=${process.env.RECAPTCHA_SECRET_KEY}&response=${recaptchaToken}`,
    // }).then((res) => res.json());

    // if (!recaptchaResponse.success || recaptchaResponse.score < 0.5) { // Adjust score threshold as needed (0.5 is common for forms)
    //   return { statusCode: 403, body: JSON.stringify({ error: 'reCAPTCHA verification failed. Please try again.' }) };
    // }

    let transporter = nodemailer.createTransport({
      host: process.env.EMAIL_SMPT_SERVER,
      port: 587,
      secure: false, // true for 465, false for other ports
      auth: {
        user: process.env.EMAIL_SMPT_LOGIN, // generated ethereal user
        pass: process.env.EMAIL_SMPT_PASS, // generated ethereal password
      },
    })

    const res = await transporter.sendMail({
      to: process.env.EMAIL_TO,
      from: 'max.sharinov@dev.com',
      subject: `Job offer: ${subject}`,
      text: `Service: ${serviceLabel}\n\nMessage: ${message}`,
      html: `<p><strong>Name:</strong> ${name}</p>
           <p><strong>Email:</strong> ${email}</p>
           <p><strong>Service:</strong> ${serviceLabel}</p>
           <p><strong>Message:</strong> ${message}</p>`,
    })

    return new Response(
      JSON.stringify({ message: 'Email sent successfully!' }),
      { status: 200 },
    )
  } catch (error) {
    console.log(error)
    const message = error instanceof Error ? error.message : 'Unexpected error'
    return new Response(JSON.stringify({ message }), { status: 500 })
  }
}
