import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { MapPin, Calendar, Clock, Star, MessageSquare, Share2, Globe, Phone, Mail } from "lucide-react"
import Link from "next/link"
import { VenueChat } from "@/components/venue-chat"

export default function VenuePage({ params }: { params: { id: string } }) {
  // In a real app, you would fetch venue data based on the ID
  const venue = {
    id: params.id,
    name: "Blue Note Bar",
    description:
      "Live music venue featuring jazz, blues, and indie artists. We host regular events including live performances, open mic nights, and special themed evenings. Our full bar offers craft cocktails, local beers, and a selection of wines.",
    address: "123 Main St, Cityville, ST 12345",
    phone: "(555) 123-4567",
    email: "info@bluenotebar.com",
    website: "www.bluenotebar.com",
    hours: [
      { day: "Monday", hours: "4:00 PM - 12:00 AM" },
      { day: "Tuesday", hours: "4:00 PM - 12:00 AM" },
      { day: "Wednesday", hours: "4:00 PM - 12:00 AM" },
      { day: "Thursday", hours: "4:00 PM - 1:00 AM" },
      { day: "Friday", hours: "4:00 PM - 2:00 AM" },
      { day: "Saturday", hours: "2:00 PM - 2:00 AM" },
      { day: "Sunday", hours: "2:00 PM - 12:00 AM" },
    ],
    rating: 4.7,
    reviews: 128,
    tags: ["Live Music", "Jazz", "Blues", "Indie", "Cocktails", "Bar"],
    image: "/placeholder.svg?height=400&width=800",
    gallery: [
      "/placeholder.svg?height=200&width=300",
      "/placeholder.svg?height=200&width=300",
      "/placeholder.svg?height=200&width=300",
      "/placeholder.svg?height=200&width=300",
    ],
    events: [
      {
        id: "101",
        title: "Jazz Night with The Quartet",
        date: "2025-04-02T19:00:00",
        image: "/placeholder.svg?height=100&width=200",
      },
      {
        id: "102",
        title: "Blues Jam Session",
        date: "2025-04-05T20:00:00",
        image: "/placeholder.svg?height=100&width=200",
      },
      {
        id: "103",
        title: "Indie Showcase: Local Artists",
        date: "2025-04-09T19:30:00",
        image: "/placeholder.svg?height=100&width=200",
      },
      {
        id: "104",
        title: "Open Mic Night",
        date: "2025-04-12T18:00:00",
        image: "/placeholder.svg?height=100&width=200",
      },
      {
        id: "105",
        title: "Vinyl Night: Bring Your Records",
        date: "2025-04-16T19:00:00",
        image: "/placeholder.svg?height=100&width=200",
      },
    ],
  }

  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleDateString("en-US", { weekday: "short", month: "short", day: "numeric" })
  }

  const formatTime = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleTimeString("en-US", { hour: "numeric", minute: "2-digit" })
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="relative h-64 w-full md:h-80 lg:h-96">
        <img src={venue.image || "/placeholder.svg"} alt={venue.name} className="h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent"></div>
        <div className="absolute bottom-0 left-0 p-4 md:p-6">
          <h1 className="text-3xl font-bold text-white md:text-4xl">{venue.name}</h1>
          <div className="mt-2 flex items-center">
            <MapPin className="mr-1 h-4 w-4 text-white" />
            <span className="text-sm text-white">{venue.address}</span>
          </div>
        </div>
      </div>

      <main className="container mx-auto px-4 py-6">
        <div className="flex flex-col gap-6 lg:flex-row">
          <div className="flex-1">
            <Tabs defaultValue="about">
              <TabsList className="mb-4">
                <TabsTrigger value="about">About</TabsTrigger>
                <TabsTrigger value="events">Events</TabsTrigger>
                <TabsTrigger value="chat">Chat Room</TabsTrigger>
              </TabsList>

              <TabsContent value="about" className="space-y-6">
                <Card>
                  <CardContent className="p-6">
                    <div className="flex flex-col gap-4">
                      <div>
                        <h2 className="text-xl font-semibold">About {venue.name}</h2>
                        <p className="mt-2 text-muted-foreground">{venue.description}</p>
                      </div>

                      <div className="flex flex-wrap gap-2">
                        {venue.tags.map((tag) => (
                          <Badge key={tag} variant="secondary">
                            {tag}
                          </Badge>
                        ))}
                      </div>

                      <div className="flex items-center">
                        <Star className="mr-1 h-5 w-5 fill-yellow-400 text-yellow-400" />
                        <span className="font-medium">{venue.rating}</span>
                        <span className="ml-1 text-muted-foreground">({venue.reviews} reviews)</span>
                      </div>

                      <div className="grid gap-4 md:grid-cols-2">
                        <div>
                          <h3 className="font-medium">Contact Information</h3>
                          <div className="mt-2 space-y-2">
                            <div className="flex items-center text-sm">
                              <MapPin className="mr-2 h-4 w-4 text-muted-foreground" />
                              <span>{venue.address}</span>
                            </div>
                            <div className="flex items-center text-sm">
                              <Phone className="mr-2 h-4 w-4 text-muted-foreground" />
                              <span>{venue.phone}</span>
                            </div>
                            <div className="flex items-center text-sm">
                              <Mail className="mr-2 h-4 w-4 text-muted-foreground" />
                              <span>{venue.email}</span>
                            </div>
                            <div className="flex items-center text-sm">
                              <Globe className="mr-2 h-4 w-4 text-muted-foreground" />
                              <a
                                href={`https://${venue.website}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-primary hover:underline"
                              >
                                {venue.website}
                              </a>
                            </div>
                          </div>
                        </div>

                        <div>
                          <h3 className="font-medium">Hours of Operation</h3>
                          <div className="mt-2 space-y-1">
                            {venue.hours.map((item) => (
                              <div key={item.day} className="flex justify-between text-sm">
                                <span className="font-medium">{item.day}</span>
                                <span className="text-muted-foreground">{item.hours}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>

                      <div>
                        <h3 className="font-medium">Gallery</h3>
                        <div className="mt-2 grid grid-cols-2 gap-2 sm:grid-cols-4">
                          {venue.gallery.map((image, index) => (
                            <img
                              key={index}
                              src={image || "/placeholder.svg"}
                              alt={`${venue.name} gallery image ${index + 1}`}
                              className="aspect-video rounded-md object-cover"
                            />
                          ))}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="events" className="space-y-6">
                <Card>
                  <CardContent className="p-6">
                    <h2 className="mb-4 text-xl font-semibold">Upcoming Events</h2>
                    <div className="space-y-4">
                      {venue.events.map((event) => (
                        <div key={event.id} className="flex gap-4 rounded-lg border p-4">
                          <img
                            src={event.image || "/placeholder.svg"}
                            alt={event.title}
                            className="h-16 w-24 rounded-md object-cover"
                          />
                          <div className="flex flex-1 flex-col justify-between">
                            <div>
                              <h3 className="font-medium">{event.title}</h3>
                              <div className="mt-1 flex items-center text-sm text-muted-foreground">
                                <Calendar className="mr-1 h-4 w-4" />
                                <span>{formatDate(event.date)}</span>
                                <Clock className="ml-3 mr-1 h-4 w-4" />
                                <span>{formatTime(event.date)}</span>
                              </div>
                            </div>
                            <Link href={`/events/${event.id}`}>
                              <Button size="sm" variant="outline" className="mt-2">
                                View Details
                              </Button>
                            </Link>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="chat">
                <Card>
                  <CardContent className="p-0">
                    <VenueChat venueId={venue.id} venueName={venue.name} />
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>

          <div className="w-full lg:w-80">
            <div className="sticky top-20 space-y-4">
              <Card>
                <CardContent className="p-4">
                  <div className="space-y-4">
                    <Button className="w-full gap-2">
                      <MessageSquare className="h-4 w-4" />
                      Join Chat Room
                    </Button>
                    <Button variant="outline" className="w-full gap-2">
                      <Share2 className="h-4 w-4" />
                      Share Venue
                    </Button>
                    <div className="rounded-lg border p-4">
                      <h3 className="font-medium">Next Event</h3>
                      {venue.events.length > 0 && (
                        <div className="mt-2">
                          <p className="font-medium">{venue.events[0].title}</p>
                          <div className="mt-1 flex items-center text-sm text-muted-foreground">
                            <Calendar className="mr-1 h-4 w-4" />
                            <span>{formatDate(venue.events[0].date)}</span>
                          </div>
                          <div className="mt-1 flex items-center text-sm text-muted-foreground">
                            <Clock className="mr-1 h-4 w-4" />
                            <span>{formatTime(venue.events[0].date)}</span>
                          </div>
                          <Link href={`/events/${venue.events[0].id}`}>
                            <Button size="sm" className="mt-2 w-full">
                              View Event
                            </Button>
                          </Link>
                        </div>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

