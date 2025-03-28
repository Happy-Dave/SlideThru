import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Search, MapPin, Star, MessageSquare } from "lucide-react"
import Link from "next/link"

// Mock data for venues
const venues = [
  {
    id: "1",
    name: "Blue Note Bar",
    description: "Live music venue featuring jazz, blues, and indie artists.",
    address: "123 Main St",
    rating: 4.7,
    reviews: 128,
    tags: ["Live Music", "Jazz", "Cocktails"],
    image: "/placeholder.svg?height=200&width=400",
    events: 5,
  },
  {
    id: "2",
    name: "The Pub",
    description: "Neighborhood pub with trivia nights, sports viewing, and craft beers.",
    address: "456 Oak St",
    rating: 4.5,
    reviews: 96,
    tags: ["Trivia", "Sports", "Craft Beer"],
    image: "/placeholder.svg?height=200&width=400",
    events: 3,
  },
  {
    id: "3",
    name: "Rooftop Lounge",
    description: "Upscale rooftop bar with city views, perfect for networking events.",
    address: "789 High St",
    rating: 4.8,
    reviews: 152,
    tags: ["Rooftop", "Cocktails", "Happy Hour"],
    image: "/placeholder.svg?height=200&width=400",
    events: 4,
  },
  {
    id: "4",
    name: "Sing It Bar",
    description: "Karaoke bar with private rooms and a main stage for performances.",
    address: "101 Voice Ave",
    rating: 4.3,
    reviews: 87,
    tags: ["Karaoke", "Private Rooms", "Drinks"],
    image: "/placeholder.svg?height=200&width=400",
    events: 2,
  },
  {
    id: "5",
    name: "Laugh Factory",
    description: "Comedy club featuring open mic nights and professional comedians.",
    address: "202 Joke St",
    rating: 4.6,
    reviews: 112,
    tags: ["Comedy", "Open Mic", "Entertainment"],
    image: "/placeholder.svg?height=200&width=400",
    events: 3,
  },
  {
    id: "6",
    name: "Game Lounge",
    description: "Board game café with hundreds of games and a full food and drink menu.",
    address: "303 Play Blvd",
    rating: 4.4,
    reviews: 76,
    tags: ["Board Games", "Café", "Social"],
    image: "/placeholder.svg?height=200&width=400",
    events: 2,
  },
]

export default function VenuesPage() {
  return (
    <div className="min-h-screen bg-background">
      <main className="container mx-auto px-4 py-6">
        <div className="flex flex-col gap-6">
          <div className="flex items-center justify-between">
            <h1 className="text-3xl font-bold tracking-tight">Venues</h1>
          </div>

          <div className="relative">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input placeholder="Search venues by name, type, or location..." className="pl-10 md:max-w-xl" />
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {venues.map((venue) => (
              <Card key={venue.id} className="overflow-hidden">
                <div className="aspect-video w-full overflow-hidden">
                  <img
                    src={venue.image || "/placeholder.svg"}
                    alt={venue.name}
                    className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
                  />
                </div>
                <CardHeader className="p-4">
                  <CardTitle className="line-clamp-1">{venue.name}</CardTitle>
                  <CardDescription className="line-clamp-2">{venue.description}</CardDescription>
                </CardHeader>
                <CardContent className="p-4 pt-0">
                  <div className="mb-3 flex flex-wrap gap-2">
                    {venue.tags.map((tag) => (
                      <Badge key={tag} variant="secondary">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex flex-col space-y-2 text-sm">
                    <div className="flex items-center text-muted-foreground">
                      <MapPin className="mr-2 h-4 w-4" />
                      {venue.address}
                    </div>
                    <div className="flex items-center text-muted-foreground">
                      <Star className="mr-2 h-4 w-4 fill-yellow-400 text-yellow-400" />
                      {venue.rating} · {venue.reviews} reviews
                    </div>
                    <div className="text-muted-foreground">{venue.events} upcoming events</div>
                  </div>
                </CardContent>
                <CardFooter className="flex items-center justify-between border-t p-4">
                  <Button variant="outline" size="sm" className="h-8 gap-1">
                    <MessageSquare className="h-4 w-4" />
                    <span>Chat</span>
                  </Button>
                  <Link href={`/venues/${venue.id}`}>
                    <Button size="sm" className="h-8">
                      View Venue
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

