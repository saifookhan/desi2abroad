import React, { useEffect, useState } from 'react'
import { Card, Avatar, List, Button, Input } from 'antd'
import { collection, addDoc, Timestamp, query, orderBy, onSnapshot } from 'firebase/firestore'
import { firestoreDB } from 'app/germany/firebaseConfig'
import { onAuthStateChanged ,signInWithPopup,GoogleAuthProvider} from 'firebase/auth'
import { auth } from 'app/germany/firebaseConfig'


const { Meta } = Card

const Comment = () => {
  const [inputValue, setInputValue] = useState('')
  const [comments, setComments] = useState([])
  const [User,setUser]=useState({})

  const handleChange = (e) => {
    const { value } = e.target
    setInputValue(value)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if(User){
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
    }
    else{
          const provider= new GoogleAuthProvider()
          signInWithPopup(auth,provider)
    }
  }

  useEffect(() => {
    const q = query(collection(firestoreDB, 'comments'), orderBy('created', 'desc'))
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const data = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }))
      setComments(data)
    })

   
    return () => unsubscribe()
  }, [inputValue])

  useEffect(
    ()=>{
      onAuthStateChanged(auth, (user) => {
        if (user) {
          setUser(user)         
          
        } else {
          
          console.log('User is signed out')
        }
      })
    }
  )

  return (
    <>
      <Card className="w-full m-auto mt-8">
        <Meta
          className="flex"
          avatar={<Avatar src={User.photoURL} />}
          title={User.displayName}
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
      <List itemLayout="horizontal" className='my-8'>
        {comments.map((comment) => (
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
