import CartIcon from './CartIcon'
import Footer from './Footer'
import Link from './Link'
import Logo from '@/data/logo.svg'
import MobileNav from './MobileNav'
import SiteContainer from './SiteContainer'
import ThemeSwitch from './ThemeSwitch'
import headerNavLinks from '@/data/headerNavLinks'
import siteMetadata from '@/data/siteMetadata'
import useScrollHeightFromTop from '@/helpers/useScrollHeightFromTop'

const LayoutWrapper = ({ children }) => {
  const scrollHeight = useScrollHeightFromTop()

  return (
    <SiteContainer>
      <div className="flex h-screen flex-col justify-between">
        <header
          className={` py-10 px-4 left-0 right-0 top-0 sticky z-[1000]  ${
            scrollHeight > 10 && 'bg-white'
          } transition-colors`}
        >
          <div className="mx-auto max-w-3xl sm:px-6 xl:max-w-5xl w-full flex items-center justify-between">
            <div>
              <Link href="/" aria-label={siteMetadata.headerTitle}>
                <div className="flex items-center justify-between">
                  <div className="mr-3">
                    <Logo />
                  </div>
                  {typeof siteMetadata.headerTitle === 'string' ? (
                    <div
                      className={`${
                        scrollHeight > 10 && 'dark:text-gray-900'
                      } hidden h-6 text-2xl font-semibold
                  sm:block transition-colors`}
                    >
                      {siteMetadata.headerTitle}
                    </div>
                  ) : (
                    siteMetadata.headerTitle
                  )}
                </div>
              </Link>
            </div>
            <div className="flex items-center text-base leading-5">
              <div className="hidden sm:block">
                {headerNavLinks.map((link) => (
                  <Link
                    key={link.title}
                    href={link.href}
                    className={`p-1 font-medium text-gray-900 dark:text-gray-100 sm:p-4 ${
                      scrollHeight > 10 && 'dark:text-gray-900'
                    } transition-colors`}
                  >
                    {link.title}
                  </Link>
                ))}
              </div>
              <ThemeSwitch />
              <CartIcon />
              <MobileNav />
            </div>
          </div>
        </header>
        <main className="mb-auto px-4">{children}</main>
        <Footer />
      </div>
    </SiteContainer>
  )
}

export default LayoutWrapper
