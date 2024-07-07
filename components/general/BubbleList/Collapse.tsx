'use client'
import { Collapse, message, Button } from 'antd'
import { TiArrowForward } from 'react-icons/ti'

const { Panel } = Collapse

const BubbleListCollapse = ({ stringifiedData }) => {
  const data = JSON.parse(stringifiedData)
  const [messageApi, contextHolder] = message.useMessage()
  const activeKey = ['1', '2', '3', '4', '5', '6']
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

  return (
    <>
      <Collapse className="w-full mt-0 py-0" defaultActiveKey={activeKey}>
        {data.map((topicGroup, index) => {
          if (index != 0) {
            return (
              <Panel
                className={`w-full ${mainColor[index - 1]}`}
                header={topicGroup[0].B}
                key={index}
              >
                <Collapse size="small">
                  {topicGroup.map((topic, subIndex) => {
                    const spliter = topic.C.split(' ')
                    const id = spliter.join('-')
                    const copyLink = () => {
                      navigator.clipboard
                        .writeText(`https://desi2abroad.com/germany/#${id}`)
                        .then(() => {
                          message.success('Copied SuccessFully')
                        })
                    }
                    const headerData = (
                      <div className="w-full flex justify-between">
                        {topic.C} {topic.F ? '🎥' : ''}{' '}
                        <Button>
                          <TiArrowForward onClick={copyLink} />
                        </Button>
                      </div>
                    )
                    return (
                      <Panel
                        className={`w-full ${subColor[index - 1]}`}
                        header={headerData}
                        key={`0${subIndex}`}
                        id={id}
                      >
                        <div>
                          <div dangerouslySetInnerHTML={{ __html: topic.E }} />
                        </div>
                        <br />
                        {topic.F?.length > 0 && (
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
