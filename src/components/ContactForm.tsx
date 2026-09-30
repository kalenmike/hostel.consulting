import { useState } from 'react'
import type { FormEvent } from 'react'
import { PageHeading } from './SectionHeading'

// FormSubmit's AJAX endpoint posts JSON and answers with JSON, so the visitor
// stays on the page instead of being redirected to a hosted thank-you screen.
// The first submission to a new address triggers a one-time activation email
// to that address; until it is confirmed FormSubmit silently drops the mail.
const ENDPOINT = 'https://formsubmit.co/ajax/info@hostel.consulting'

type Status = 'idle' | 'submitting' | 'success' | 'error'

// Name, email and message are the three fields FormSubmit treats specially:
// they drive the table template columns and the auto-reply to the sender.
const FIELDS = [
  { name: 'name', label: 'Your Name', type: 'text', required: true },
  { name: 'email', label: 'Your Email', type: 'email', required: true },
  { name: 'hostel', label: 'Hostel Name', type: 'text', required: false },
  { name: 'location', label: 'Location', type: 'text', required: false },
  { name: 'subject', label: 'Subject', type: 'text', required: true },
] as const

export function ContactForm() {
  const [status, setStatus] = useState<Status>('idle')
  const [message, setMessage] = useState('')

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const form = event.currentTarget
    const data = new FormData(form)

    setStatus('submitting')
    setMessage('')

    try {
      const response = await fetch(ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          name: data.get('name'),
          email: data.get('email'),
          hostel: data.get('hostel'),
          location: data.get('location'),
          subject: data.get('subject'),
          message: data.get('message'),
          // Sends replies straight back to the enquirer instead of the mailbox.
          _replyto: data.get('email'),
          _subject: 'New enquiry from hostel.consulting',
          _template: 'table',
          // Honeypot: real visitors cannot see or fill this, so a non-empty
          // value means a bot. FormSubmit drops the mail and still reports
          // success, so bots get no signal that they were caught.
          _honey: data.get('_honey'),
        }),
      })

      const result = await response.json().catch(() => null)
      if (!response.ok || !result?.success) {
        throw new Error(result?.message || `The form service replied with ${response.status}.`)
      }

      setStatus('success')
      setMessage(result.message || 'Thanks - your message is on its way.')
      form.reset()
    } catch (error) {
      // FormSubmit's 5xx replies come back without CORS headers, so the browser
      // turns them into an opaque TypeError and the body cannot be read. Log
      // the real cause for debugging, but show the visitor the direct address
      // rather than leaking "Failed to fetch" at them. The form is left filled
      // so a failed send never costs them what they typed.
      console.error('Contact form submission failed:', error)
      setStatus('error')
      setMessage(
        error instanceof SyntaxError
          ? 'The form service sent back an unexpected response.'
          : 'We could not reach the form service just now.',
      )
    }
  }

  return (
    // The original renders the form bare on the page: no card, no panel. The
    // inputs carry all of the visual weight.
    <form onSubmit={handleSubmit} aria-busy={status === 'submitting'}>
      <PageHeading size="lg" className="mb-5">
        Contact Form
      </PageHeading>

      {status === 'success' ? (
        <div role="status">
          <p className="text-lg text-ink">{message}</p>
          <p className="text-sm text-muted">
            We usually reply within a couple of working days.
          </p>
          <button
            type="button"
            className="btn btn-outline mt-6"
            onClick={() => {
              setStatus('idle')
              setMessage('')
            }}
          >
            Send another message
          </button>
        </div>
      ) : (
        <>
          {status === 'error' && (
            <div
              role="alert"
              className="mb-5 rounded border border-red-300 bg-red-50 p-3 text-sm text-red-800"
            >
              <p>{message}</p>
              <p className="mt-1">
                You can also reach us at{' '}
                <a href="mailto:info@hostel.consulting" className="font-medium underline">
                  info@hostel.consulting
                </a>
                .
              </p>
            </div>
          )}

          {FIELDS.map((field) => (
            <label key={field.name} className="mb-4 block font-normal text-ink">
              {field.label}
              {field.required ? ' (required)' : ''}
              <input
                type={field.type}
                name={field.name}
                required={field.required}
                className="field"
              />
            </label>
          ))}

          <label className="mb-5 block font-normal text-ink">
            Your Message
            <textarea name="message" rows={6} className="field" />
          </label>

          <input
            type="text"
            name="_honey"
            tabIndex={-1}
            autoComplete="off"
            aria-hidden="true"
            className="hidden"
          />

          <button
            type="submit"
            className="btn btn-accent disabled:cursor-not-allowed disabled:opacity-60"
            disabled={status === 'submitting'}
          >
            {status === 'submitting' ? 'Sending...' : 'Send'}
          </button>
        </>
      )}
    </form>
  )
}

export default ContactForm
