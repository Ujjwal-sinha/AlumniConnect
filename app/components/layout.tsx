'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { MessageCircle, X, Menu } from 'lucide-react'

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <nav className="bg-primary text-primary-foreground p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold">AlumniConnect</Link>
    
        <div className="hidden md:flex space-x-4">
          <Link href="/forums" className="hover:underline">Forums</Link>
          <Link href="/mentorship" className="hover:underline">Mentorship</Link>
          <Link href="/career" className="hover:underline">Career</Link>
          <Link href="/events" className="hover:underline">Events</Link>
          <Link href="/academic-support" className="hover:underline">Academic Support</Link>
        </div>
        <Button variant="outline" className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          <Menu className="w-6 h-6" />
          <span className="sr-only">Toggle menu</span>
        </Button>
      </div>
      {isMenuOpen && (
        <div className="md:hidden mt-4 space-y-2">
          <Link href="/forums" className="block hover:underline">Forums</Link>
          <Link href="/mentorship" className="block hover:underline">Mentorship</Link>
          <Link href="/career" className="block hover:underline">Career</Link>
          <Link href="/events" className="block hover:underline">Events</Link>
          <Link href="/academic-support" className="block hover:underline">Academic Support</Link>
        </div>
      )}
    </nav>
  )
}

const Footer = () => (
  <footer className="bg-orange-100 text-muted-foreground p-4 ">
    <div className="container mx-auto text-center">
      <p>&copy; 2024 AlumniConnectnp. All rights reserved.</p>
    </div>
  </footer>
)

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState([
    { role: 'bot', content: 'Hello! How can I assist you today?' },
  ])
  const [input, setInput] = useState('')

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault()
    if (input.trim() === '') return

    setMessages([...messages, { role: 'user', content: input }])
    setInput('')

    // Simulate bot response (replace with actual AI integration)
    setTimeout(() => {
      setMessages(prevMessages => [
        ...prevMessages,
        { role: 'bot', content: `I understand you're asking about "${input}". How can I help you with that?` }
      ])
    }, 1000)
  }

  return (
    <div className="fixed bottom-4 right-4 z-50">
      {!isOpen && (
        <Button onClick={() => setIsOpen(true)} className="rounded-full w-12 h-12">
          <MessageCircle className="w-6 h-6" />
          <span className="sr-only">Open chat</span>
        </Button>
      )}
      {isOpen && (
        <div className="bg-background border rounded-lg shadow-lg w-80 h-96 flex flex-col">
          <div className="flex justify-between items-center p-4 border-b">
            <h2 className="font-semibold">AI Assistant</h2>
            <Button variant="ghost" size="icon" onClick={() => setIsOpen(false)}>
              <X className="w-4 h-4" />
              <span className="sr-only">Close chat</span>
            </Button>
          </div>
          <ScrollArea className="flex-grow p-4">
            {messages.map((message, index) => (
              <div key={index} className={`flex ${message.role === 'bot' ? 'justify-start' : 'justify-end'} mb-4`}>
                <div className={`flex items-end ${message.role === 'bot' ? 'flex-row' : 'flex-row-reverse'}`}>
                  <Avatar className="h-8 w-8">
                    <AvatarImage src={message.role === 'bot' ? "/placeholder.svg?height=32&width=32" : undefined} />
                    <AvatarFallback>{message.role === 'bot' ? 'AI' : 'You'}</AvatarFallback>
                  </Avatar>
                  <div className={`mx-2 py-2 px-3 rounded-lg ${message.role === 'bot' ? 'bg-muted' : 'bg-primary text-primary-foreground'}`}>
                    {message.content}
                  </div>
                </div>
              </div>
            ))}
          </ScrollArea>
          <form onSubmit={handleSendMessage} className="p-4 border-t">
            <div className="flex space-x-2">
              <Input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Type your message..."
                className="flex-grow"
              />
              <Button type="submit">Send</Button>
            </div>
          </form>
        </div>
      )}
    </div>
  )
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-grow container mx-auto p-4">
        {children}
      </main>
      <Footer />
      <Chatbot />
    </div>
  )
}