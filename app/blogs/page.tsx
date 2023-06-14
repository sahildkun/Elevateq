"use client"

import AddPost from '../components/AddPost'
import prisma from '../../prisma/client'
import Post from '../components/Post'
import { useQuery } from '@tanstack/react-query'
import axios from "axios"
import { Key, ReactElement, JSXElementConstructor, ReactFragment, ReactPortal, PromiseLikeOfReactNode } from 'react'
import { Container } from '../components/Container'

import { Hero } from '../components/Hero'


const allPosts = async () => {
  const response = await axios.get("/api/posts/getPosts")
  return response.data
}

export default function Home() {
  
 const data = useQuery<PostsType[]>({
  queryKey: ['posts'],
  queryFn: allPosts,

 })
  if(data.error) return <h2>error </h2>
 if(data.isLoading) return <Hero className='flex items-center justify-center h-screen'>Loading...</Hero>
 
 const posts = data.data
     console.log(posts)
  return (
    <Container >
      <Hero>
      <AddPost/>
      {posts?.map((post: { id: Key | null | undefined; title: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | ReactFragment | ReactPortal | PromiseLikeOfReactNode | null | undefined }) =>
         {
         return (
         <div  key={post.id}>
         <Post
          key={post.id}
          id={post.id}
          name={post.user.name}
          avatar={post.user.image}
          postTitle={post.title}
          // comments={post.comments}
        />
        </div>)})}
    </Hero>
    </Container>
  )
}
