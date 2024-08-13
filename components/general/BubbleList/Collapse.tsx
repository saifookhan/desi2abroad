'use client'
import { useState, useEffect } from 'react'
import { Collapse, message, Button } from 'antd'
import { TiArrowForward } from 'react-icons/ti'
import { GoDotFill } from 'react-icons/go'
import { FaCheck } from 'react-icons/fa6'

const { Panel } = Collapse

const BubbleListCollapse = ({ stringifiedData }) => {
  const data = JSON.parse(stringifiedData)
  const [activeSubPanel, setActiveSubPanel] = useState<string>('00')
  const [localData, setLocalData] = useState([])
  const [messageApi, contextHolder] = message.useMessage()
  const activeKey = ['1', '2', '3', '4', '5', '6']
  const [isGoDotFillDisplayed, setIsGoDotFillDisplayed] = useState(false)

  const mainColor = [
    'bg-amber-200',
    'bg-amber-200',
    'bg-amber-200',
    'bg-amber-200',
    'bg-amber-200',
    'bg-amber-200',
  ]
  const subColor = [
    'bg-yellow-100',
    'bg-green-100',
    'bg-pink-100',
    'bg-blue-200',
    'bg-orange-200',
    'bg-gray-300',
  ]

  const viewer = (id) => {
    const existingView = localStorage.getItem('view')
    const existingIds = existingView ? JSON.parse(existingView) : []
    if (!existingIds.includes(id)) {
      existingIds.push(id)
      localStorage.setItem('view', JSON.stringify(existingIds))
    }
  }

  const youtubeUrlToEmbedUrl = (urls) => {
    if (urls) {
      try {
        const splittedArr = urls.split(',')
        const convertedUrls = splittedArr.map((url) => {
          const trimmedUrl = url.trim()
          const urlObj = new URL(trimmedUrl)
          if (urlObj.hostname === 'youtu.be') {
            const videoId = urlObj.pathname.substring(1)
            return `https://www.youtube.com/embed/${videoId}`
          } else if (urlObj.hostname === 'www.youtube.com' && urlObj.pathname === '/watch') {
            const videoId = urlObj.searchParams.get('v')
            return `https://www.youtube.com/embed/${videoId}`
          } else {
            return trimmedUrl
          }
        })
        return convertedUrls
      } catch (e) {
        /* empty */
      }
    }
    return [urls]
  }

  useEffect(() => {
    const windowLocation = window.location.href
    const searchId = '#'
    let resultId = ''

    const positionId = windowLocation.indexOf(searchId)

    if (positionId !== -1) {
      resultId = windowLocation.substring(positionId + searchId.length).trim()
    }

    viewer(resultId)
    setActiveSubPanel(resultId)
  }, [])
  useEffect(() => {
    if (localStorage.getItem('view')) {
      // TODO:: FOR AASHIR TO FIX
      const localExistingData = JSON.parse(localStorage.getItem('view'))
      setLocalData(localExistingData)
    }
  })

  return (
    <>
      {contextHolder}
      <Collapse className="w-full mt-0 py-0" defaultActiveKey={activeKey}>
        {data.map((topicGroup, index) => {
          if (index !== 0) {
            return (
              <Panel
                className={`w-full ${mainColor[index - 1]}`}
                header={topicGroup[0].B}
                key={index}
              >
                <Collapse size="small" defaultActiveKey={activeSubPanel}>
                  {topicGroup.map((topic, subIndex) => {
                    const spliter = topic.C.split(' ')
                    const id = spliter.join('-') + `&&index=0${subIndex}${spliter[0]}`
                    const copyLink = (e) => {
                      e.stopPropagation()
                      navigator.clipboard
                        .writeText(`https://desi2abroad.com/germany/#${id}`)
                        .then(() => {
                          message.success('Copied Successfully')
                        })
                      setActiveSubPanel(id)
                    }

                    const headerData = (
                      <div
                        className="w-full flex justify-between"
                        onClick={() => {
                          viewer(id)
                        }}
                      >
                        {topic.C} {topic.F ? '🎥' : ''}{' '}
                        <div>
                          {localData.includes(id) ? (
                            <Button style={{ backgroundColor: 'green' }} className="text-white">
                              <FaCheck />
                            </Button>
                          ) : null}
                          <Button onClick={copyLink}>
                            <TiArrowForward />
                          </Button>
                        </div>
                      </div>
                    )

                    return (
                      <Panel
                        className={`w-full ${subColor[index - 1]}`}
                        header={headerData}
                        key={id}
                        id={id}
                      >
                        <div>
                          <div dangerouslySetInnerHTML={{ __html: topic.E }} />
                        </div>
                        <br />
                        {topic.F?.length > 0 && (
                          <>
                            <p>
                              <strong>Video Link:</strong>{' '}
                              {youtubeUrlToEmbedUrl(topic.F).map((convertedUrl, key) => (
                                <iframe
                                  className="bg-black w-full h-[400px] my-4"
                                  key={key}
                                  src={convertedUrl}
                                  sandbox="allow-scripts allow-same-origin"
                                  title={topic.C}
                                />
                              ))}
                            </p>
                          </>
                        )}
                      </Panel>
                    )
                  })}
                </Collapse>
              </Panel>
            )
          }
        })}
      </Collapse>
    </>
  )
}

export default BubbleListCollapse
