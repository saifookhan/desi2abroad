import GermanyLayout from '@/layouts/GermanyLayoutWithTags'
import { allCoreContent, sortPosts } from 'pliny/utils/contentlayer'
import { allBlogs } from 'contentlayer/generated'
import { genPageMetadata } from 'app/seo'
import SectionContainer from '@/components/SectionContainer'
import Flow from '@/components/germany/Roadmap'
import Footer from '@/components/Footer'

const POSTS_PER_PAGE = 5

export const metadata = genPageMetadata({ title: 'Blog' })

export default function BlogPage() {
  return (
    <>
      <SectionContainer backgroundStyle={'white'}>
        <div className="relative border-b text-black">
          {' '}
          <div className="container relative py-5 sm:py-16">
            {' '}
            <div className="mb-3 mt-0 sm:mb-4">
              {' '}
              <div className="mb-2">
                {' '}
                <button className="flex items-center justify-center rounded-md border border-gray-300 bg-gray-50 px-2.5 py-1 text-xs font-medium text-black hover:bg-gray-200 disabled:cursor-not-allowed disabled:bg-gray-100 disabled:hover:bg-gray-100 max-sm:hidden sm:text-sm">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16px"
                    height="16px"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-git-fork mr-1.5"
                  >
                    <circle cx="12" cy="18" r="3"></circle>
                    <circle cx="6" cy="6" r="3"></circle>
                    <circle cx="18" cy="6" r="3"></circle>
                    <path d="M18 9v2c0 .6-.4 1-1 1H7c-.6 0-1-.4-1-1V9"></path>
                    <path d="M12 12v3"></path>
                  </svg>
                  Join our Whatsapp communities
                </button>{' '}
              </div>{' '}
              <h1 className="mb-0.5 text-2xl font-bold sm:mb-2 sm:text-4xl text-black">
                {' '}
                Frontend Developer <span className="relative top-0 sm:-top-1"> </span>{' '}
              </h1>{' '}
              <p className="text-sm text-gray-500 sm:text-lg">
                Step by step guide to applying for study in Germany in 2024
              </p>{' '}
            </div>{' '}
            <div className="flex justify-between gap-2 sm:gap-0">
              {' '}
              <div className="flex gap-1 sm:gap-2">
                {' '}
                <a
                  href="/"
                  className="rounded-md bg-gray-500 px-3 py-1.5 text-xs font-medium text-white hover:bg-gray-600 sm:text-sm"
                  aria-label="Back to All Roadmaps"
                >
                  ←<span className="hidden sm:inline">&nbsp;All Roadmaps</span>{' '}
                </a>{' '}
                <button
                  data-guest-required=""
                  data-popup="login-popup"
                  className="inline-flex items-center justify-center rounded-md bg-yellow-400 px-3 py-1.5 text-xs font-medium hover:bg-yellow-500 sm:text-sm transition-opacity duration-300"
                  aria-label="Download Roadmap"
                >
                  {' '}
                  <svg viewBox="0 0 14 14" focusable="false" className="h-3 w-3" aria-hidden="true">
                    <path
                      fill="currentColor"
                      d="M11.2857,6.05714 L10.08571,4.85714 L7.85714,7.14786 L7.85714,1 L6.14286,1 L6.14286,7.14786 L3.91429,4.85714 L2.71429,6.05714 L7,10.42857 L11.2857,6.05714 Z M1,11.2857 L1,13 L13,13 L13,11.2857 L1,11.2857 Z"
                    ></path>
                  </svg>{' '}
                  <span className="ml-2 hidden sm:inline">Download</span>{' '}
                </button>
                <div className="relative">
                  <button
                    className="inline-flex h-full items-center justify-center rounded-md bg-yellow-400 px-3 py-1.5 text-xs font-medium hover:bg-yellow-500 sm:text-sm"
                    aria-label="Share Roadmap"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="15px"
                      height="15px"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-share2 "
                    >
                      <circle cx="18" cy="5" r="3"></circle>
                      <circle cx="6" cy="12" r="3"></circle>
                      <circle cx="18" cy="19" r="3"></circle>
                      <line x1="8.59" x2="15.42" y1="13.51" y2="17.49"></line>
                      <line x1="15.41" x2="8.59" y1="6.51" y2="10.49"></line>
                    </svg>
                    <span className="ml-2 hidden sm:inline">Share</span>
                  </button>
                </div>{' '}
                <a
                  data-auth-required=""
                  className="inline-flex hidden items-center justify-center rounded-md bg-yellow-400 px-3 py-1.5 text-xs font-medium hover:bg-yellow-500 sm:text-sm"
                  aria-label="Download Roadmap"
                  target="_blank"
                  href="/pdfs/roadmaps/frontend.pdf"
                >
                  {' '}
                  <svg viewBox="0 0 14 14" focusable="false" className="h-3 w-3" aria-hidden="true">
                    <path
                      fill="currentColor"
                      d="M11.2857,6.05714 L10.08571,4.85714 L7.85714,7.14786 L7.85714,1 L6.14286,1 L6.14286,7.14786 L3.91429,4.85714 L2.71429,6.05714 L7,10.42857 L11.2857,6.05714 Z M1,11.2857 L1,13 L13,13 L13,11.2857 L1,11.2857 Z"
                    ></path>
                  </svg>{' '}
                  <span className="ml-2 hidden sm:inline">Download</span>{' '}
                </a>{' '}
              </div>{' '}
              <div className="flex items-center gap-1 sm:gap-2">
                {' '}
                <a
                  href="https://saifookhan.com/whatsapp-study"
                  target="_blank"
                  className="inline-flex items-center justify-center rounded-md bg-gray-500 px-3 py-1.5 text-xs font-medium text-white hover:bg-gray-600 sm:text-sm"
                  aria-label="Suggest Changes"
                >
                  {' '}
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14 14" className="h-3 w-3">
                    <path
                      fill="currentColor"
                      d="M.913.921C1.499.332 2.293 0 3.123 0h7.753c.83 0 1.625.332 2.21.921S14 2.307 14 3.137v4.992c-.004.385-.094.842-.237 1.199-.15.354-.408.742-.676 1.018a3.51 3.51 0 0 1-1.014.681 3.5 3.5 0 0 1-1.197.239h-.753v1.301h-.002c-.001.225-.058.511-.143.694-.115.204-.366.458-.57.576h0l-.003.001c-.176.086-.46.155-.655.16h-.003a1.48 1.48 0 0 1-1.038-.438l-2.315-2.295H3.123c-.83 0-1.625-.332-2.21-.921-.268-.275-.526-.663-.676-1.018C.094 8.971.004 8.514 0 8.129V3.137C0 2.307.328 1.509.913.921zm2.21.674a1.52 1.52 0 0 0-1.079.45 1.55 1.55 0 0 0-.449 1.092v4.992c-.004.23.026.381.117.592.084.213.169.341.332.501a1.52 1.52 0 0 0 1.079.45h2.6c.21 0 .412.083.561.231l2.243 2.224v-1.657a.8.8 0 0 1 .797-.797h1.551a1.24 1.24 0 0 0 .583-.117 1.25 1.25 0 0 0 .496-.333c.164-.159.249-.287.332-.501.091-.211.121-.362.117-.592V3.137a1.55 1.55 0 0 0-.449-1.092 1.52 1.52 0 0 0-1.079-.45H3.123z"
                    ></path>
                  </svg>{' '}
                  <span className="ml-2 hidden sm:inline">Suggest Changes</span>{' '}
                  <span className="ml-2 inline sm:hidden">Suggest</span>{' '}
                </a>{' '}
              </div>{' '}
            </div>{' '}
            <div className="mt-4 sm:mt-7 border-0 sm:border rounded-md mb-0 bg-white sm:-mb-[110px]">
              {' '}
              <div
                data-progress-nums-container=""
                className="hidden sm:flex justify-between px-2 bg-white items-center py-1.5 relative rounded-tl-md rounded-tr-md"
              >
                {' '}
                <p className="flex text-sm transition-opacity duration-300" data-progress-nums="">
                  {' '}
                  <span className="mr-2.5 rounded-sm bg-yellow-200 px-1 py-0.5 text-xs font-medium uppercase text-yellow-900">
                    {' '}
                    <span data-progress-percentage="">0</span>% Done
                  </span>{' '}
                  <span className="itesm-center hidden md:flex">
                    {' '}
                    <span>
                      <span data-progress-done="">0</span> completed
                    </span>
                    <span className="mx-1.5 text-gray-400">·</span>{' '}
                    <span>
                      <span data-progress-learning="">0</span> in progress
                    </span>
                    <span className="mx-1.5 text-gray-400">·</span>{' '}
                    <span>
                      <span data-progress-skipped="">0</span> skipped
                    </span>
                    <span className="mx-1.5 text-gray-400">·</span>{' '}
                    <span>
                      <span data-progress-total="">123</span> Total
                    </span>{' '}
                  </span>{' '}
                  <span className="md:hidden">
                    {' '}
                    <span data-progress-done="">0</span> of <span data-progress-total="">123</span>{' '}
                    Done
                  </span>{' '}
                </p>{' '}
                <div
                  className="flex items-center gap-3 transition-opacity duration-300"
                  data-progress-nums=""
                >
                  {' '}
                  <button
                    data-popup="progress-help"
                    className="flex items-center gap-1 text-sm font-medium text-gray-500 transition-opacity hover:text-black"
                    data-progress-nums=""
                  >
                    {' '}
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      strokeWidth="0"
                      viewBox="0 0 24 24"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm1 16h-2v-2h2v2zm.976-4.885c-.196.158-.385.309-.535.459-.408.407-.44.777-.441.793v.133h-2v-.167c0-.118.029-1.177 1.026-2.174.195-.195.437-.393.691-.599.734-.595 1.216-1.029 1.216-1.627a1.934 1.934 0 0 0-3.867.001h-2C8.066 7.765 9.831 6 12 6s3.934 1.765 3.934 3.934c0 1.597-1.179 2.55-1.958 3.181z"></path>
                    </svg>
                    Track Progress
                  </button>{' '}
                </div>{' '}
              </div>{' '}
              <div
                data-progress-nums-container=""
                className="relative -mb-2 flex items-center justify-between rounded-md border bg-white px-2 py-1.5 text-sm text-gray-700 sm:hidden"
              >
                {' '}
                <span
                  data-progress-nums=""
                  className="text-gray-500 transition-opacity duration-300"
                >
                  {' '}
                  <span data-progress-done="">0</span> of <span data-progress-total="">123</span>{' '}
                  Done
                </span>{' '}
                <div
                  className="flex items-center gap-2 transition-opacity duration-300"
                  data-progress-nums=""
                >
                  {' '}
                </div>{' '}
              </div>{' '}
              <div className="relative hidden border-t text-sm font-medium sm:block">
                <h2
                  className="z-50 flex cursor-pointer items-center px-2 py-2.5 text-base font-medium"
                  aria-expanded="false"
                >
                  <span className="flex flex-grow items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-graduation-cap mr-2 inline-block h-6 w-6"
                    >
                      <path d="M22 10v6M2 10l10-5 10 5-10 5z"></path>
                      <path d="M6 12v5c3 3 9 3 12 0v-5"></path>
                    </svg>
                    What is Frontend Development?
                  </span>
                  <span className="flex-shrink-0 text-gray-400">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-chevron-down inline-block h-5 w-5"
                    >
                      <path d="m6 9 6 6 6-6"></path>
                    </svg>
                  </span>
                </h2>
                <div className="absolute left-0 right-0 top-0 z-50 mt-0 rounded-md border bg-white hidden">
                  <div className="bg-gray-100 p-3 text-base [&amp;>h2]:mb-2 [&amp;>h2]:mt-5 [&amp;>h2]:text-[17px] [&amp;>h2]:font-medium [&amp;>p:last-child]:mb-0 [&amp;>p>a]:font-semibold [&amp;>p>a]:underline [&amp;>p>a]:underline-offset-2 [&amp;>p]:mb-3 [&amp;>p]:font-normal [&amp;>p]:leading-relaxed [&amp;>p]:text-gray-800">
                    <p>
                      Front-end development is the development of visual and interactive elements of
                      a website that users interact with directly. It's a combination of HTML, CSS
                      and <a href="/javascript">JavaScript</a>, where HTML provides the structure,
                      CSS the styling and layout, and JavaScript the dynamic behaviour and
                      interactivity.
                    </p>
                    <h2>What does a Frontend Developer do?</h2>
                    <p>
                      As a front-end developer, you'll be responsible for creating the user
                      interface of a website, to ensure it looks good and is easy to use, with great
                      focus on design principles and user experience. You'll be working closely with
                      designers, back-end developers, and project managers to make sure the final
                      product meets the client's needs and provides the best possible experience for
                      the end-users.
                    </p>
                  </div>
                </div>
              </div>{' '}
            </div>{' '}
          </div>{' '}
          <div className="absolute left-0 right-0 top-0 hidden border-b border-b-gray-200 px-2 py-1.5 sm:block">
            {' '}
            <p className="py-0.5 text-center text-sm">
              {' '}
              <span className="badge mr-1">Watch</span>
              all videos on{' '}
              <a
                href="https://youtube.com/@desi2abroad"
                target="_blank"
                className="font-medium underline"
              >
                YouTube
              </a>{' '}
            </p>{' '}
          </div>{' '}
        </div>
      </SectionContainer>
      <SectionContainer backgroundStyle={'lightGrey'}>
        <Flow />
      </SectionContainer>
      {/* <SectionContainer>

      </SectionContainer> */}
      <Footer />
    </>
  )
}
