'use client'

import { useState } from 'react'
import Layout from '../components/layout'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export default function Forums() {
  const [posts, setPosts] = useState([
    {
      id: 1,
      title: "Tips for landing your first job",
      content: "As a recent graduate, I found these strategies helpful...",
      author: "Ujjwal Sinha",
      avatar: "/placeholder.svg?height=40&width=40",
      comments: 5,
      likes: 12,
    },
    {
      id: 2,
      title: "Transitioning from academia to industry",
      content: "After 5 years in research, here's what I learned about moving to the private sector...",
      author: "John Smith",
      avatar: "/placeholder.svg?height=40&width=40",
      comments: 8,
      likes: 20,
    },
  ])

  const [newPost, setNewPost] = useState({ title: '', content: '' })

  const handleNewPost = (e: React.FormEvent) => {
    e.preventDefault()
    const post = {
      id: posts.length + 1,
      ...newPost,
      author: "Current User",
      avatar: "/placeholder.svg?height=40&width=40",
      comments: 0,
      likes: 0,
    }
    setPosts([post, ...posts])
    setNewPost({ title: '', content: '' })
  }

  return (
    <Layout>
      <h1 className="text-3xl font-bold mb-6">Discussion Forums</h1>
      
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Create a New Post</CardTitle>
          <CardDescription>Share your thoughts or ask a question</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleNewPost} className="space-y-4">
            <Input
              placeholder="Post Title"
              value={newPost.title}
              onChange={(e) => setNewPost({...newPost, title: e.target.value})}
            />
            <Textarea
              placeholder="Post Content"
              value={newPost.content}
              onChange={(e) => setNewPost({...newPost, content: e.target.value})}
            />
            <Button type="submit">Create Post</Button>
          </form>
        </CardContent>
      </Card>

      <div className="space-y-6">
        {posts.map((post) => (
          <Card key={post.id}>
            <CardHeader>
              <div className="flex items-center space-x-4">
                <Avatar>
                  <AvatarImage src={post.avatar} alt={post.author} />
                  <AvatarFallback>{post.author[0]}</AvatarFallback>
                </Avatar>
                <div>
                  <CardTitle>{post.title}</CardTitle>
                  <CardDescription>Posted by {post.author}</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <p>{post.content}</p>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button variant="outline">
                💬 {post.comments} Comments
              </Button>
              <Button variant="outline">
                👍 {post.likes} Likes
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </Layout>
  )
}