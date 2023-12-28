import { genPageMetadata } from 'app/seo'
import SectionContainer from 'components/SectionContainer'
import Flow from 'components/germany/Roadmap'
import DisqusComments from 'components/general/Disqus/disqus'

//TODO:: fill meta
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
                <button className="flex items-center justify-center rounded-md border border-gray-300 bg-gray-50 px-2.5 py-1 text-xs font-medium text-black hover:bg-gray-200 disabled:cursor-not-allowed disabled:bg-gray-100 disabled:hover:bg-gray-100 sm:text-sm">
                  {/* TODO:: move this svg to an assets folder */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 175.216 175.552"
                    width="16px"
                    height="16px"
                  >
                    <defs>
                      <linearGradient
                        id="b"
                        x1="85.915"
                        x2="86.535"
                        y1="32.567"
                        y2="137.092"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop offset="0" stopColor="#57d163" />
                        <stop offset="1" stopColor="#23b33a" />
                      </linearGradient>
                      <filter
                        id="a"
                        width="1.115"
                        height="1.114"
                        x="-.057"
                        y="-.057"
                        colorInterpolationFilters="sRGB"
                      >
                        <feGaussianBlur stdDeviation="3.531" />
                      </filter>
                    </defs>
                    <path
                      fill="#b3b3b3"
                      d="m54.532 138.45 2.235 1.324c9.387 5.571 20.15 8.518 31.126 8.523h.023c33.707 0 61.139-27.426 61.153-61.135.006-16.335-6.349-31.696-17.895-43.251A60.75 60.75 0 0 0 87.94 25.983c-33.733 0-61.166 27.423-61.178 61.13a60.98 60.98 0 0 0 9.349 32.535l1.455 2.312-6.179 22.558zm-40.811 23.544L24.16 123.88c-6.438-11.154-9.825-23.808-9.821-36.772.017-40.556 33.021-73.55 73.578-73.55 19.681.01 38.154 7.669 52.047 21.572s21.537 32.383 21.53 52.037c-.018 40.553-33.027 73.553-73.578 73.553h-.032c-12.313-.005-24.412-3.094-35.159-8.954zm0 0"
                      filter="url(#a)"
                    />
                    <path
                      fill="#fff"
                      d="m12.966 161.238 10.439-38.114a73.42 73.42 0 0 1-9.821-36.772c.017-40.556 33.021-73.55 73.578-73.55 19.681.01 38.154 7.669 52.047 21.572s21.537 32.383 21.53 52.037c-.018 40.553-33.027 73.553-73.578 73.553h-.032c-12.313-.005-24.412-3.094-35.159-8.954z"
                    />
                    <path
                      fill="url(#linearGradient1780)"
                      d="M87.184 25.227c-33.733 0-61.166 27.423-61.178 61.13a60.98 60.98 0 0 0 9.349 32.535l1.455 2.312-6.179 22.559 23.146-6.069 2.235 1.324c9.387 5.571 20.15 8.518 31.126 8.524h.023c33.707 0 61.14-27.426 61.153-61.135a60.75 60.75 0 0 0-17.895-43.251 60.75 60.75 0 0 0-43.235-17.929z"
                    />
                    <path
                      fill="url(#b)"
                      d="M87.184 25.227c-33.733 0-61.166 27.423-61.178 61.13a60.98 60.98 0 0 0 9.349 32.535l1.455 2.313-6.179 22.558 23.146-6.069 2.235 1.324c9.387 5.571 20.15 8.517 31.126 8.523h.023c33.707 0 61.14-27.426 61.153-61.135a60.75 60.75 0 0 0-17.895-43.251 60.75 60.75 0 0 0-43.235-17.928z"
                    />
                    <path
                      fill="#fff"
                      fillRule="evenodd"
                      d="M68.772 55.603c-1.378-3.061-2.828-3.123-4.137-3.176l-3.524-.043c-1.226 0-3.218.46-4.902 2.3s-6.435 6.287-6.435 15.332 6.588 17.785 7.506 19.013 12.718 20.381 31.405 27.75c15.529 6.124 18.689 4.906 22.061 4.6s10.877-4.447 12.408-8.74 1.532-7.971 1.073-8.74-1.685-1.226-3.525-2.146-10.877-5.367-12.562-5.981-2.91-.919-4.137.921-4.746 5.979-5.819 7.206-2.144 1.381-3.984.462-7.76-2.861-14.784-9.124c-5.465-4.873-9.154-10.891-10.228-12.73s-.114-2.835.808-3.751c.825-.824 1.838-2.147 2.759-3.22s1.224-1.84 1.836-3.065.307-2.301-.153-3.22-4.032-10.011-5.666-13.647"
                    />
                  </svg>
                  Join our Study-in-Germany 2024 Whatsapp group
                </button>{' '}
              </div>{' '}
              <h1 className="mb-0.5 text-2xl font-bold sm:mb-2 sm:text-4xl text-black">
                {' '}
                Germany 🇩🇪 <span className="relative top-0 sm:-top-1"> </span>{' '}
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
                    Start with clicking on the topic of your choice
                  </span>
                </h2>
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
        <div className="mb-8 text-black">
          Credits: Iraj Anwar, Saifoo Khan, Yalnaz Baig, Zubair Khan
        </div>
      </SectionContainer>
      {/* <SectionContainer backgroundStyle={'white'}>
        <DisqusComments post={{ id: 1, title: 'germany' }} />
      </SectionContainer> */}
    </>
  )
}
