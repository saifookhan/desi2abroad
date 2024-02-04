import { ReactNode } from 'react'

export type BackgroundStyleTypes = 'white' | 'lightGrey' | 'gradientDark' | 'transparent' | string

export const backgroundStyles = {
  white: 'bg-white',
  lightGrey: 'bg-gray-50',
  mediumGrey: 'bg-slate-200',
  gradientDark: 'bg-gradient-to-b from-slate-900 to-black',
  transparent: '',
}

interface Props {
  backgroundStyle: BackgroundStyleTypes
  children: ReactNode
}

export default function SectionContainer({ backgroundStyle, children }: Props) {
  return (
    <section className={backgroundStyles[backgroundStyle]}>
      <div className="mx-auto max-w-3xl px-4 sm:px-6 xl:max-w-5xl xl:px-0">{children}</div>
    </section>
  )
}
