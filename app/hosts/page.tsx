import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Search, Users, Calendar, Star, MessageSquare } from "lucide-react"
import Link from "next/link"

// Mock data for hosts
const hosts = [
  {
    id: "1",
    name: "Sarah Johnson",
    title: "Food Tour Guide",
    description: "Culinary expert specializing in local food tours and restaurant crawls.",
    rating: 4.9,
    reviews: 87,
    events: 12,
    attendees: 240,
    tags: ["Food Tours", "Restaurant Crawls", "Culinary"],
    image: "/placeholder.svg?height=200&width=200",
    nextEvent: {
      title: "Downtown Food Tour",
      date: "2025-04-05T14:00:00",
    },
  },
  {
    id: "2",
    name: "Michael Chen",
    title: "Social Mixer Host",
    description: "Creating inclusive social events designed to help people make new connections.",
    rating: 4.8,
    reviews: 64,
    events: 18,
    attendees: 320,
    tags: ["Mixers", "Networking", "Social Games"],
    image: "/placeholder.svg?height=200&width=200",
    nextEvent: {
      title: "Newcomers Mixer Night",
      date: "2025-04-03T19:00:00",
    },
  },
  {
    id: "3",
    name: "Emma Rodriguez",
    title: "Art & Culture Guide",
    description: "Art historian leading gallery tours, paint nights, and creative workshops.",
    rating: 4.7,
    reviews: 52,
    events: 9,
    attendees: 180,
    tags: ["Art Tours", "Paint Nights", "Galleries"],
    image: "/placeholder.svg?height=200&width=200",
    nextEvent: {
      title: "Modern Art Gallery Tour",
      date: "2025-04-06T13:00:00",
    },
  },
  {
    id: "4",
    name: "David Wilson",
    title: "Bar Crawl Organizer",
    description: "Creating themed bar crawls that showcase the best local breweries and pubs.",
    rating: 4.6,
    reviews: 78,
    events: 15,
    attendees: 350,
    tags: ["Bar Crawls", "Brewery Tours", "Nightlife"],
    image: "/placeholder.svg?height=200&width=200",
    nextEvent: {
      title: "Craft Brewery Crawl",
      date: "2025-04-04T18:00:00",
    },
  },
  {
    id: "5",
    name: "Olivia Park",
    title: "Dance Instructor",
    description: "Professional dancer hosting dance classes and social dance events for all levels.",
    rating: 4.9,
    reviews: 91,
    events: 20,
    attendees: 280,
    tags: ["Dance Classes", "Salsa", "Social Dancing"],
    image: "/placeholder.svg?height=200&width=200",
    nextEvent: {
      title: "Beginner Salsa Night",
      date: "2025-04-07T19:30:00",
    },
  },
  {
    id: "6",
    name: "James Taylor",
    title: "Game Night Host",
    description: "Board game enthusiast organizing game nights for strategy and party games.",
    rating: 4.7,
    reviews: 43,
    events: 11,
    attendees: 190,
    tags: ["Board Games", "Game Nights", "Strategy Games"],
    image: "/placeholder.svg?height=200&width=200",
    nextEvent: {
      title: "Strategy Game Night",
      date: "2025-04-08T18:00:00",
    },
  },
]

export default function HostsPage() {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleDateString("en-US", { weekday: "short", month: "short", day: "numeric" })
  }

  return (
    <div className="min-h-screen bg-background">
      <main className="container mx-auto px-4 py-6">
        <div className="flex flex-col gap-6">
          <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
            <div>
              <h1 className="text-3xl font-bold tracking-tight">Event Hosts</h1>
              <p className="text-muted-foreground">Connect with local guides and hosts for unique experiences</p>
            </div>
            <Link href="/hosts/apply">
              <Button>Become a Host</Button>
            </Link>
          </div>

          <div className="relative">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input placeholder="Search hosts by name, type of events, or interests..." className="pl-10 md:max-w-xl" />
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {hosts.map((host) => (
              <Card key={host.id} className="overflow-hidden">
                <CardHeader className="p-4 text-center">
                  <div className="mx-auto mb-2 h-24 w-24 overflow-hidden rounded-full">
                    <img
                      src={host.image || "/placeholder.svg"}
                      alt={host.name}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <CardTitle className="line-clamp-1">{host.name}</CardTitle>
                  <CardDescription className="font-medium text-primary">{host.title}</CardDescription>
                </CardHeader>
                <CardContent className="p-4 pt-0">
                  <p className="mb-3 text-center text-sm text-muted-foreground">{host.description}</p>
                  <div className="mb-3 flex flex-wrap justify-center gap-2">
                    {host.tags.map((tag) => (
                      <Badge key={tag} variant="secondary">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <div className="grid grid-cols-2 gap-2 text-center text-sm">
                    <div className="rounded-md bg-muted p-2">
                      <div className="flex items-center justify-center">
                        <Star className="mr-1 h-4 w-4 fill-yellow-400 text-yellow-400" />
                        <span className="font-medium">{host.rating}</span>
                      </div>
                      <span className="text-xs text-muted-foreground">{host.reviews} reviews</span>
                    </div>
                    <div className="rounded-md bg-muted p-2">
                      <div className="flex items-center justify-center">
                        <Calendar className="mr-1 h-4 w-4 text-primary" />
                        <span className="font-medium">{host.events}</span>
                      </div>
                      <span className="text-xs text-muted-foreground">Events hosted</span>
                    </div>
                    <div className="col-span-2 rounded-md bg-muted p-2">
                      <div className="flex items-center justify-center">
                        <Users className="mr-1 h-4 w-4 text-primary" />
                        <span className="font-medium">{host.attendees}+</span>
                      </div>
                      <span className="text-xs text-muted-foreground">People connected</span>
                    </div>
                  </div>

                  <div className="mt-3 rounded-md border p-3">
                    <div className="text-xs font-medium uppercase text-muted-foreground">Next Event</div>
                    <div className="mt-1 font-medium">{host.nextEvent.title}</div>
                    <div className="mt-1 text-sm text-muted-foreground">{formatDate(host.nextEvent.date)}</div>
                  </div>
                </CardContent>
                <CardFooter className="flex items-center justify-between border-t p-4">
                  <Button variant="outline" size="sm" className="h-8 gap-1">
                    <MessageSquare className="h-4 w-4" />
                    <span>Message</span>
                  </Button>
                  <Link href={`/hosts/${host.id}`}>
                    <Button size="sm" className="h-8">
                      View Profile
                    </Button>
                  </Link>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </main>
    </div>
  )
}

