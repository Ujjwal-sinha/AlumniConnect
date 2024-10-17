'use client'

import { useState } from 'react'
import Layout from '../components/layout'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"

export default function Mentorship() {
  const [mentors, setMentors] = useState([
    {
      id: 1,
      name: "Alice Johnson",
      title: "Senior Software Engineer at Tech Corp",
      avatar: "/placeholder.svg?height=80&width=80",
      expertise: ["Career Guidance", "Technical Skills", "Interview Prep"],
      availability: "2 slots available",
    },
    {
      id: 2,
      name: "Bob Williams",
      title: "Marketing Director at Brand Co",
      avatar: "/placeholder.svg?height=80&width=80",
      expertise: ["Marketing Strategy", "Personal Branding", "Networking"],
      availability: "1 slot available",
    },
  ])

  return (
    <Layout>
      <h1 className="text-3xl font-bold mb-6">Mentorship Programs</h1>
      
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {mentors.map((mentor) => (
          <Card key={mentor.id}>
            <CardHeader>
              <div className="flex items-center space-x-4">
                <Avatar className="h-20 w-20">
                  <AvatarImage src={mentor.avatar} alt={mentor.name} />
                  <AvatarFallback>{mentor.name[0]}</AvatarFallback>
                </Avatar>
                <div>
                  <CardTitle>{mentor.name}</CardTitle>
                  <CardDescription>{mentor.title}</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <div className="font-semibold">Expertise:</div>
                <div className="flex flex-wrap gap-2">
                  {mentor.expertise.map((skill, index) => (
                    <Badge key={index} variant="secondary">{skill}</Badge>
                  ))}
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex justify-between">
              <div className="text-sm text-muted-foreground">{mentor.availability}</div>
              <Button>Request Mentorship</Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </Layout>
  )
}