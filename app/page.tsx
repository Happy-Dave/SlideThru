'use client'

import { useState } from 'react'
import { EventsMap } from "@/components/events-map"
import { EventsList } from "@/components/events-list"
import { EventFilters } from "@/components/event-filters"
import { ViewToggle } from "@/components/view-toggle"
import { Button } from "@/components/ui/button"
import { PlusCircle } from 'lucide-react'
import Link from "next/link"

export type EventType = 'music' | 'happy-hour' | 'trivia' | 'karaoke' | 'open-mic' | 'social'

export default function HomePage() {
  const [selectedTypes, setSelectedTypes] = useState<EventType[]>([])
  
  const toggleType = (type: EventType) => {
    setSelectedTypes(prev => 
      prev.includes(type) 
        ? prev.filter(t => t !== type) 
        : [...prev, type]
    )
  }
  
  const clearFilters = () => {
    setSelectedTypes([])
  }
  
  return (
    <div className="min-h-screen bg-background">
      <main className="container mx-auto px-4 py-6">
        <div className="flex flex-col gap-6">
          <div className="flex items-center justify-between">
            <h1 className="text-3xl font-bold tracking-tight">Discover Events Near You</h1>
            <Link href="/events/create">
              <Button className="gap-2">
                <PlusCircle className="h-4 w-4" />
                Host Event
              </Button>
            </Link>
          </div>

          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <EventFilters 
              selectedTypes={selectedTypes} 
              toggleType={toggleType} 
            />
            <ViewToggle />
          </div>

          <div className="grid grid-cols-1 gap-6">
            <EventsMap />
            <EventsList 
              selectedTypes={selectedTypes} 
              clearFilters={clearFilters} 
            />
          </div>
        </div>
      </main>
    </div>
  )
}