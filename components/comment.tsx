import React, { useEffect, useState } from 'react'
import { Card, Avatar, List, Button, Input } from 'antd'
import { collection, addDoc, Timestamp, query, orderBy, onSnapshot } from 'firebase/firestore'
import { firestoreDB } from 'app/germany/firebaseConfig'
import { onAuthStateChanged, signInWithPopup, GoogleAuthProvider, User } from 'firebase/auth'
import { auth } from 'app/germany/firebaseConfig'

// TODO:: fix build error

const { Meta } = Card

type CommentType = {
  id: string
  name: string
  comment: string
  image: string
}

const Comment = () => {
  const [inputValue, setInputValue] = useState('')
  const [comments, setComments] = useState<CommentType[]>([])
  const [User, setUser] = useState<User>()

  const handleChange = (e) => {
    const { value } = e.target
    setInputValue(value)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (User) {
      try {
        await addDoc(collection(firestoreDB, 'comments'), {
          name: User.displayName,
          image: User.photoURL,
          comment: inputValue,
          completed: true,
          created: Timestamp.now(),
        })
        setInputValue('')
      } catch (err) {
        alert(err)
      }
    } else {
      const provider = new GoogleAuthProvider()
      signInWithPopup(auth, provider)
    }
  }

  useEffect(() => {
    const q = query(collection(firestoreDB, 'comments'), orderBy('created', 'desc'))
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const data = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      })) as CommentType[]
      setComments(data)
    })

    return () => unsubscribe()
  }, [inputValue])

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user)
      } else {
        console.log('User is signed out')
      }
    })
  })

  return (
    <>
      <Card className="w-full m-auto mt-8">
        <Meta
          className="flex"
          avatar={<Avatar src={User && User.photoURL} />}
          title={User && User.displayName}
        />
        <Input
          type="textarea"
          className="my-3"
          name="desc"
          value={inputValue}
          onChange={handleChange}
        />
        <Button onClick={handleSubmit}>Submit</Button>
      </Card>
      <List itemLayout="horizontal" className="my-8">
        {comments &&
          comments.map((comment) => (
            <List.Item key={comment.id}>
              <Meta
                avatar={<Avatar src={comment.image} />}
                title={comment.name}
                description={comment.comment}
              />
            </List.Item>
          ))}
      </List>
    </>
  )
}

export default Comment
