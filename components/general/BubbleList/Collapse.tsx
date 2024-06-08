'use client'
import { Collapse, Typography } from 'antd'
import { useSearchParams } from 'react-router-dom'

const { Panel } = Collapse
const { Text } = Typography

const BubbleListCollapse = ({ stringifiedData }) => {
  const data = JSON.parse(stringifiedData)
  const mainColor = ['bg-yellow-300', 'bg-green-300', 'bg-pink-300', 'bg-blue-400', 'bg-orange-500','bg-gray-500']
  const subColor = ['bg-yellow-100', 'bg-green-100', 'bg-pink-100', 'bg-blue-200', 'bg-orange-200','bg-gray-300']


  const urlConvert = (urls) => {
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
        console.log('Error converting URL:', e)
      }
    }
    return [urls]
  }

  return (
    <>
      <Collapse  className="w-full mt-0 py-0 lg:w-[60%]" defaultActiveKey={['1']}>
        {data.map((topicGroup, index) => {
          if (index != 0) {
            return (
              <Panel className={`w-full ${mainColor[index-1]}`} header={topicGroup[0].B} key={index}>
                <Collapse size="small" >
                  {topicGroup.map((topic, subIndex) => (
                    <Panel className={`w-full ${subColor[index-1]}` } header={topic.C} key={subIndex} >
                      <div>
                        <div dangerouslySetInnerHTML={{ __html: topic.E }} />
                      </div>

                      <br />
                      <p>
                        <strong>Video Link:</strong>{' '}
                        {urlConvert(topic.F).map((convertedUrl) => (
                          <iframe
                            src={convertedUrl}
                            sandbox="allow-scripts allow-same-origin"
                          />
                        ))}
                        
                     
                       
                         
                      </p>
                    </Panel>
                  ))}
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
