import siteMetadata from '@/data/siteMetadata'
import headerNavLinks from '@/data/headerNavLinks'
import Link from './Link'
import Image from 'next/image'
import MobileNav from './MobileNav'


const Header = () => {

  return (
    <div className="w-full bg-gradient-to-r from-[#D8F2EF] to-white">
      <header
        className="mx-auto px-4 sm:px-6 flex  items-center justify-around py-10 sm:max-w-[640px] md:max-w-[768px] lg:max-w-[1024px] xl:max-w-[1140px]
      2xl:max-w-[1170px]"
      >
        <div>
          <Link href="/" aria-label={siteMetadata.headerTitle}>
            <div className="flex items-center justify-between">
              <div className="mr-3">
                {/* <Logo /> */}
                <Image src="/static/images/logo.png" height={30} width={30} alt="some" />
              </div>
              {typeof siteMetadata.headerTitle === 'string' ? (
                <div className="h-6 text-xl font-semibold sm:text-2xl text-black">
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
                className="hidden sm:block font-medium text-gray-500 dark:text-gray-100"
              >
                {link.title}
              </Link>
            ))}
          {/* <SearchButton /> */}
          {/* <ThemeSwitch /> */}
          <MobileNav />
        </div>
        <div>
          <button className="bg-[#FF7E84] text-white hover:ring hover:ring-[#FF7E84] hover:ring-opacity-100 hover:ring-offset-2 hover:ring-offset-transparent hidden lg:inline-block rounded-md py-[13px] px-6 text-base leading-6 font-medium transition-all duration-300 ease-in-out">
            Buy Course Now
          </button>
        </div>
      </header>
    </div>
  )
}

export default Header
