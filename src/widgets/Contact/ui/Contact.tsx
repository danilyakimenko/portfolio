import { Input, Section } from '@/shared'

interface Props {
  className?: string,
}

export const Contact = ({ className }: Props) => {
  return (
    <Section
      eyebrow="Contact"
      title="Let's work together"
      description="Have a project in mind, or just want to say hello? Send a message and I'll get back to you."
    >
      <div>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d103723.23638253621!2d139.6584679984763!3d35.66835504465616!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188b857628235d%3A0xcdd8aef709a2b520!2z0KLQvtC60LjQviwg0K_Qv9C-0L3QuNGP!5e0!3m2!1sru!2sru!4v1795594359565!5m2!1sru!2sru"
          width="600"
          height="450"
          loading="lazy"
          referrerPolicy="strict-origin-when-cross-origin"
        ></iframe>
        <dl>
          <dt>Location</dt>
          <dd>
            <address>Tokyo, Japan</address>
          </dd>
          <dt>Email</dt>
          <dd>
            <a>taroyamada5880@gmail.com</a>
          </dd>
          <dt>Phone</dt>
          <dd>
            <a>+810375701108</a>
          </dd>
          <dt>Telegram</dt>
          <dd>
            <a>@TaroYamada08</a>
          </dd>
          <dt>Discord</dt>
          <dd>
            <a>@TaroYamada08</a>
          </dd>
        </dl>
      </div>
      <form>
        <Input id="Name" />
        <Input
          id="Email"
          type="email"
        />
        <Input
          id="Message"
          isTextArea
        />
      </form>
    </Section>
  )
}