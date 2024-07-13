import React, { useState } from 'react'
import { Card, Avatar, List, Button, Input } from 'antd'
import { addDoc, collection, doc } from 'firebase/firestore'
import { firestoreDB } from 'app/germany/firebaseConfig'

const { Meta } = Card

const Comment = () => {
  const [inputValue, setInputValue] = useState({
    title:'',
    img:'',
    desc:''
  }) 

  const data = [
    { title: 'Ant Design Title 1' },
    { title: 'Ant Design Title 2' },
    { title: 'Ant Design Title 3' },
    { title: 'Ant Design Title 4' },
  ]

  const handleChange = (e) => {
    const { name, value } = e.target
    setInputValue((prev) => ({ ...prev, [name]: value }))
  }

  const db = async (title, img, text) => {
    await addDoc(collection(firestoreDB, 'comment'), {
      name: 'hamza',
      img: 'https://api.dicebear.com/7.x/miniavs/svg?seed=1',
      desc: text,
    })
  }
 const handleSubmit = async () => {
   try {
     await db(inputValue.title, inputValue.img, inputValue.desc)
     setInputValue({
       title: '',
       img: '',
       desc: '',
     })
   } catch (err) {
     console.error('Error adding document: ', err)
   }
 }

  return (
    <>
      <Card className="w-full m-auto">
        <Meta
          className="flex"
          avatar={<Avatar src="https://api.dicebear.com/7.x/miniavs/svg?seed=1" />}
          title="hamza"
        />
        <Input
          type="textarea"
          className="my-3"
          name="desc"
          value={inputValue.desc}
          onChange={handleChange}
        />{' '}
        <Button onClick={handleSubmit}>Submit</Button>
      </Card>
      <List
        itemLayout="horizontal"
        dataSource={data}
        renderItem={(item, index) => (
          <List.Item>
            <List.Item.Meta
              avatar={<Avatar src={`https://api.dicebear.com/7.x/miniavs/svg?seed=${index}`} />}
              title={<a href="https://ant.design">{item.title}</a>}
              description="Ant Design, a design language for background applications, is refined by Ant UED Team"
            />
          </List.Item>
        )}
      />
    </>
  )
}

export default Comment
