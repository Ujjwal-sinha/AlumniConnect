'use client'

import { useState } from 'react'
import Layout from '../components/layout'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Textarea } from "@/components/ui/textarea"
import { BookOpen, Users, MessageSquare } from 'lucide-react'

export default function AcademicSupport() {
  const [activeTab, setActiveTab] = useState("resources")
  const [searchQuery, setSearchQuery] = useState("")

  const resources = [
    { id: 1, title: "Introduction to Computer Science", type: "Course Material", link: "#" },
    { id: 2, title: "Advanced Mathematics for Engineers", type: "Textbook", link: "#" },
    { id: 3, title: "Effective Study Techniques", type: "Guide", link: "#" },
    { id: 4, title: "Research Methodology Workshop", type: "Video", link: "#" },
    { id: 5, title: "Academic Writing Skills", type: "Online Course", link: "#" },
  ]

  const tutors = [
    { id: 1, name: "Dr. Emily Chen", subject: "Computer Science", avatar: "/placeholder.svg?height=40&width=40" },
    { id: 2, name: "Prof. Michael Brown", subject: "Mathematics", avatar: "/placeholder.svg?height=40&width=40" },
    { id: 3, name: "Dr. Sarah Johnson", subject: "Physics", avatar: "/placeholder.svg?height=40&width=40" },
    { id: 4, name: "Prof. David Lee", subject: "Engineering", avatar: "/placeholder.svg?height=40&width=40" },
  ]

  const forumPosts = [
    { id: 1, title: "Tips for managing academic stress", author: "Jane Doe", replies: 5 },
    { id: 2, title: "How to approach difficult math problems", author: "John Smith", replies: 8 },
    { id: 3, title: "Best practices for writing research papers", author: "Emma Wilson", replies: 3 },
  ]

  const filteredResources = resources.filter(resource => 
    resource.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    resource.type.toLowerCase().includes(searchQuery.toLowerCase())
  )

  const filteredTutors = tutors.filter(tutor => 
    tutor.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    tutor.subject.toLowerCase().includes(searchQuery.toLowerCase())
  )

  const filteredForumPosts = forumPosts.filter(post => 
    post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    post.author.toLowerCase().includes(searchQuery.toLowerCase())
  )

  return (
    <Layout>
      <div className="container mx-auto p-4">
        <h1 className="text-3xl font-bold mb-6">Academic Support</h1>

        <div className="mb-6">
          <Input
            type="text"
            placeholder="Search resources, tutors, or forum posts..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full"
          />
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab}>
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="resources">Study Resources</TabsTrigger>
            <TabsTrigger value="tutoring">Tutoring Services</TabsTrigger>
            <TabsTrigger value="forum">Academic Forum</TabsTrigger>
          </TabsList>

          <TabsContent value="resources">
            <Card>
              <CardHeader>
                <CardTitle>Study Resources</CardTitle>
                <CardDescription>Access course materials, textbooks, and study guides</CardDescription>
              </CardHeader>
              <CardContent>
                <ScrollArea className="h-[400px]">
                  {filteredResources.map((resource) => (
                    <Card key={resource.id} className="mb-4">
                      <CardHeader>
                        <CardTitle className="text-lg">{resource.title}</CardTitle>
                        <CardDescription>{resource.type}</CardDescription>
                      </CardHeader>
                      <CardFooter>
                        <Button asChild>
                          <a href={resource.link} target="_blank" rel="noopener noreferrer">
                            <BookOpen className="mr-2 h-4 w-4" /> Access Resource
                          </a>
                        </Button>
                      </CardFooter>
                    </Card>
                  ))}
                </ScrollArea>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="tutoring">
            <Card>
              <CardHeader>
                <CardTitle>Tutoring Services</CardTitle>
                <CardDescription>Connect with expert tutors for personalized help</CardDescription>
              </CardHeader>
              <CardContent>
                <ScrollArea className="h-[400px]">
                  {filteredTutors.map((tutor) => (
                    <Card key={tutor.id} className="mb-4">
                      <CardHeader>
                        <div className="flex items-center space-x-4">
                          <Avatar>
                            <AvatarImage src={tutor.avatar} alt={tutor.name} />
                            <AvatarFallback>{tutor.name[0]}</AvatarFallback>
                          </Avatar>
                          <div>
                            <CardTitle className="text-lg">{tutor.name}</CardTitle>
                            <CardDescription>{tutor.subject}</CardDescription>
                          </div>
                        </div>
                      </CardHeader>
                      <CardFooter>
                        <Button>
                          <Users className="mr-2 h-4 w-4" /> Schedule Session
                        </Button>
                      </CardFooter>
                    </Card>
                  ))}
                </ScrollArea>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="forum">
            <Card>
              <CardHeader>
                <CardTitle>Academic Forum</CardTitle>
                <CardDescription>Discuss academic topics and get advice from peers</CardDescription>
              </CardHeader>
              <CardContent>
                <ScrollArea className="h-[300px] mb-4">
                  {filteredForumPosts.map((post) => (
                    <Card key={post.id} className="mb-4">
                      <CardHeader>
                        <CardTitle className="text-lg">{post.title}</CardTitle>
                        <CardDescription>Posted by {post.author}</CardDescription>
                      </CardHeader>
                      <CardFooter className="flex justify-between">
                        <Badge variant="secondary">{post.replies} replies</Badge>
                        <Button variant="outline">
                          <MessageSquare className="mr-2 h-4 w-4" /> View Discussion
                        </Button>
                      </CardFooter>
                    </Card>
                  ))}
                </ScrollArea>
                <form className="space-y-4">
                  <Textarea placeholder="Start a new discussion..." />
                  <Button type="submit">Post to Forum</Button>
                </form>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </Layout>
  )
}