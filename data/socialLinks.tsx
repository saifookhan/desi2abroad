import { WhatsAppOutlined, YoutubeFilled, FacebookFilled } from '@ant-design/icons'

const whatsappIcon = <WhatsAppOutlined style={{ fontSize: '28px' }} />
const youtubeIcon = <YoutubeFilled style={{ fontSize: '28px' }} />
const facebookIcon = <FacebookFilled style={{ fontSize: '28px' }} />

const socialChannels = [
  {
    categoryName: 'Germany',
    links: [
      {
        image: whatsappIcon,
        imageAlt: 'Study in Germany/EU 2024 🇩🇪',
        title: 'Study in Germany/EU 2024 🇩🇪',
        subTitle: '894 members',
        type: 'Whatsapp',
        link: 'https://chat.whatsapp.com/L5PTHzY44WfEsJNfB05k9v',
      },
      {
        image: <WhatsAppOutlined style={{ fontSize: '28px' }} />,
        imageAlt: 'Work Germany/EU 🇩🇪',
        title: 'Work Germany/EU 🇩🇪',
        subTitle: '569 members',
        type: 'Whatsapp',
        link: 'https://chat.whatsapp.com/J6WeoQ4kSlF4k6WoYcm81w',
      },
      {
        image: whatsappIcon,
        imageAlt: 'Learn Daily German 🇩🇪',
        title: 'Learn Daily German 🇩🇪',
        subTitle: '510 members',
        type: 'Whatsapp',
        link: 'https://chat.whatsapp.com/Cmq0jMYcLLEI9DrfEmTPGc',
      },
    ],
  },
  {
    categoryName: 'YouTube & Facebook',
    links: [
      {
        image: facebookIcon,
        imageAlt: 'Work/Study in EU/Germany - Support Community',
        title: 'Work/Study in EU/Germany - Support Community',
        subTitle: '3.8K members',
        type: 'Facebook',
        link: 'https://www.facebook.com/groups/saifooexplores.community',
      },
      {
        image: youtubeIcon,
        imageAlt: 'Desi 2 Abroad - YouTube Channel',
        title: 'Desi2Abroad - YouTube Channel',
        subTitle: '2.5K subscribers',
        type: 'YouTube',
        link: 'https://openinyoutube.com/@desi2abroad',
      },
    ],
  },
  {
    categoryName: 'More Communities',
    links: [
      {
        image: whatsappIcon,
        imageAlt: 'Live Q&A Sessions Invite',
        title: 'Live Q&A Sessions Invite',
        subTitle: '754 members',
        type: 'Whatsapp',
        link: 'https://chat.whatsapp.com/LYUxWCErPtUG5HdMOdUjky',
      },
      {
        image: whatsappIcon,
        imageAlt: 'Study in US/UK/Canada/Australia',
        title: 'Study in US/UK/Canada/Australia',
        subTitle: '193 members',
        type: 'Whatsapp',
        link: 'https://chat.whatsapp.com/Dlud50ZwbAL6bdzhQpxRao',
      },
    ],
  },
]

export default socialChannels
