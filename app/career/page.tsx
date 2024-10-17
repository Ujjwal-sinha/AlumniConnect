'use client'

import { useState } from 'react'
import Layout from '../components/layout'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Briefcase, MapPin, Calendar } from 'lucide-react'

export default function Career() {
  const [activeTab, setActiveTab] = useState("jobs")
  const [searchQuery, setSearchQuery] = useState("")

  const jobs = [
    { id: 1, title: "Software Engineer", company: "Tech Corp", location: "San Francisco, CA", type: "Full-time" },
    { id: 2, title: "Data Analyst", company: "Data Insights Inc.", location: "New York, NY", type: "Contract" },
    { id: 3, title: "Product Manager", company: "Innovate Co.", location: "Austin, TX", type: "Full-time" },
  ]

  const events = [
    { id: 1, title: "Career Fair 2023", date: "2023-09-15", location: "University Campus" },
    { id: 2, title: "Resume Writing Workshop", date: "2023-08-20", location: "Online" },
    { id: 3, title: "Interview Skills Seminar", date: "2023-09-01", location: "Career Center" },
  ]

  const resources = [
    { id: 1, title: "Resume Templates", type: "Document", link: "#" },
    { id: 2, title: "Interview Preparation Guide", type: "PDF", link: "#" },
    { id: 3, title: "Networking Strategies", type: "Video", link: "#" },
  ]

  const filteredJobs = jobs.filter(job => 
    job.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    job.company.toLowerCase().includes(searchQuery.toLowerCase())
  )

  const filteredEvents = events.filter(event => 
    event.title.toLowerCase().includes(searchQuery.toLowerCase())
  )

  const filteredResources = resources.filter(resource => 
    resource.title.toLowerCase().includes(searchQuery.toLowerCase())
  )

  return (
    <Layout>
      <div className="container mx-auto p-4">
        <h1 className="text-3xl font-bold mb-6">Career Center</h1>

        <div className="mb-6">
          <Input
            type="text"
            placeholder="Search jobs, events, or resources..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full"
          />
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab}>
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="jobs">Job Listings</TabsTrigger>
            <TabsTrigger value="events">Career Events</TabsTrigger>
            <TabsTrigger value="resources">Career Resources</TabsTrigger>
          </TabsList>

          <TabsContent value="jobs">
            <Card>
              <CardHeader>
                <CardTitle>Job Listings</CardTitle>
                <CardDescription>Explore current job opportunities</CardDescription>
              </CardHeader>
              <CardContent>
                <ScrollArea className="h-[400px]">
                  {filteredJobs.map((job) => (
                    <Card key={job.id} className="mb-4">
                      <CardHeader>
                        <CardTitle className="text-lg">{job.title}</CardTitle>
                        <CardDescription>{job.company}</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="flex items-center space-x-2">
                          <MapPin className="h-4 w-4" />
                          <span>{job.location}</span>
                        </div>
                        <Badge className="mt-2">{job.type}</Badge>
                      </CardContent>
                      <CardFooter>
                        <Button>Apply Now</Button>
                      </CardFooter>
                    </Card>
                  ))}
                </ScrollArea>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="events">
            <Card>
              <CardHeader>
                <CardTitle>Career Events</CardTitle>
                <CardDescription>Upcoming career fairs and workshops</CardDescription>
              </CardHeader>
              <CardContent>
                <ScrollArea className="h-[400px]">
                  {filteredEvents.map((event) => (
                    <Card key={event.id} className="mb-4">
                      <CardHeader>
                        <CardTitle className="text-lg">{event.title}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="flex items-center space-x-2 mb-2">
                          <Calendar className="h-4 w-4" />
                          <span>{event.date}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <MapPin className="h-4 w-4" />
                          <span>{event.location}</span>
                        </div>
                      </CardContent>
                      <CardFooter>
                        <Button>Register</Button>
                      </CardFooter>
                    </Card>
                  ))}
                </ScrollArea>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="resources">
            <Card>
              <CardHeader>
                <CardTitle>Career Resources</CardTitle>
                <CardDescription>Helpful materials for your job search</CardDescription>
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
                            <Briefcase className="mr-2 h-4 w-4" /> Access Resource
                          </a>
                        </Button>
                      </CardFooter>
                    </Card>
                  ))}
                </ScrollArea>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </Layout>
  )
}