import Layout from './components/layout'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from 'next/link'

export default function Home() {
  return (
    <Layout>
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold mb-4">Welcome to AlumniConnect</h1>
        <p className="text-xl text-muted-foreground">Bridging the gap between alumni and students</p>
      </div>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <Card>
          <CardHeader>
            <CardTitle>Discussion Forums</CardTitle>
            <CardDescription>Engage in meaningful conversations</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="mb-4">Connect with peers and alumni to share ideas and experiences.</p>
            <Button asChild><Link href="/forums">Explore Forums</Link></Button>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Mentorship Programs</CardTitle>
            <CardDescription>Learn from experienced professionals</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="mb-4">Find a mentor to guide you in your career journey.</p>
            <Button asChild><Link href="/mentorship">Find a Mentor</Link></Button>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Career Guidance</CardTitle>
            <CardDescription>Shape your professional future</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="mb-4">Get expert advice on career paths and job opportunities.</p>
            <Button asChild><Link href="/career">Explore Careers</Link></Button>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Placement Assistance</CardTitle>
            <CardDescription>Land your dream job</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="mb-4">Access resources and support for your job search.</p>
            <Button asChild><Link href="/career">Get Assistance</Link></Button>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Academic Support</CardTitle>
            <CardDescription>Excel in your studies</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="mb-4">Connect with tutors and access study resources.</p>
            <Button asChild><Link href="/academic-support">Get Support</Link></Button>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Events</CardTitle>
            <CardDescription>Network and learn</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="mb-4">Participate in alumni meetups, webinars, and more.</p>
            <Button asChild><Link href="/events">View Events</Link></Button>
          </CardContent>
        </Card>
      </div>
    </Layout>
  )
}