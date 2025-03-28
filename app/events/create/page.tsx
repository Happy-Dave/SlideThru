'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Calendar } from '@/components/ui/calendar'
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover'
import { format } from 'date-fns'
import { CalendarIcon, Clock, Upload, Info } from 'lucide-react'
import { cn } from '@/lib/utils'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Checkbox } from '@/components/ui/checkbox'
import { Switch } from '@/components/ui/switch'

export default function CreateEventPage() {
  const [date, setDate] = useState<Date>()
  const [time, setTime] = useState<string>('')
  const [eventType, setEventType] = useState<string>('')
  const [isPublic, setIsPublic] = useState(true)
  
  return (
    <div className="container mx-auto px-4 py-6">
      <div className="mx-auto max-w-3xl">
        <h1 className="mb-6 text-3xl font-bold tracking-tight">Create an Event</h1>
        
        <Tabs defaultValue="details" className="w-full">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="details">Event Details</TabsTrigger>
            <TabsTrigger value="location">Location</TabsTrigger>
            <TabsTrigger value="settings">Settings</TabsTrigger>
          </TabsList>
          
          <TabsContent value="details">
            <Card>
              <CardHeader>
                <CardTitle>Event Details</CardTitle>
                <CardDescription>
                  Provide the basic information about your event
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="event-title">Event Title</Label>
                  <Input id="event-title" placeholder="Enter a descriptive title for your event" />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="event-type">Event Type</Label>
                  <Select value={eventType} onValueChange={setEventType}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select event type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="music">Live Music</SelectItem>
                      <SelectItem value="happy-hour">Happy Hour</SelectItem>
                      <SelectItem value="trivia">Trivia Night</SelectItem>
                      <SelectItem value="karaoke">Karaoke</SelectItem>
                      <SelectItem value="open-mic">Open Mic</SelectItem>
                      <SelectItem value="food-tour">Food Tour</SelectItem>
                      <SelectItem value="bar-crawl">Bar Crawl</SelectItem>
                      <SelectItem value="game-night">Game Night</SelectItem>
                      <SelectItem value="dance">Dance Class/Event</SelectItem>
                      <SelectItem value="art">Art Event</SelectItem>
                      <SelectItem value="social">Social Gathering</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="event-description">Description</Label>
                  <Textarea
                    id="event-description"
                    placeholder="Describe your event, what attendees can expect, and why they should join"
                    rows={5}
                  />
                </div>
                
                <div className="grid gap-4 md:grid-cols-2">
                  <div className="space-y-2">
                    <Label>Date</Label>
                    <Popover>
                      <PopoverTrigger asChild>
                        <Button
                          variant="outline"
                          className={cn(
                            "w-full justify-start text-left font-normal",
                            !date && "text-muted-foreground"
                          )}
                        >
                          <CalendarIcon className="mr-2 h-4 w-4" />
                          {date ? format(date, "PPP") : "Select date"}
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0">
                        <Calendar
                          mode="single"
                          selected={date}
                          onSelect={setDate}
                          initialFocus
                        />
                      </PopoverContent>
                    </Popover>
                  </div>
                  
                  <div className="space-y-2">
                    <Label>Time</Label>
                    <Select value={time} onValueChange={setTime}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select time">
                          {time ? (
                            <div className="flex items-center">
                              <Clock className="mr-2 h-4 w-4" />
                              {time}
                            </div>
                          ) : (
                            "Select time"
                          )}
                        </SelectValue>
                      </SelectTrigger>
                      <SelectContent>
                        {Array.from({ length: 48 }).map((_, index) => {
                          const hour = Math.floor(index / 2);
                          const minute = index % 2 === 0 ? "00" : "30";
                          const value = `${hour}:${minute}`;
                          const isPM = hour >= 12;
                          const displayHour = hour === 0 ? 12 : hour > 12 ? hour - 12 : hour;
                          const displayTime = `${displayHour}:${minute} ${isPM ? 'PM' : 'AM'}`;
                          
                          return (
                            <SelectItem key={value} value={value}>
                              {displayTime}
                            </SelectItem>
                          );
                        })}
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label>Event Image</Label>
                  <div className="flex items-center justify-center rounded-md border border-dashed p-8">
                    <div className="flex flex-col items-center space-y-2 text-center">
                      <Upload className="h-8 w-8 text-muted-foreground" />
                      <div className="text-sm font-medium">
                        Drag & drop an image or click to browse
                      </div>
                      <div className="text-xs text-muted-foreground">
                        Recommended size: 1200 x 630 pixels
                      </div>
                      <Button variant="outline" size="sm">
                        Upload Image
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button variant="outline">Save Draft</Button>
                <Button>Continue to Location</Button>
              </CardFooter>
            </Card>
          </TabsContent>
          
          <TabsContent value="location">
            <Card>
              <CardHeader>
                <CardTitle>Event Location</CardTitle>
                <CardDescription>
                  Specify where your event will take place
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="venue-name">Venue Name</Label>
                  <Input id="venue-name" placeholder="Enter the name of the venue" />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="address">Address</Label>
                  <Input id="address" placeholder="Street address" />
                </div>
                
                <div className="grid gap-4 md:grid-cols-3">
                  <div className="space-y-2">
                    <Label htmlFor="city">City</Label>
                    <Input id="city" placeholder="City" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="state">State</Label>
                    <Input id="state" placeholder="State" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="zip">ZIP Code</Label>
                    <Input id="zip" placeholder="ZIP Code" />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label>Map Location</Label>
                  <div className="h-64 rounded-md border bg-muted">
                    <div className="flex h-full items-center justify-center text-muted-foreground">
                      Map interface would be displayed here
                    </div>
                  </div>
                  <div className="text-xs text-muted-foreground">
                    Drag the pin to mark the exact location of your event
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="location-notes">Additional Location Information</Label>
                  <Textarea
                    id="location-notes"
                    placeholder="Provide any additional details about the location (parking, entrance, etc.)"
                    rows={3}
                  />
                </div>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button variant="outline">Back</Button>
                <Button>Continue to Settings</Button>
              </CardFooter>
            </Card>
          </TabsContent>
          
          <TabsContent value="settings">
            <Card>
              <CardHeader>
                <CardTitle>Event Settings</CardTitle>
                <CardDescription>
                  Configure additional settings for your event
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label className="text-base">Visibility</Label>
                      <div className="text-sm text-muted-foreground">
                        Control who can see your event
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Label htmlFor="public-event" className="text-sm">
                        {isPublic ? 'Public' : 'Private'}
                      </Label>
                      <Switch
                        id="public-event"
                        checked={isPublic}
                        onCheckedChange={setIsPublic}
                      />
                    </div>
                  </div>
                  
                  <div className="rounded-md border p-4">
                    <div className="flex items-start space-x-3">
                      <Info className="mt-0.5 h-5 w-5 text-muted-foreground" />
                      <div className="space-y-1">
                        <p className="text-sm font-medium">
                          {isPublic ? 'Public Event' : 'Private Event'}
                        </p>
                        <p className="text-sm text-muted-foreground">
                          {isPublic
                            ? 'Your event will be visible to everyone and listed in search results.'
                            : 'Your event will only be visible to people you invite or share the link with.'}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="capacity">Capacity</Label>
                  <Input
                    id="capacity"
                    type="number"
                    placeholder="Maximum number of attendees"
                    min="1"
                  />
                  <div className="text-xs text-muted-foreground">
                    Leave blank for unlimited capacity
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label>RSVP Options</Label>
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <Checkbox id="require-approval" />
                      <Label htmlFor="require-approval" className="text-sm font-normal">
                        Require approval for attendees
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="allow-guests" />
                      <Label htmlFor="allow-guests" className="text-sm font-normal">
                        Allow attendees to bring guests
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="show-attendees" defaultChecked />
                      <Label htmlFor="show-attendees" className="text-sm font-normal">
                        Show attendee list publicly
                      </Label>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label>Tags</Label>
                  <Input placeholder="Add tags separated by commas (e.g., music, social, networking)" />
                  <div className="text-xs text-muted-foreground">
                    Tags help people discover your event
                  </div>
                </div>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button variant="outline">Back</Button>
                <Button>Create Event</Button>
              </CardFooter>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}