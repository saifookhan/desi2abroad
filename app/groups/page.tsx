'use client'

import SectionContainer from 'components/SectionContainer'
import PageHeader from '@/components/general/page/PageHeader'
import { useEffect } from 'react'
import PopupGroupLink from '@/components/social-icons/PopupGroupLink'
import socialLinks from '@/data/socialLinks'

//TODO:: fill meta
// export const metadata = genPageMetadata({ title: 'Blog' })

export default function BlogPage() {
  useEffect(() => {
    const mainElement = document.querySelector('main')

    // Apply styles using JavaScript
    if (mainElement) {
      mainElement.style.backgroundImage = 'url(/static/images/bg-hue/bg-hue.svg)'
      mainElement.style.backgroundPosition = '50%'
      mainElement.style.backgroundSize = 'cover'
    }

    mainElement?.style.setProperty('will-change', 'filter', '')
    let hue = 0

    setInterval(function () {
      hue = (hue + 1) % 360

      mainElement?.style.setProperty('filter', 'hue-rotate(' + hue + 'deg)', '')
    }, 5000 / 360)
  }, [])

  return (
    <>
      <PageHeader
        headerTitle="Community Groups"
        headerDescription="Join our support communities"
        headerColor="transparent"
      />
      <br />
      <SectionContainer backgroundStyle="transparent">
        <div className="mt-16 flex flex-col justify-center items-center">
          {socialLinks.map((category) => {
            return (
              <div
                key={category.categoryName}
                className="mb-3 min-w-full flex flex-col justify-center items-center"
              >
                <p className="mb-2 text-2xl text-black">{category.categoryName}</p>
                {category.links.map((link) => {
                  return (
                    <PopupGroupLink
                      key={link.title}
                      text={link.title}
                      link={link.link}
                      iconType={link.type}
                      icon={link.image}
                    />
                  )
                })}
              </div>
            )
          })}
        </div>
      </SectionContainer>
    </>
  )
}
