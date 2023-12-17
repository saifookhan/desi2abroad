import { ReactNode } from 'react'

interface Props {
  dark?: boolean
  children: ReactNode
}

export default function SectionContainer({ dark, children }: Props) {
  return (
    <section className={dark ? 'bg-gradient-to-b from-slate-900 to-black' : ''}>
      <div className="mx-auto max-w-3xl px-4 sm:px-6 xl:max-w-5xl xl:px-0">{children}</div>
    </section>
  )
}
