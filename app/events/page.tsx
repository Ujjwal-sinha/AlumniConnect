'use client'

import { useState } from 'react'
import Layout from '../components/layout'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Calendar, Clock, MapPin, Video } from 'lucide-react'

export default function Events() {
  const [events, setEvents] = useState([
    {
      id: 1,
      title: "Tech Industry Insights",
      type: "Webinar",
      date: "2023-07-15",
      time: "14:00",
      speaker: "Jane Doe, CTO at TechGiant",
      description: "Learn about the latest trends in the tech industry and how to prepare for them.",
    },
    {
      id: 2,
      title: "Alumni Networking Mixer",
      type: "In-person",
      date: "2023-07-20",
      time: "18:00",
      location: "University Hall",
      description: "Connect with fellow alumni and expand your professional network.",
    },
    {
      id: 3,
      title: "Career Transition Workshop",
      type: "Hybrid",
      date: "2023-07-25",
      time: "10:00",
      location: "Online & Career Center",
      description: "Strategies and tips for successfully transitioning to a new career path.",
    },
  ])

  return (
    <Layout>
      <h1 className="text-3xl font-bold mb-6">Upcoming Events</h1>
      
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {events.map((event) => (
          <Card key={event.id}>
            <CardHeader>
              <CardTitle>{event.title}</CardTitle>
              <CardDescription>{event.type} Event</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <div className="flex items-center">
                  <Calendar className="mr-2 h-4 w-4" />
                  <span>{event.date}</span>
                </div>
                <div className="flex items-center">
                  <Clock className="mr-2 h-4 w-4" />
                  <span>{event.time}</span>
                </div>
                {event.location && (
                  <div className="flex items-center">
                    <MapPin className="mr-2 h-4 w-4" />
                    <span>{event.location}</span>
                  </div>
                )}
                {event.speaker && (
                  <div className="flex items-center">
                    <Video className="mr-2 h-4 w-4" />
                    <span>{event.speaker}</span>
                  </div>
                )}
                <p className="mt-2">{event.description}</p>
              </div>
            </CardContent>
            <CardFooter>
              <Button className="w-full">Register for Event</Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </Layout>
  )
}