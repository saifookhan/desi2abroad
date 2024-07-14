import siteMetadata from '@/data/siteMetadata'
import headerNavLinks from '@/data/headerNavLinks'
import Logo from '../data/logo.svg'
import Link from './Link'
import Image from 'next/image'
import MobileNav from './MobileNav'
import ThemeSwitch from './ThemeSwitch'
import SearchButton from './SearchButton'
import { message } from 'antd'

const Header = () => {

  return (
    <header className="mx-auto max-w-3xl px-4 sm:px-6 xl:max-w-5xl xl:px-0 flex items-center justify-between py-10">
      <div>
        <Link href="/" aria-label={siteMetadata.headerTitle}>
          <div className="flex items-center justify-between">
            <div className="mr-3">
              {/* <Logo /> */}
              <Image src="/static/images/logo.png" height={30} width={30} alt="some" />
            </div>
            {typeof siteMetadata.headerTitle === 'string' ? (
              <div className="h-6 text-xl font-semibold sm:text-2xl text-white">
                {siteMetadata.headerTitle}
              </div>
            ) : (
              siteMetadata.headerTitle
            )}
          </div>
        </Link>
      </div>
      <div className="flex items-center leading-5 space-x-4 sm:space-x-6">
        {headerNavLinks
          .filter((link) => link.href !== '/')
          .map((link) => (
            <Link
              key={link.title}
              href={link.href}
              className="hidden sm:block font-medium text-gray-900 dark:text-gray-100"
            >
              {link.title}
            </Link>
          ))}
        {/* <SearchButton /> */}
        {/* <ThemeSwitch /> */}
        <MobileNav />
      </div>
      <div>
        <button className="bg-white text-[#0F172A] hover:ring hover:ring-white hover:ring-opacity-100 hover:ring-offset-2 hover:ring-offset-transparent inline-block rounded-md py-[13px] px-6 text-base leading-6 font-medium transition-all duration-300 ease-in-out">
          Buy Course Now
        </button>
      </div>
    </header>
  )
}

export default Header
