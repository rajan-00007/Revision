"use client"

import { useState } from "react"
import { format } from "date-fns"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Checkbox } from "@/components/ui/checkbox"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { Switch } from "@/components/ui/switch"

import { Calendar } from "@/components/ui/calendar"
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"

import {
    Command,
    CommandInput,
    CommandItem,
    CommandList,
} from "@/components/ui/command"

export default function ProfilePage() {
    const [date, setDate] = useState()
    const [country, setCountry] = useState("")

    return (
        <div className="flex justify-center p-10">
            <Card className="w-full max-w-xl">
                <CardHeader>
                    <CardTitle>Create Profile</CardTitle>
                </CardHeader>

                <CardContent className="space-y-6">

                    <div className="space-y-2">
                        <Label>Name</Label>
                        <Input className="focus-visible:ring-[#2563EB] focus-visible:border-[#2563EB]" />
                    </div>     
                    <div className="space-y-2">
                        <Label>Email</Label>
                        <Input
                            type="email"
                            className="focus-visible:ring-[#2563EB] focus-visible:border-[#2563EB]"
                        />
                    </div>

              
                    <div className="space-y-2">
                        <Label>Bio</Label>
                        <Textarea className="focus-visible:ring-[#2563EB] focus-visible:border-[#2563EB]" />
                    </div>

                    <div className="space-y-2">
                        <Label>Role</Label>
                        <Select>
                            <SelectTrigger className="focus:ring-[#2563EB] focus:border-[#2563EB]">
                                <SelectValue placeholder="Select role" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="admin" className="data-[state=checked]:text-[#2563EB]">
                                    Admin
                                </SelectItem>
                                <SelectItem value="user" className="data-[state=checked]:text-[#2563EB]">
                                    User
                                </SelectItem>
                                <SelectItem value="manager" className="data-[state=checked]:text-[#2563EB]">
                                    Manager
                                </SelectItem>
                            </SelectContent>
                        </Select>
                    </div>

                    <div className="space-y-2">
                        <Label>Country (Search)</Label>
                        <Command className="border rounded-md focus-within:ring-1 focus-within:ring-[#2563EB]">
                            <CommandInput placeholder="Search country..." />
                            <CommandList>
                                <CommandItem
                                    onSelect={() => setCountry("India")}
                                    className="data-[selected=true]:text-[#2563EB]"
                                >
                                    India
                                </CommandItem>
                                <CommandItem
                                    onSelect={() => setCountry("Canada")}
                                    className="data-[selected=true]:text-[#2563EB]"
                                >
                                    Canada
                                </CommandItem>
                                <CommandItem
                                    onSelect={() => setCountry("USA")}
                                    className="data-[selected=true]:text-[#2563EB]"
                                >
                                    USA
                                </CommandItem>
                            </CommandList>
                        </Command>

                        {country && (
                            <p className="text-sm text-muted-foreground">
                                Selected: {country}
                            </p>
                        )}
                    </div>

                    <div className="space-y-2">
                        <Label>Gender</Label>
                        <RadioGroup defaultValue="male" className="flex gap-6">
                            <div className="flex items-center gap-2">
                                <RadioGroupItem
                                    value="male"
                                    className="w-4 h-4 accent-blue-600 focus:ring-2 focus:ring-blue-400"
                                />
                                <Label>Male</Label>
                            </div>
                            <div className="flex items-center gap-2">
                                <RadioGroupItem
                                    value="female"
                                    className="w-4 h-4 accent-blue-600 focus:ring-2 focus:ring-blue-400"
                                />
                                <Label>Female</Label>
                            </div>
                        </RadioGroup>
                    </div>


                    <div className="space-y-2">
                        <Label>Date of Birth</Label>
                        <Popover>
                            <PopoverTrigger asChild>
                                <Button
                                    variant="outline"
                                    className="focus-visible:ring-[#2563EB] focus-visible:border-[#2563EB]"
                                >
                                    {date ? format(date, "PPP") : "Pick a date"}
                                </Button>
                            </PopoverTrigger>
                            <PopoverContent className="w-auto p-0 bg-white">
                                <Calendar
                                    mode="single"
                                    selected={date}
                                    onSelect={setDate}
                                />
                            </PopoverContent>
                        </Popover>
                    </div>

                    <div className="flex items-center space-x-2">
                        <Checkbox className="data-[state=checked]:bg-[#2563EB] data-[state=checked]:border-[#2563EB]" />
                        <Label>Accept terms and conditions</Label>
                    </div>
                    <div className="flex items-center justify-between">
                        <Label>Email Notifications</Label>
                        <Switch className="data-[state=checked]:bg-[#2563EB]" />
                    </div>

                    <Button className="w-full bg-[#2563EB] hover:bg-[#1D4ED8]">
                        Create Profile
                    </Button>
                </CardContent>
            </Card>
        </div>
    )
}
