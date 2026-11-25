import { Button, Input, Section } from '@/shared'

interface Props {
  className?: string,
}

const contactItems = [
  {
    label: 'Location',
    value: 'Tokyo, Japan',
  },
  {
    label: 'Email',
    value: 'taroyamada5880@gmail.com',
    href: 'mailto:taroyamada5880@gmail.com'
  },
  {
    label: 'Phone',
    value: '+810375701108',
    href: 'tel:+810375701108'
  },
  {
    label: 'Telegram',
    value: '@TaroYamada08',
    href: 'https://t.me/TaroYamada08'
  },
  {
    label: 'Discord',
    value: '@TaroYamada80',
    href: 'https://t.me/TaroYamada08'
  },

]

export const Contact = ({ className }: Props) => {
  return (
    <Section
      eyebrow="Contact"
      title="Let's work together"
      description="Have a project in mind, or just want to say hello? Send a message and I'll get back to you."
      className="grid gap-10 lg:grid-cols-[1fr_1.2fr]"
      isLightBackground
    >
      <div className="space-y-6">
        <div className="overflow-hidden rounded-lg">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d103723.23638253621!2d139.6584679984763!3d35.66835504465616!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188b857628235d%3A0xcdd8aef709a2b520!2z0KLQvtC60LjQviwg0K_Qv9C-0L3QuNGP!5e0!3m2!1sru!2sru!4v1795594359565!5m2!1sru!2sru"
            width="600"
            height="450"
            loading="lazy"
            referrerPolicy="strict-origin-when-cross-origin"
            className="block h-56 w-full border-0 sm:h-64"
          ></iframe>
        </div>
        <dl className="space-y-4 text-sm">
          {contactItems.map(({ label, value, href }, index) => (
            <div
              className="flex flex-wrap items-baseline gap-x-2"
              key={index}
            >
              <dt className="font-semibold text-light">
                {label}
              </dt>
              <dd>
                {href ? <a
                    className="text-accent hover:underline"
                    href={href}
                  >{value}</a> :
                  <address className='not-italic'>{value}</address>}
              </dd>
            </div>
          ))}
        </dl>
      </div>
      <form className="bg-surface border border-grid-line space-y-4 rounded-lg p-6">
        <Input id="Name" />
        <Input
          id="Email"
          type="email"
        />
        <Input
          id="Message"
          isTextArea
        />
        <Button className="mt-5 rounded-lg bg-indigo-400
                      px-4 py-2.5 text-sm font-semibold text-white
                      transition-colors hover:bg-indigo-500" type="submit">Send Message</Button>
      </form>
    </Section>
  )
}