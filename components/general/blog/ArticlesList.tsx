'use client'

import React, { ReactNode } from 'react'
import { Divider, List } from 'antd'
import { Blog } from '.contentlayer/generated/types'
import { CoreContent, allCoreContent, sortPosts } from 'pliny/utils/contentlayer'
import { allBlogs } from 'contentlayer/generated'

export type TypeOfArticles = 'all' | 'germany'

const postsToListConverter = (posts: CoreContent<Blog>[]) => {
  return posts.map((post) => {
    return (
      <a href={post.path} key={post.path}>
        {post.title}
      </a>
    )
  })
}

interface ArticlesListProps {
  articleType: TypeOfArticles
}

function ArticlesList({ articleType }: ArticlesListProps) {
  const posts = allCoreContent(sortPosts(allBlogs))

  if (articleType !== 'all') {
    posts.filter((item) => item.tags.includes(articleType))
  }

  return (
    <>
      <Divider orientation="left">Our Latest Hacks</Divider>
      <List
        size="small"
        //   header={<div>Header</div>}
        //   footer={<div>Footer</div>}
        //   bordered
        dataSource={postsToListConverter(posts)}
        renderItem={(item) => <List.Item>{item as ReactNode}</List.Item>}
      />
    </>
  )
}

export default ArticlesList
